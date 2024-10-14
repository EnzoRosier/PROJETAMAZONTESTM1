import { test } from './fixtures'

test.beforeEach(async({page}) => {
 await page.goto('https://www.amazon.fr/')
 })
test('Test Meilleures Ventes', async({MeilleuresVentes}) => {
 await MeilleuresVentes.BasicForm()
});
