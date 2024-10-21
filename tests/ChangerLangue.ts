import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class ChangerLangue {
    readonly page: Page;
    
    constructor(page: Page){
        this.page = page
       
    }

    async BasicForm() {
        await this.page.locator("#ip-nav-flyout").click()
    }
}