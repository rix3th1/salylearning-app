import fs from "fs/promises";

/**
 * Function to get all pages in the project
 * @returns pages
 */
export const getAllPages = async () => {
  const basePath = "./src/app"; // Base path for your pages

  const collectPages = async (
    currentPath: string,
    currentPages: string[] = []
  ) => {
    const items = await fs.readdir(currentPath, { withFileTypes: true });

    for (const item of items) {
      const fullPath = `${currentPath}/${item.name}`;
      if (item.isDirectory()) {
        // Exclude API directory
        if (!fullPath.includes("/api") && !fullPath.includes("/learning")) {
          await collectPages(fullPath, currentPages);
        }
      } else if (item.isFile() && item.name === "page.tsx") {
        // Replace path and format for URL
        let relativePath = fullPath
          .replace(basePath, "")
          .replace("page.tsx", "")
          .replace(/\\/g, "/");

        // Remove grouped routes
        relativePath = relativePath.replace(/\/\([^)]*\)/g, "");

        currentPages.push(relativePath);
      }
    }
  };

  const pages: string[] = [];
  await collectPages(basePath, pages);
  return pages;
};
