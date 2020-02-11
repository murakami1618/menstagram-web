# menstagram-web

<img src="logo.png" width="500">

**🍜 SUSURU FOREVER, SUSURU ANYWHERE 🍜**  
menstagram-webはMenstagramのWebアプリケーション開発のためのリポジトリです。

### 環境構築

```bash
$ git clone https://github.com/uyupun/menstagram-web.git
$ cd menstagram-web
$ yarn install
```

### コマンド一覧

```bash
$ yarn start       // 起動
$ yarn build       // ビルド
$ yarn test        // テスト
$ yarn lint        // コード修正
$ make tunnel      // localhost.runで公開
```

### ディレクトリ構造

```text
src
├ actions       // アクション
├ api           // API
├ assets
│ ├ images      // 画像
│ └ scss        // scssファイル(FLOCSS)
├ components    // コンポーネント
├ containers    // stateを受け取る層
├ middleware    // ミドルウェア
├ reducers      // リデューサー
├ sagas         // 非同期処理
├ store         // storeの生成
├ tests         // テスト
├ routes.js     // ルーティング
├ history.js    // history
└ index.js      // アプリの起点
```

### FLOCSS

scssディレクトリ以下では, FLOCSSの設計思想を取り入れている.

##### ディレクトリ構造

```text
scss
├ foundation    // ブラウザのデフォルトスタイルの初期化
├ layout        // ページを構成するコンテナーブロックのスタイル
└ object        // プロジェクトにおける繰り返されるビジュアルパターンを3つのレイヤーで定義
　 ├ component  // 再利用できる小さな単位のモジュール
　 ├ project    // いくつかのcomponentと, それに該当しない要素によって構成されるコンテンツ
　 └ utility    // 僅かなスタイルの調整
```

##### プレフィックス

クラス名は `.x-block__element--modifier` とし, block / element / modifier は先頭小文字のキャメルケースを利用する.  

```text
scss
├ foundation    // タグに対してスタイルを当てる
├ layout        // .l-*
└ object
　 ├ component  // .c-*
　 ├ project    // .p-*
　 └ utility    // .u-*
```

詳細: https://github.com/hiloki/flocss
