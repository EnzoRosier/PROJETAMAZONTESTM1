import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class DernieresNouveautes {
    readonly page: Page;
    readonly lienDernieresNouveautes: Locator;
    readonly lienBebe : Locator;
    readonly lienTop1 : Locator;
    
    constructor(page: Page){
        this.page = page
        this.lienDernieresNouveautes = page.locator(".nav-a").filter({hasText : "Dernières Nouveautés"});
        this.lienBebe = page.locator("._p13n-zg-nav-tree-all_style_zg-browse-item__1rdKf").filter({hasText : "Bébé et Puériculture"});
        this.lienTop1 = page.locator("#gridItemRoot").first();
    }

    async BaseTest() {
        await this.lienDernieresNouveautes.click();
        await this.lienBebe.click();
        await expect(await this.page.url()).toEqual("https://www.amazon.fr/gp/new-releases/baby/ref=zg_bsnr_nav_baby_0")
        await this.lienTop1.click();
        // Comme les articles des dernières nouveautés changent souvent on ne peut que tester qu'on a bien quitté la page
        await expect(await this.page.url()!="https://www.amazon.fr/gp/new-releases/baby/ref=zg_bsnr_nav_baby_0").toBeTruthy()
    }
}