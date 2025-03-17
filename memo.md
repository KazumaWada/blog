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

# markdown-itは、defaultで入ってる。
でも、markdown-itで、2回改行したら2行空くのは入っているのか?
だって何回改行しても一つしか改行されないから。
英語で、Line Breakと呼ばれているmdの機能


ここみる。
https://github.com/markdown-it/markdown-it#init-with-presets-and-options


- そもそも11tyは最初からLiquidテンプレートとして前処理されている。それを変えることもできる。

npm liquid -> {{ content }}とかで組み込めるテンプレートエンジンのこと。

## 続き
- デフォルトで、makedown-itを使っているが、その項目でbreakがfalseに
試しに、デフォルトでmakedown-itを使っているが、それをconfig内に取り込んで、一応自分でbreakをアレンジしてみたけど、うまくいかなかった。

- liquidの中にmarkdown-itが入っていると思う。

↓これで検索してみる。

良さげな検索ワード:
markdown blank line p tag

markeit-downのソースコードに直接アクセスできるか
> If your Markdown compiler supports HTML, you can add <br/><br/> in the Markdown source.

markdown-itのdocは、多分こう書いてあるから、一行の改行のみだと思う。
```md
  // Convert '\n' in paragraphs into <br>
  breaks:       false,
```

じゃあ、直接自分で作ったりするしかないのかな??

通常のマークダウンのプラグインでは、複数改行はないことになっている。デフォルトでただの改行だけ。

# お！
markdown-it-bracketed-spans
