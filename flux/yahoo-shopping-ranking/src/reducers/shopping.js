const initialState = {
    // カテゴリ一覧情報
    // 本来はカテゴリID取得APIで取得するべき
    categories: [
        {
            id: '1',
            name: 'すべてのカテゴリ名'
        },
        {
            id: '2502',
            name: 'パソコン、周辺機器'
        },
        {
            id: '10002',
            name: '本、雑誌、コミック'
        }
    ]
}

export default () => initialState;
