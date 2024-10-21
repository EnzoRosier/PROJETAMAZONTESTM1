import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class ChangerLangue {
    readonly page: Page;
    
    constructor(page: Page){
        this.page = page
       
    }

    async BasicForm() {
        await this.page.locator(".icp-nav-link-inner").click()
        await this.page.click('input[type="radio"][value="en_GB"]', { force: true });
        const isChecked = await this.page.isChecked('input[type="radio"][value="en_GB"]');
        await this.page.locator('[aria-labelledby="icp-save-button-announce"]').click()
        await this.page.locator(".icp-nav-link-inner").click()
    }
}