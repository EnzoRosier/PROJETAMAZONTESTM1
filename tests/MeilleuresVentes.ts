import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class MeilleuresVentes {
    readonly page: Page;
    readonly hamburgerMenu: Locator;
    readonly LienMeilleuresVentes: Locator;
    
    constructor(page: Page){
        this.page = page
        this.hamburgerMenu = page.locator('#nav-hamburger-menu')
        this.LienMeilleuresVentes = page.locator("#hmenu-content")
        .locator("div").filter({hasText : "Tendances"})
        .locator('a').filter({hasText : "Meilleures ventes"}[1])
    }

    async BasicForm() {
        await this.hamburgerMenu.click()
        await this.LienMeilleuresVentes.click()
    }
}