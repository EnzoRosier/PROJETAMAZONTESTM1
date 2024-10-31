import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class ChangerQuantPanier {
    readonly page: Page;
    readonly bouttonQuant2: Locator;
    
    constructor(page: Page){
        this.page = page
    
    }

    async BasicForm() {
        await this.page.getByText('Qté :1').click()
        await this.page.getByRole('option', { name: '2' }).locator('#quantity_2').click()
        await expect(this.page.getByText("Qté :2")).toBeVisible()
    }
}