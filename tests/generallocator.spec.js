import { test, expect } from '@playwright/test';

test ('single Element Locating',async({page}) =>{

    await page.goto ("opencart/index.php?route=account/register");
    const firstNameTxt = page.locator("#input-firstname");// id

    const lastNameTxt = page.locator("input[name='lastname']");// cssselector

    const emailTxt = page.locator("//input[@name='email']") // xpath

    await firstNameTxt.fill("Henry");

    await lastNameTxt.fill("Cavil");

    await emailTxt.fill("abcdef@gmail.com");

    await page.pause();



} )


test.only ('Multiple Element Locating',async({page}) =>{
    await page.goto ("opencart/index.php?route=account/register");
     
    const formControl = page.locator(".form-control"); // classname

    console.log( await formControl.count() );

    await formControl.first().fill("Samsung");


    await formControl.nth(1).fill("Salman");

    await formControl.nth(2).fill("Khan");

    await formControl.last().fill("12345");

    await page.pause();




})