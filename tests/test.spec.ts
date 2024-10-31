import { test } from './fixtures'


test.beforeEach(async({page}) => {
 await page.goto('https://www.amazon.fr/') // le lien d'amazon
 if( await page.locator("#sp-cc-accept")!=undefined){
    await page.locator("#sp-cc-accept").click() // permet de passer l'étape des cookies
 }
 

 });

test('Test Meilleures Ventes', async({MeilleuresVentes}) => {
 await MeilleuresVentes.BaseTest()
});
test('Test Dernières Nouveautés', async({DernieresNouveautes}) => {
   await DernieresNouveautes.BaseTest();
  });

test('Changer la langue du site', async({ChangerLangue})=>{
   await ChangerLangue.BasicForm()
});

test('Vider le panier', async({page, ViderPanier})=>{
   await page.goto('https://www.amazon.fr/Nintendo-Super-Mario-Bros-Wonder/dp/B0C9JFT9DX/ref=sr_1_1?sr=8-1')
   await page.locator("#add-to-cart-button").click()
   await page.locator('input[type="submit"][aria-labelledby="attachSiNoCoverage-announce"]').click()
   await page.locator("#nav-cart-count").click()
   
   await ViderPanier.BasicForm()
});

test('Changer quantite article dans panier', async({page, ViderPanier})=>{
   await page.goto('https://www.amazon.fr/Nintendo-Super-Mario-Bros-Wonder/dp/B0C9JFT9DX/ref=sr_1_1?sr=8-1')
   await page.locator("#add-to-cart-button").click()
   await page.locator('input[type="submit"][aria-labelledby="attachSiNoCoverage-announce"]').click()
   await page.locator("#nav-cart-count").click()
   
   await ViderPanier.BasicForm()
});