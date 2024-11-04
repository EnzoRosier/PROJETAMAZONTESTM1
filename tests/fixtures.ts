import { test as base } from '@playwright/test';
import { MeilleuresVentes } from './MeilleuresVentes';
import { DernieresNouveautes } from './DerniereNouveautes';
import { ChangerLangue } from './ChangerLangue';
import { ViderPanier } from './ViderPanier';
import { ChangerEmplacement } from './ChangerEmplacement';
import { ChercherPS5 } from './ChercherPS5';
import { ChangerQuantPanier } from './ChangerQuantPanier';
import { AjouterPanierQuantDiff } from './AjouterPanierQuantDiff';
import { AjouterArticlesFrequents } from './AjouterArticlesFrequents';
import { RechercherArticle } from './RechercherArticle';
import { AjouterElementPanier } from './AjouterElementPanier';
import { AccederPanier } from './AccederPanier';
import { CreateAccountAmazon } from './CreateAccount';
import { LoginAmazon } from './Login';

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
  ChangerEmplacement: async ({ page }, use) => {
    await use(new ChangerEmplacement(page));
  },
  ChercherPS5: async ({ page }, use) => {
    await use(new ChercherPS5(page));
  },
  ChangerQuantPanier: async ({ page }, use) => {
    await use(new ChangerQuantPanier(page));
  },
  AjouterPanierQuantDiff: async ({ page }, use) => {
    await use(new AjouterPanierQuantDiff(page));
  },
  AjouterArticlesFrequents: async ({ page }, use) => {
    await use(new AjouterArticlesFrequents(page));
  },
  RechercherArticle:async({page},use)=>{
    await use(new RechercherArticle(page));
  },
  AjouterElementPanier: async({page},use)=>{
    await use(new AjouterElementPanier(page));
  },
  AccederPanier:async({page},use)=>{
    await use(new AccederPanier(page));
  },
  CreateAccount:async({page},use)=>{
    await use(new CreateAccountAmazon(page));
  },
  Login:async({page},use)=>{
    await use(new LoginAmazon(page));
  }
});

const expect = base.expect;
export { test, expect };
