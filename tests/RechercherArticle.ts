import { Locator, Page, expect } from "@playwright/test";
import { faker } from '@faker-js/faker';

export class RechercherArticle {
    readonly page: Page;
    readonly barreRecherche: Locator;

    constructor(page: Page) {
        this.page = page;
        this.barreRecherche = page.locator('input[name="field-keywords"]');
    }

    async BaseTest(term: string) {
        await this.barreRecherche.fill(term);
        await this.barreRecherche.press('Enter');
        await this.page.waitForSelector('.s-main-slot [data-component-type="s-search-result"]');
        //on ne prend que les 3 premiers produits pour éviter que le test soit trop long ou ne fonctionne pas sur un trop grand échantillon
        const titresProduits = await this.page.$$eval('.s-main-slot [data-component-type="s-search-result"] h2 .a-size-base-plus.a-color-base.a-text-normal', elements =>
            elements.slice(0, 3).map(el => (el as HTMLElement).innerText)
        );
        expect(titresProduits.length).toBe(3);

        //Parfois avec la qualité variable des produits vendus, on a pas exactement le bon nom, ici un poster appelé "The last of the us"
        //pour la recherche "the last of us" donc on vérifie qu'une partie de la recherche est dans le résultat
        const motsTermes = term.toLowerCase().split(' ');
        for (const titre of titresProduits) {
            const titreLowerCase = titre.toLowerCase();
            const contientMot = motsTermes.some(mot => titreLowerCase.includes(mot));
            expect(contientMot).toBe(true);
        }
    }
}
