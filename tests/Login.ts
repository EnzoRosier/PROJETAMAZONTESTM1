import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class LoginAmazon {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = this.page.locator('#ap_email');
        this.passwordInput = this.page.locator('#ap_password');
        this.submitButton = this.page.locator('#signInSubmit');
    }

    async login(email: string, password: string) {
        await this.page.goto('https://www.amazon.fr/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.fr%2Fcustomer-preferences%2Fedit%3Fie%3DUTF8%26preferencesReturnUrl%3D%252Fcustomer-preferences%252Fedit%253Fie%253DUTF8%2526preferencesReturnUrl%253D%25252Fref%25253Dnav_logo%2526ref_%253Dtopnav_lang%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=frflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
        await this.emailInput.fill(email);
        await this.page.click('#continue');
        await this.passwordInput.fill(password);
        await this.submitButton.click();
        await expect(this.page).toHaveURL(/\/ref=nav_ya_signin/);
    }
}
