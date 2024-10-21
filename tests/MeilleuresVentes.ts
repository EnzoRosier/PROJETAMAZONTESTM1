import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class MeilleuresVentes {
    readonly page: Page;
    readonly lienMeilleuresVentes: Locator;
    readonly changerPageHighTech : Locator;
    
    constructor(page: Page){
        this.page = page
        this.lienMeilleuresVentes = page.locator(".nav-a").filter({hasText : "Meilleures ventes"});
        this.changerPageHighTech = page.locator("#a-autoid-1");
    }

    async BasicForm() {
        await this.lienMeilleuresVentes.click();
        await this.changerPageHighTech.click();
    }
}