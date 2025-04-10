import { test, expect } from '@playwright/test';

test('about 페이지에서 버튼 클릭 시 alert 발생', async ({ page }) => {
  // 1. 페이지 진입
  await page.goto('http://localhost:3000/about');

  // 2. alert 핸들링 준비
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe('버튼 클릭');
    await dialog.dismiss();
  });

  // 3. 버튼 클릭
  await page.getByRole('button', { name: '버튼' }).click();
});
