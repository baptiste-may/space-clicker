// @ts-check
import eslintConfigPrettier from "eslint-config-prettier/flat";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    rules: {
      // Vue 3 supports multiple root nodes (fragments).
      "vue/no-multiple-template-root": "off",
    },
  },
  eslintConfigPrettier,
);
