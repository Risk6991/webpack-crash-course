module.exports = {
  syntax: ["scss"],
  plugins: ["stylelint-scss"], // stylelint-scss を使う
  extends: [
    "./node_modules/prettier-stylelint/config.js",
    "stylelint-config-standard",
    "stylelint-config-recess-order"
  ],
  rules: {
    "string-quotes": "double", // ダブルクォーテーションに揃える
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    // @ルールのベンタープリフィックス禁止
    "at-rule-no-vendor-prefix": true,
    //'font-family'はスペースで区切られたフォント名の場合クオートで囲む
    "font-family-name-quotes": "always-where-recommended",
    //'font-weight'はnormalなどのキーワードが使える場合はそちらを使う（400はNG）
    "font-weight-notation": "named-where-possible",
    // 'url()'の引数はクオートで囲む
    "function-url-quotes": "always",
    //'@media'内のベンダープリフィックス禁止
    "media-feature-name-no-vendor-prefix": true,
    //詳細度の高いセレクタより後に詳細度の低いセレクタを定義するのを許容
    "no-descending-specificity": null,
    // プロパティのベンダープリフィックス禁止
    "property-no-vendor-prefix": true,
    // '[type=text]'などのセレクタの属性はクオートで囲まない
    "selector-attribute-quotes": "never",
    // セレクタのベンダープリフィックス禁止
    "selector-no-vendor-prefix": true,
    // 文字列はシングルクオートで囲む
    "string-quotes": "single",
    // 値のベンダープリフィックス禁止
    "value-no-vendor-prefix": true
  }
};
