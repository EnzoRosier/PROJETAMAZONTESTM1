import { Locator, Page, expect } from "@playwright/test"
import {faker} from '@faker-js/faker'

export class FormLayoutsPage {
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly checkbox: Locator;
    readonly buttonSubmit: Locator;
    
    constructor(page: Page){
        this.page = page
        this.email = page.locator('#exampleInputEmail1' )
        this.password = page.locator('#exampleInputPassword1' )
        this.checkbox = page.getByRole('checkbox', {name: "Check me out" })
        this.buttonSubmit = page.locator('nb-card').filter({ hasText: 'Basic formEmail' }).getByRole('button')
    }

    async BasicForm() {
        const randomName = faker.person.fullName().replace(" ","");
        const randomPassword = faker.animal.crocodilia();
        await this.email.fill(randomName+'@test.com' );
        await this.password.fill(randomPassword);
        await expect(this.email).toHaveValue(randomName+'@test.com' )
    }
}