import * as path from "path";
import { defineConfig } from "rspress/config";
import { withZephyr } from "zephyr-webpack-plugin";
import { pluginPreview } from "@rspress/plugin-preview";

const zephyrRsbuildPlugin = () => ({
  name: "zephyr-rsbuild-plugin",
  // @ts-ignore
  setup(api) {
    //@ts-ignore - todo figure this out
    api.modifyRspackConfig((rspackConfig) => {
      return withZephyr()(rspackConfig);
    });
  }
});

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "Docs Demo",
  description: "Rspack-based Static Site Generator",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png"
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/web-infra-dev/rspress"
      }
    ]
  },
  builderConfig: {
    plugins: [zephyrRsbuildPlugin()]
  },
  plugins: [pluginPreview({ defaultRenderMode: "pure" })]
});
