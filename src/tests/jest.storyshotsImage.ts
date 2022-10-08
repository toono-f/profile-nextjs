import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";

// storybookの開発環境を立ち上げた上で実行する必要がある
initStoryshots({
  suite: "image",
  test: imageSnapshot(),
});
