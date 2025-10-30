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
          if (!config || typeof config !== "object") {
            throw new Error("config export is missing or not an object");
          }
          if (!config.rules || typeof config.rules !== "object") {
            throw new Error("config.rules is missing or invalid");
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
