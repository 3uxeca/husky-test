import { test, expect } from '@playwright/test';

test('should navigate to the about page', async ({ page }) => {
  // 인덱스 페이지에서 시작 (baseURL은 playwright.config.ts의 webServer를 통해 설정됨)
  await page.goto('http://localhost:3000/');
  // 'About' 텍스트가 있는 요소를 찾아 클릭
  await page.click('text=About');
  // 새 URL은 "/about"이어야 함 (baseURL이 여기서 사용됨)
  await expect(page).toHaveURL('http://localhost:3000/about');
  // 새 페이지에는 "About"이라는 텍스트가 있는 h1이 포함되어야 함
  await expect(page.locator('h1')).toContainText('About');
});
