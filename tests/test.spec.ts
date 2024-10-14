import { test } from './fixtures'

test.beforeEach(async({page}) => {
 await page.goto('http://localhost:4200/')
 await page.getByText('Forms').click()
 await page.getByText('Form Layouts').click()
 })
test('Form Layouts page', async({FormLayouts}) => {
 await FormLayouts.BasicForm()
});
