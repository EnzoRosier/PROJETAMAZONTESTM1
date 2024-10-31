import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class AjouterPanierQuantDiff {
    readonly page: Page;
    readonly bouttonQuant2: Locator;
    
    constructor(page: Page){
        this.page = page
    
    }

    async BasicForm() {
        await this.page.goto('https://www.amazon.fr/Nintendo-Super-Mario-Bros-Wonder/dp/B0C9JFT9DX/ref=sr_1_1?sr=8-1')
        await this.page.locator('#quantityRelocate_feature_div').getByText('Quantité :1').click();
        await this.page.getByLabel('2', { exact: true }).getByText('2').click();
        await this.page.locator("#add-to-cart-button").click()
        await this.page.locator('input[type="submit"][aria-labelledby="attachSiNoCoverage-announce"]').click()
        await this.page.locator("#nav-cart-count").click()
        await expect(this.page.getByText("Qté :2")).toBeVisible()
    }
}