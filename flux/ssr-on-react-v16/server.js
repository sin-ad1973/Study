import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';

import App from './App';

// expressのインスタンスを生成
const app = express();

// GET /client.bundle.js
// scriptタグからのリクエスト
// client.bundle.jsをそのまま返す
app.get('/dist/client.bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/client.bundle.js'));
});

// HTMLコンポーネント
// Appコンポーネントを包む大枠のHTML
// 内容はindex.htmlとほぼ同じ
function HTML({ children, now }) {
    return (
        <html lang="ja">
            <head>
                <meta charSet="UTF-8"/>
                <tilte>シンプルなサーバサイドレンダリング</tilte>
            </head>
            <body>
                {/* React v15以前
                 <div id="root" dangerouslySetInnerHTML={{__html: contents }}></div> */}

                 {/* React v16以降 */}
                <div id="root">{children}</div>

                {/* <追加> データ引き継ぎ用の<script>タグ */}
                <script
                    type="text/plain"
                    id="server-now"
                    data-server-now={now.getTime() + ''}
                ></script>

                <script src="dist/client.bundle.js"></script>
            </body>
        </html>
    );
};

// GET /
// サーバサイドレンダリングの結果のHTMLを返す
app.get('/', (req, res) => {
    const now = new Date();

    // React v15以前
    // const contentsHTML = ReactDOMServer.renderToString(
    //     <App renderedAt={now} />
    // );
    // // サーバサイドレンダリングの結果を大枠のHTMLで囲う
    // const fullHTML = ReactDOMServer.renderToStaticMarkup(
    //     <HTML contents={contentsHTML} now={now} />
    // );

    // React v16以降
    // Node.jsのStreamを出力
    const stream = ReactDOMServer.renderToNodeStream(
        <HTML now={now}>
            <App renderedAt={now} />
        </HTML>
    )

    // クライアントにレスポンスを返す
    // React v15以前
    // res.send(fullHTML);

    // React v16以降
    stream.pipe(res);
});

// ポート3000番でWebサーバを起動
app.listen(3000, () => {
    console.log('ポート3000番で起動...');
})
