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

        if (file === "./ui.mjs") {
          const { uiConfig } = module;
          if (!uiConfig || typeof uiConfig !== "object") {
            throw new Error("uiConfig export is missing or not an object");
          }
          if (!uiConfig.rules || typeof uiConfig.rules !== "object") {
            throw new Error("uiConfig.rules is missing or invalid");
          }
        }
      })
    );

    console.log("✅ All ESLint config files loaded successfully and are valid objects.");
  } catch (err) {
    console.error("❌ Failed to load config:", err);
    process.exit(1);
  }
})();
