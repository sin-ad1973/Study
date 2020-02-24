Vue.js開発環境構築

・vue cliインストール
npm install -g @vue/cli

・下記を入れないと「vue serve」が使えない
npm install -g @vue/cli-service-global

・sfcプロジェクト作成に必要
npm i vue-sfc-rollup

・sfcプロジェクト作成コマンド
./node,modules/.bin/sfc-init

・sfc用開発サーバ起動
vue serve src/[sfcコンポーネント名].vue
