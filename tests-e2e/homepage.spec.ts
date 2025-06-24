import { test, expect } from "@playwright/test";

test("ホームページが正しく表示される", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Create Next App");
  await expect(page.getByRole("heading", { name: "Home" })).toBeVisible();
  await expect(page.getByRole("link", { name: "About" })).toBeVisible();
});

test("Aboutページへのナビゲーション", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL("/about");
});
