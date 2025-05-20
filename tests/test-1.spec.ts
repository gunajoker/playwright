import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('redbus');

  await page.getByRole('link', { name: 'redBus: Bus Ticket Booking Online at Cheapest Price with Top Bus ... redBus' }).click();
  await page.getByRole('textbox', { name: 'From' }).click();
  await page.getByRole('textbox', { name: 'From' }).fill('coim');
  await page.getByRole('button', { name: ' coim From  Coimbatore ' }).click();
  await page.getByRole('button', { name: ' coim From  Coimbatore ' }).click();
  await page.getByRole('button', { name: ' coim From  Coimbatore ' }).click();
  await page.getByRole('button', { name: ' coim From  Coimbatore ' }).click();
  await page.getByRole('textbox', { name: 'From' }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'From' }).press('ArrowUp');
  await page.getByRole('textbox', { name: 'From' }).press('Enter');
  await page.getByRole('textbox', { name: 'To' }).click();
  await page.getByRole('textbox', { name: 'To' }).fill('banga');
  await page.getByRole('button', { name: ' banga To  Bangalore ' }).click();
  await page.getByRole('textbox', { name: 'To' }).press('ArrowDown');
  await page.getByRole('textbox', { name: 'To' }).press('ArrowUp');
  await page.getByRole('textbox', { name: 'To' }).press('Enter');
  await page.getByRole('button', { name: ' Date May 2025 2 Holidays' }).click();
  await page.getByRole('button', { name: ' Date May 2025 2 Holidays' }).press('Enter');
  await page.getByRole('button', { name: ' Date May 2025 2 Holidays' }).press('ArrowRight');
  await page.getByRole('button', { name: ' Date May 2025 2 Holidays' }).dblclick();
  await page.getByRole('button', { name: ' Date May 2025 2 Holidays' }).click();
  await page.getByRole('button', { name: 'SEARCH BUSES' }).click();
  await page.getByRole('button', { name: ' Date May 2025 2 Holidays' }).click();
  await page.getByRole('button', { name: ' Date May 2025 2 Holidays' }).click();
});