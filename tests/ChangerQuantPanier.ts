import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class ChangerQuantPanier {
    readonly page: Page;
    readonly bouttonQuant: Locator;
    readonly bouttonOption2: Locator;
    readonly bouttonAjoutPanier: Locator;
    readonly popup: Locator;
    readonly bouttonPanier: Locator;

    
    constructor(page: Page){
        this.page = page
        this.bouttonAjoutPanier = this.page.locator("#add-to-cart-button");
        this.popup = this.page.locator('input[type="submit"][aria-labelledby="attachSiNoCoverage-announce"]');
        this.bouttonPanier = this.page.locator("#nav-cart-count");
        this.bouttonQuant = this.page.getByText('Qté :1');
        this.bouttonOption2 = this.page.getByRole('option', { name: '2' }).locator('#quantity_2');
    }

    async BasicForm() {
        await this.page.goto('https://www.amazon.fr/Nintendo-Super-Mario-Bros-Wonder/dp/B0C9JFT9DX/ref=sr_1_1?sr=8-1')
        await this.bouttonAjoutPanier.click()
        await this.popup.click()
        await this.bouttonPanier.click()
        await this.bouttonQuant.click()
        await this.bouttonOption2.click()
        await expect(this.page.getByText("Qté :2")).toBeVisible()
    }
}