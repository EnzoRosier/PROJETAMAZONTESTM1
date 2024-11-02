import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class AjouterElementPanier{
    readonly page: Page;

    constructor(page: Page){
        this.page = page
    }

    async BaseTest(){
        await this.page.locator("#add-to-cart-button").click()
        await this.page.locator('input[type="submit"][aria-labelledby="attachSiNoCoverage-announce"]').click()
        await this.page.locator("#nav-cart-count").click()
        //on vérifie que parmi les articles du panier, celui qu'on vient d'obtenir est présent
        await expect(this.page.locator('span.a-truncate-cut', { hasText: 'PlayStation The Last of Us Part II Remastered (PS5)' })).toBeVisible();
    }
}