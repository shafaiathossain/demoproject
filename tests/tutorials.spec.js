// import { test, expect } from '@playwright/test';
// import { faker } from '@faker-js/faker';
// import { generateRandomNumber } from '../utils/utils.js';


// test ('Registration Form Automation',async({page}) =>{

//     await page.goto ("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");

//     await page.getByPlaceholder('First Name').fill(faker.person.firstName());
//     await page.getByPlaceholder ('name@gmail.com').fill(faker.internet.email());
//     await page.locator ('#gender').click;
//     await page.getByRole("textbox",{name:"Mobile(10 Digits):"}).fill("018"+generateRandomNumber(1000000+9999999));
//     await page.locator("#dob").fill("1998-09-06");
//     await page.getByText ('Sports'),click;
//     await page.getByRole("button",{name:"Picture: State and City"}).setInputFiles("./resources/SHAFAIAT HOSSAIN.jpg");
//     await page.getByRole("combobox").first().selectOption("NCR");
//     await page.getByRole("combobox").last().selectOption("Agra");
//     await page.pause();



// } )


// CHATGPT CODE

import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { generateRandomNumber } from '../utils/utils.js';

test('Registration Form Automation', async ({ page }) => {
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");

    await page.getByPlaceholder('First Name').fill(faker.person.firstName());
    await page.getByLabel('Email:').fill(faker.internet.email());

    await page.locator('#gender').click(); // ✅ Fixed

    // Generate a 7-digit number after "018"
    const phoneNumber = "018" + generateRandomNumber(1000000, 9999999);
    await page.getByRole("textbox", { name: "Mobile(10 Digits):" }).fill(phoneNumber);

    await page.locator("#dob").fill("1998-09-06");

    await page.getByText('Sports').click(); // ✅ Fixed

    // Assuming correct selector for file upload input
    await page.setInputFiles('input[type="file"]', "./resources/SHAFAIAT HOSSAIN.jpg");

    await page.getByRole("combobox").first().selectOption("NCR");
    await page.getByRole("combobox").last().selectOption("Agra");

    await page.pause();
});
