import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class ChercherPS5 {
    readonly page: Page;
    readonly hamburgerMenu : Locator;
    readonly sectionJeux : Locator;
    readonly lienPS5 : Locator;
    
    constructor(page: Page){
        this.page = page
        this.hamburgerMenu = page.locator("#nav-hamburger-menu");
        this.sectionJeux = page.getByRole('link', { name: 'Jeux vidéo et Consoles' })
        this.lienPS5 = page.getByRole('link', { name: 'PlayStation 5' }).first();
    }

    async BaseTest() {
        await this.hamburgerMenu.click();
        await this.sectionJeux.click();
        await this.lienPS5.click();
        await this.page.waitForTimeout(3000);
    }
}