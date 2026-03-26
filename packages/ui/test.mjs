const files = [
  "./index.mjs",
  "./rules/base.mjs",
  "./rules/react.mjs",
  "./rules/imports.mjs",
  "./rules/prettier.mjs",
];

(async () => {
  try {
    await Promise.all(
      files.map(async (file) => {
        console.log(`Checking ${file}...`);
        const module = await import(file);

        if (!module || typeof module !== "object") {
          throw new Error(`${file} did not export an object`);
        }

        if (file === "./index.mjs") {
          const config = module.default;
          if (!Array.isArray(config)) {
            throw new Error(
              "index.mjs export should be an array (config array is missing or invalid)"
            );
          }

          for (const [i, item] of config.entries()) {
            if (!item || typeof item !== "object") {
              throw new Error(
                `index.mjs array element at position ${i} is not an object`
              );
            }
          }

          const hasRules = config.some(
            (item) => item.rules && typeof item.rules === "object"
          );
          if (!hasRules) {
            throw new Error(
              "index.mjs array must contain at least one object with rules"
            );
          }
        }
      })
    );

    console.log("✅ All ESLint config files loaded successfully and are valid.");
  } catch (err) {
    console.error("❌ Failed to load config:", err);
    process.exit(1);
  }
})();
