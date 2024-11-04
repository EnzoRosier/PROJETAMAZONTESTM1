import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class CreateAccountAmazon {
    readonly page: Page;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly passwordCheckInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = this.page.locator('#ap_customer_name');
        this.emailInput = this.page.locator('#ap_email');
        this.passwordInput = this.page.locator('#ap_password');
        this.passwordCheckInput = this.page.locator('#ap_password_check');
        this.submitButton = this.page.locator('#continue');
    }

    async createAccount() {
        const randomName = faker.name.firstName();
        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password();

        await this.page.goto('https://www.amazon.fr/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.fr%2Fcustomer-preferences%2Fedit%3Fie%3DUTF8%26preferencesReturnUrl%3D%252Fcustomer-preferences%252Fedit%253Fie%253DUTF8%2526preferencesReturnUrl%253D%25252Fref%25253Dnav_logo%2526ref_%253Dtopnav_lang%26ref_%3Dnav_ya_signin&prevRID=MEPD9NP7FZSF02VPBY2J&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=frflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=frflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
        await this.nameInput.fill(randomName);
        await this.emailInput.fill(randomEmail);
        await this.passwordInput.fill(randomPassword);
        await this.passwordCheckInput.fill(randomPassword);
        await this.submitButton.click();
        await expect(this.page.locator('iframe[title="verification puzzle"]').contentFrame().getByRole('heading', { name: 'Résoudre ce puzzle pour proté' })).toBeVisible();
    }
}
