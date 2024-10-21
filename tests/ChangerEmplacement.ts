import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class ChangerEmplacement {
    readonly page: Page;
    
    constructor(page: Page){
        this.page = page
       
    }

    async BasicForm() {
        await this.page.locator("#nav-global-location-popover-link").click()
        
    }
}