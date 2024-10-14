import { test } from './fixtures'


test.beforeEach(async({page}) => {
 await page.goto('https://www.amazon.fr/')
 await page.locator('nb-card').filter({ hasText: 'Accepter' }).getByRole('button').click()

 })
//test('Form Layouts page', async({FormLayouts}) => {
 //await FormLayouts.BasicForm()
//});

test('Changer la langue du site', async({FormLayouts})=>{
   // await FormLayouts.LangueForm()
})