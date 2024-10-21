import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class ViderPanier {
    readonly page: Page;
    readonly bouttonSuppr: Locator;
    
    constructor(page: Page){
        this.page = page
        this.bouttonSuppr = page.locator('input[type="submit"][aria-label="Supprimer Super Mario Bros. Wonder"]')
    
    }

    async BasicForm() {
        await this.bouttonSuppr.click()
        await expect(this.page.getByText("a été supprimé de Votre panier.")).toBeVisible()
    }
}