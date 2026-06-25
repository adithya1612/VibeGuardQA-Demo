import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('VibeGuard QA™ Architecture-Driven E2E Suite', () => {

  test.beforeEach(async ({ page }) => {
    // 1. Console Exception Tracking: fail runs immediately on client-side errors
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        throw new Error(`Browser console error: ${msg.text()}`);
      }
    });
    page.on('pageerror', (err) => {
      throw new Error(`Unhandled browser exception: ${err.message}`);
    });

    // 2. Dynamic Route Mocking: Isolating third-party api endpoints
    // Mock API Route 1: GET /api/users
    await page.route('**/api/users', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'Mocked /api/users response payload.' })
      });
    });

  });

  test('E2E Flow - Multi-Viewport layout & UI Responsiveness', async ({ page }) => {
    const viewports = [
      { width: 1280, height: 800 }, // Desktop standard
      { width: 375, height: 667 }    // Mobile standard
    ];

    for (const vp of viewports) {
      await page.setViewportSize(vp);
      await page.goto('/');
      
    // 3. Basic Page Navigation Verify
    const header = page.locator('h1, h2, header').first();
    await expect(header).toBeVisible();
    }
  });

  test('Dynamic Accessibility (Axe-Core) Compliance check', async ({ page }) => {
    await page.goto('/');
    
    // Scan page elements for WCAG color contrast and input labels
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    expect(results.violations).toEqual([]);
  });
});
