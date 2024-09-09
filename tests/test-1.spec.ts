import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://13.215.249.51:20070/');
  await page.goto('http://13.215.249.51:20070/dashboard');
  await page.goto('http://13.215.249.51:20070/auth/jwt/login?returnTo=%2Fdashboard');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('F00025');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('compaq123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Demo Company (Pvt.) Ltd' }).first().click();
  await page.getByRole('button', { name: 'Training' }).click();
  await page.getByRole('button', { name: 'Training Manager' }).click();
  await page.getByRole('button', { name: 'Add Master Data' }).click();
  await page.getByRole('button', { name: 'Training Categories' }).click();
  await page.getByRole('button', { name: 'Add New Category' }).click();
  await page.getByLabel('Category Name *').click();
  await page.getByLabel('Category Name *').fill('Test123');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
  await page.getByRole('cell', { name: '2' }).nth(1).click();
});