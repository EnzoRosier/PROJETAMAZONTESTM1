import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class ChercherPS5 {
    readonly page: Page;
    readonly hamburgerMenu : Locator;
    readonly sectionJeux : Locator;
    readonly lienPS5 : Locator;
    readonly voirPlus : Locator;
    readonly verif : Locator
    
    constructor(page: Page){
        this.page = page
        this.hamburgerMenu = page.locator("#nav-hamburger-menu");
        this.sectionJeux = page.getByRole('link', { name: 'Jeux vidéo et Consoles' })
        this.lienPS5 = page.getByRole('link', { name: 'PlayStation 5'}).first();
        this.voirPlus = page.getByRole('link', { name: 'Voir plus Les plus demandés' })
        this.verif = page.getByText('Les plus demandés', { exact: true })
    }

    async BaseTest() {
        await this.hamburgerMenu.click();
        await this.sectionJeux.click();
        await this.lienPS5.click({force : true});
        await expect(await this.page.url()=="https://www.amazon.fr/gp/browse.html?node=20904281031&ref_=nav_em_ps5_0_2_11_8").toBeTruthy()
        await this.voirPlus.click({force : true});
        await expect(await this.verif).toBeVisible()
        await this.page.waitForTimeout(1000);
    }
}