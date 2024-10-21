import { test as base } from '@playwright/test';
import { MeilleuresVentes } from './MeilleuresVentes';
import { DernieresNouveautes } from './DerniereNouveautes';
import { ChangerLangue } from './ChangerLangue';
import { ViderPanier } from './ViderPanier';

const test = base.extend({
  MeilleuresVentes: async ({ page }, use) => {
    await use(new MeilleuresVentes(page));
  },
  
  ChangerLangue: async ({ page }, use) => {
    await use(new ChangerLangue(page));
  },
  ViderPanier: async ({ page }, use) => {
    await use(new ViderPanier(page));
  },
  DernieresNouveautes: async ({ page }, use) => {
    await use(new DernieresNouveautes(page));
  },
});

const expect = base.expect;
export { test, expect };
