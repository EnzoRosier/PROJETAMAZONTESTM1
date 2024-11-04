import { AccederPanier } from './AccederPanier';
import { AjouterElementPanier } from './AjouterElementPanier';
import { CreateAccountAmazon } from './CreateAccount';
import { test } from './fixtures'
import { LoginAmazon } from './Login';
import { LogoutAmazon } from './Logout';
import { RechercherArticle } from './RechercherArticle';


test.beforeEach(async({page}) => {
 await page.goto('https://www.amazon.fr/') // le lien d'amazon
 const acceptButton = page.locator("#sp-cc-accept");
 if (await acceptButton.count() > 0) { // Vérifie si l'élément existe
     await acceptButton.click(); // Clique sur le bouton
 }
 

 });

test('Test Meilleures Ventes', async({MeilleuresVentes}) => {
 await MeilleuresVentes.BaseTest()
});
test('Test Dernières Nouveautés', async({DernieresNouveautes}) => {
   await DernieresNouveautes.BaseTest();
  });
  test('Test Chercher PS5', async({ChercherPS5}) => {
   await ChercherPS5.BaseTest()
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

test('Changer la region de livraison', async({ChangerEmplacement})=>{
   await ChangerEmplacement.BasicForm()
});

test('Changer quantite panier', async({page, ChangerQuantPanier})=>{
   await page.goto('https://www.amazon.fr/Nintendo-Super-Mario-Bros-Wonder/dp/B0C9JFT9DX/ref=sr_1_1?sr=8-1')
   await page.locator("#add-to-cart-button").click()
   await page.locator('input[type="submit"][aria-labelledby="attachSiNoCoverage-announce"]').click()
   await page.locator("#nav-cart-count").click()
   await ChangerQuantPanier.BasicForm()
});

test('Ajouter produit avec quantité différente', async({AjouterPanierQuantDiff})=>{
   await AjouterPanierQuantDiff.BasicForm()
});

test('Visiter boutique du marchand', async({page,AjouterArticlesFrequents})=>{
   await page.goto('https://www.amazon.fr/Nintendo-Super-Mario-Bros-Wonder/dp/B0C9JFT9DX/ref=sr_1_1?sr=8-1')
   
   await AjouterArticlesFrequents.BasicForm()
});

test('Vérifier la cohérence des résultats de recherche Amazon', async ({RechercherArticle}) => {
   await RechercherArticle.BaseTest("The Last Of Us")
});

test('Ajouter un article au panier', async ({page,AjouterElementPanier}) => {
   await page.goto("https://www.amazon.fr/gp/product/B0CPFW7WVM/ref=ox_sc_act_title_1?smid=A1X6FK5RDHNB96&psc=1")
   await AjouterElementPanier.BaseTest()
});

test('Accéder au panier', async({AccederPanier})=>{
   await AccederPanier.BaseTest();
});

test('Login', async ({ page }) => {
   const loginAmazon = new LoginAmazon(page);
   await loginAmazon.login('alixe.maerte@gmail.com', 'TRUCMUCH12');
});

test('Logout', async ({ page }) => {
   const logoutAmazon = new LogoutAmazon(page);
   await logoutAmazon.logout();
});

test('Create Account', async ({ page }) => {
   const createAccountAmazon = new CreateAccountAmazon(page);
   await createAccountAmazon.createAccount();
});