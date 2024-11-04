import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class AjouterPanierQuantDiff {
    readonly page: Page;
    readonly bouttonQuantOption2: Locator;
    readonly bouttonQuant: Locator;
    readonly ajouterPanier: Locator;
    readonly popup: Locator;
    readonly buttonPanier: Locator;
    
    constructor(page: Page){
        this.page = page
        this.bouttonQuant = this.page.locator('#quantityRelocate_feature_div').getByText('Quantité :1');
        this.bouttonQuantOption2 = this.page.getByLabel('2', { exact: true }).getByText('2');
        this.ajouterPanier = this.page.locator("#add-to-cart-button");
        this.popup = this.page.locator('input[type="submit"][aria-labelledby="attachSiNoCoverage-announce"]');
        this.buttonPanier = this.page.locator("#nav-cart-count");
    }

    async BasicForm() {
        await this.page.goto('https://www.amazon.fr/Nintendo-Super-Mario-Bros-Wonder/dp/B0C9JFT9DX/ref=sr_1_1?sr=8-1')
        await this.bouttonQuant.click();
        await this.bouttonQuantOption2.click();
        await this.ajouterPanier.click()
        await this.popup.click()
        await this.buttonPanier.click()
        await expect(this.page.getByText("Qté :2")).toBeVisible()
    }
}