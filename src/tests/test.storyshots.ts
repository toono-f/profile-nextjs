import initStoryshots, { multiSnapshotWithOptions } from "@storybook/addon-storyshots";

// アニメーションを活用したコンポーネントはスナップショットテストが失敗するので注意
initStoryshots({
  test: multiSnapshotWithOptions(),
});
