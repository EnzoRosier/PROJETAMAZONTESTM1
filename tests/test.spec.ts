import { test } from './fixtures'


test.beforeEach(async({page}) => {
 await page.goto('https://www.amazon.fr/')
 await page.locator("#sp-cc-accept").click()

 });

test('Test Meilleures Ventes', async({MeilleuresVentes}) => {
 await MeilleuresVentes.BasicForm()
});

test('Changer la langue du site', async({ChangerLangue})=>{
   await ChangerLangue.BasicForm()
});