import { test as base } from '@playwright/test';
import { MeilleuresVentes } from './MeilleuresVentes';

const test = base.extend({
 MeilleuresVentes: async ({ page }, use) => {
 await use(new MeilleuresVentes(page));
 },
});

const expect = base.expect;
export { test, expect };