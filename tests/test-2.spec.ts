import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDE0NDBqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.goto('https://www.google.com/account/about/');
  await page.locator('#secure').getByText('Security Checkup', { exact: true }).click();
  await page.getByRole('link', { name: 'Create an account' }).click();
  await page.getByLabel('First name').click();
  await page.getByLabel('First name').fill('asd');
  await page.getByLabel('Last name (optional)').click();
  await page.getByLabel('Last name (optional)').fill('qwe');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Day').click();
});