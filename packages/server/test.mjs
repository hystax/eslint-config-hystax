const files = [
  "./index.mjs",
  "./rules/base.mjs",
  "./rules/node.mjs",
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
          if (!config || !Array.isArray(config)) {
            throw new Error("index.mjs export is missing or not an array");
          }

          config.forEach((block, i) => {
            if (typeof block !== "object" || block === null) {
              throw new Error(`Block #${i} in index.mjs is not a valid object`);
            }
            if (block.rules && typeof block.rules !== "object") {
              throw new Error(`Block #${i} in index.mjs has invalid rules`);
            }
            if (
              block.languageOptions &&
              typeof block.languageOptions !== "object"
            ) {
              throw new Error(
                `Block #${i} in index.mjs has invalid languageOptions`
              );
            }
          });
        }
      })
    );

    console.log(
      "✅ All ESLint config files loaded successfully and are valid objects."
    );
  } catch (err) {
    console.error("❌ Failed to load config:", err);
    process.exit(1);
  }
})();
