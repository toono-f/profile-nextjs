const inputValidator = (input) => {
  if (input !== "") {
    return true;
  }
};

module.exports = [
  {
    type: "input",
    name: "name",
    message: "コンポーネントの名前を指定してください。ex) Button",
    validate: inputValidator,
  },
  {
    type: "select",
    name: "path",
    message: "コンポーネントの種類を選択してください",
    choices: ["atoms", "molecules", "organisms", "templates", "layouts"],
  },
  {
    type: "toggle",
    name: "withCssModule",
    message: ".module.scssも一緒に作成しますか？",
    disabled: "いいえ",
    enabled: "はい",
    initial: true,
  },
  {
    type: "toggle",
    name: "withStory",
    message: ".stories.tsxも一緒に作成しますか？",
    disabled: "いいえ",
    enabled: "はい",
    initial: true,
  },
  {
    type: "toggle",
    name: "withTest",
    message: ".spec.tsxも一緒に作成しますか？",
    disabled: "いいえ",
    enabled: "はい",
    initial: true,
  },
];
