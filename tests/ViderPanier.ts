import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class ViderPanier {
    readonly page: Page;
    readonly bouttonSuppr: Locator;
    readonly bouttonAjoutPanier: Locator;
    readonly bouttonPanier: Locator;
    readonly popup: Locator;
    
    constructor(page: Page){
        this.page = page
        this.bouttonSuppr = this.page.locator('input[type="submit"][aria-label="Supprimer Super Mario Bros. Wonder"]')
        this.bouttonAjoutPanier = this.page.locator("#add-to-cart-button");
        this.bouttonPanier = this.page.locator("#nav-cart-count");
        this.popup = this.page.locator('input[type="submit"][aria-labelledby="attachSiNoCoverage-announce"]')
    }

    async BasicForm() {
        await this.page.goto('https://www.amazon.fr/Nintendo-Super-Mario-Bros-Wonder/dp/B0C9JFT9DX/ref=sr_1_1?sr=8-1')
        await this.bouttonAjoutPanier.click()
        await this.popup.click()
        await this.bouttonPanier.click()
        await this.bouttonSuppr.click()
        await expect(this.page.getByText("Votre panier Amazon est vide")).toBeVisible()
    }
}