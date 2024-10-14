import { test } from './fixtures'


test.beforeEach(async({page}) => {
 await page.goto('https://www.amazon.fr/') // le lidne de amaezon
 await page.locator("#sp-cc-accept").click() // permet de passer l'étape des cookies

 });

test('Test Meilleures Ventes', async({MeilleuresVentes}) => {
 await MeilleuresVentes.BasicForm()
});

test('Changer la langue du site', async({ChangerLangue})=>{
   await ChangerLangue.BasicForm()
});