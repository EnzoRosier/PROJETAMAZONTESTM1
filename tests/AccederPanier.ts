import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class AccederPanier{
    readonly page: Page;

    constructor(page: Page){
        this.page = page
    }

    async BaseTest(){
        await this.page.locator("#nav-cart-count").click()
        await expect(await this.page.url()).toEqual("https://www.amazon.fr/gp/cart/view.html?ref_=nav_cart")
    }
}