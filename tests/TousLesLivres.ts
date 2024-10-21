import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class TousLesLivres {
    readonly page: Page;
    readonly hamburgerMenu : Locator;
    readonly sectionLivre : Locator;
    
    constructor(page: Page){
        this.page = page
        this.hamburgerMenu = page.locator("#nav-hamburger-menu");
        this.sectionLivre = page.locator(".hmenu-item").filter({hasText : "Livres"});
    }

    async BaseTest() {
        await this.hamburgerMenu.click();
        await this.sectionLivre.click();
        await this.page.waitForTimeout(3000);
    }
}