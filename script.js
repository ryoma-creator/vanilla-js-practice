// レベル4: テーブルへのAPIデータ表示
// 問題4-1: APIデータをテーブルに表示
// APIから取得したデータをテーブル形式で表示し、基本的なフィルタリング機能を実装してください。

    // 以下の機能を実装してください:
    // 1. APIからユーザーデータを取得 (https://jsonplaceholder.typicode.com/users)
    // 2. データをテーブル形式で表示 (ID, 名前, ユーザー名, メール, 会社名の列)
    // 3. 検索ボックスでリアルタイムフィルタリング (名前で検索)
    // 4. ローディング表示とエラーハンドリング
    
    // ここにコードを書いてください

    document.addEventListener("DOMContentLoaded", ()=>{
        console.log("DOMContentLoaded");

        const loadingElement = document.getElementsByClassName("loading")[0];
        loadingElement.textContent = "";


        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            if(!response.ok){
                throw new Error (`Error status is ${response.status}`)
            }
            return response.json();
        })
        .then(users=>{
            console.log(users);
        })
    });
