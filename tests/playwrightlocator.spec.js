import { test, expect } from '@playwright/test';

test ('Playwright Specific Locating',async({page}) =>{

    await page.goto ("opencart/index.php?route=account/register");

    let firstNameTxt = page.getByRole("textbox",{name :'* First Name'});
    let lastNameTxt = page.getByRole ("textbox",{name:'* Last Name'});
    let personal =page.getByText ('Your Personal Details');
    let email = page.getByLabel ("E-Mail");
    let Phonenum =page.getByPlaceholder ("Telephone");
    let img1 =page.getByAltText('naveenopencart');
    let img2 =page.getByTitle('naveenopencart');
    let password =page.getByPlaceholder ("Password");

    await firstNameTxt.fill("Shafaiat");
    await lastNameTxt.fill ("Hossain");
    await personal.isVisible();
    await email.fill ("shafai123@gmail.com");
    await Phonenum.fill ("01820923439");
    await password.first().fill("12345");
    await password.last().fill("12345");
    await img1.isVisible();
    await img2.isVisible();

    await page.getByRole ('checkbox').click;
    await page.getByRole ('button',{name:'Continue'}).click;


    // assertion

    let confirmMsg = page. locator('h1');
    expect (confirmMsg).toHaveText ("Your Account Has Been Created!");
    expect (confirmMsg).toContainText ("Created!");
    
    await page.pause();


}

)