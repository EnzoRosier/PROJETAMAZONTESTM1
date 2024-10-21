import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class ChangerEmplacement {
    readonly page: Page;
    
    constructor(page: Page){
        this.page = page
       
    }

    async BasicForm() {
        await this.page.locator("#nav-global-location-popover-link").click()
        await this.page.locator("#GLUXZipUpdateInput").fill('59290')
        await this.page.locator('[aria-labelledby="GLUXZipUpdate-announce"]').click()
        await this.page.locator('[aria-labelledby="GLUXZipUpdate-announce"]').click()
        await this.page.waitForTimeout(4500);

        //const spanText = await this.page.locator('#glow-ingress-line2').textContent();
        //expect(spanText.trim()).toBe('59290');
        
    }
}