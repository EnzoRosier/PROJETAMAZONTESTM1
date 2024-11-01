import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class AjouterArticlesFrequents {
    readonly page: Page;
    
    constructor(page: Page){
        this.page = page
    }

    async BasicForm() {
        this.page.locator('#bylineInfo').click()
        await this.page.waitForTimeout(4500);
        await expect(await this.page.url()).toEqual("https://www.amazon.fr/stores/Nintendo/page/EDCEE9DA-1D07-44B3-A2EF-725FFB9A75ED?ref_=ast_bln")
    }
}