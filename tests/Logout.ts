import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class LogoutAmazon {
    readonly page: Page;
    readonly accountMenu: Locator;
    readonly signOutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountMenu = this.page.locator('#nav-link-accountList');
        this.signOutButton = this.page.locator('#nav-item-signout');
    }

    async logout() {
        await this.page.goto('https://www.amazon.fr/gp/flex/sign-out.html?path=%2Fgp%2Fyourstore%2Fhome&signIn=1&useRedirectOnSuccess=1&action=sign-out&ref_=nav_AccountFlyout_signout');
        await this.accountMenu.hover();
        await this.signOutButton.click();
        await this.page.waitForTimeout(1000);
    }
}