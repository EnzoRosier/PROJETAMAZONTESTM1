import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class ChangerLangue {
    readonly page: Page;
    readonly hamburgerMenu: Locator;
    readonly LienMeilleuresVentes: Locator;
    
    constructor(page: Page){
        this.page = page
        this.hamburgerMenu = page.locator('#nav-hamburger-menu')
        this.LienMeilleuresVentes = page.locator('a').filter({hasText : "Meilleures ventes"})
    }

    async BasicForm() {
        await this.hamburgerMenu.click()
        await this.LienMeilleuresVentes.click()
    }
}