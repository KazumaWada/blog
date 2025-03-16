# 11ty syntax hightlight
https://www.11ty.dev/docs/plugins/syntaxhighlight/

eleventy.config.jsが必要。
どこに書く?
↓ root
> Configuration files are optional. Add an eleventy.config.js file to the root directory of your project 
https://www.11ty.dev/docs/config/

で、
https://www.11ty.dev/docs/plugins/syntaxhighlight/に戻ると、
npm install @11ty/eleventy-plugin-syntaxhighlight


importでエラーがあった。
> package.jsonの"type": "module"が原因だった。Node.js のプロジェクトにおける package.json の設定の一部で、ESモジュール（ECMAScript Modules） を使用することを示しています。この設定により、Node.js はファイルを ESモジュール として解釈し、モジュールのインポート/エクスポートに import と export 構文を使うことができます。


こっからデザインも選べる
https://github.com/PrismJS/prism-themes


## 改行した分だけ改行できる。
https://github.com/markdown-it/markdown-it#init-with-presets-and-options
https://www.11ty.dev/docs/languages/markdown/