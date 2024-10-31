import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class MeilleuresVentes {
    readonly page: Page;
    readonly lienMeilleuresVentes: Locator;
    readonly changerPageHighTech : Locator;
    
    constructor(page: Page){
        this.page = page
        this.lienMeilleuresVentes = page.locator(".nav-a").filter({hasText : "Meilleures ventes"});
        this.changerPageHighTech = page.locator("#a-autoid-1"); // Ceci correspond à la première catégorie disponible (car les catégories changent régulièrement d'ordre)
    }

    async BaseTest() {
        await this.lienMeilleuresVentes.click();
        await this.changerPageHighTech.click();
        await expect(await this.page.url()).toEqual("https://www.amazon.fr/gp/bestsellers/?ref_=nav_cs_bestsellers")
        await this.page.waitForTimeout(1000);
    }
}