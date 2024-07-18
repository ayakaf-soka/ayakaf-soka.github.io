// 条件分岐（if ... else）

// let condition = 5;
// let condition = -3;
// let condition = 0;
let condition = "0";

// if ... elseは、上から順番に条件式が評価され、trueとなった節以降の条件は無視される。
// 複雑な条件分岐を書く際には順番がとても重要なので、ベン図などを書いてみると良い。
if (condition > 0) {
    console.log("conditionは、正の数です。");
} else if (condition === 0) {
    console.log("conditionは、0です。");
} else if (condition < 0) {
    console.log("conditionは、負の数です。");
} else {
    console.log("変数conditionに格納されている値は、数字ではありません。");
}

// 引数で指定された数字によって、いろいろな言語で「こんにちは」を表示する関数
function hello(language) {
    // 表示する文字列を格納する変数
    let message = "";

    // languageに入っている値で、（1：日本語、2：英語、3：中国語、4：韓国語）表示する文字列を切り替える
    if (language === 1) {
        message = "こんにちは";
    } else if (language === 2) {
        message = "Hello";
    } else if (language === 3) {
        message = "你好";
    } else if (language === 4) {
        message = "안녕하세요";
    } else {
        message = "ជំរាបសួរ！想定されていない引数です。";
    }

    // コンソールに表示
    console.log(message);

    // HTMLを書き換えたい場合
    // HTMLの要素を取得する
    // id="hello"の要素をp_helloに格納する
    const p_hello = document.querySelector("#hello");
    console.log(p_hello);

    // 取得したHTML要素の文字列を置き換える
    p_hello.textContent = message;
}

// 関数のテスト
// hello(0);

// 繰り返し（while）
// ループに複雑な条件処理を組み合わせる場合に使うことが多い
// 無限ループに気をつけよ
let count = 0;
while(count < 5) {
    console.log("while文のテスト：" + count + "回目のループです。");

    // 途中でループから抜けたい場合は、breeak文を使う
    if (count === 3) {
        break;
    }
    // count = count + 1;
    count++;
}

// 繰り返し（for）
// 事前にループの回数がわかっている場合や配列と組み合わせる場合に使うことが多い
// letで指定できる変数が使えるのは{}の中なので、別のfor文で同じ変数iを使用してもエラーにならない
for (let i = 0; i < 5; i++) {
    console.log("for文のテスト：" + i + "回目のループです。");
}

let player_hand = ["ぐー", "ちょき", "ぱー"];
// console.log(player_hand[0]);

for (let i = 0; i < 3; i++) {
    console.log(player_hand[i]);
}

//配列名.lengthで配列の要素数（長さ）を取得できる →ループの終了の値として使えば余計なループを回さずに済む
console.log(player_hand.length);

// 配列の長さに合わせて自動ループ
for (let i = 0; i < player_hand.length; i++) {
    console.log(player_hand[i]);
}

// さらにスマートに
// handという変数に配列player_handの中の引数を順番に渡してくれる
for (const hand of player_hand) {
    console.log("じゃんけん：" + hand);
}

// 配列だけでなく反復可能な変数も入れることができる
// 文字列も反復可能な変数
// 一文字ずつ取り出すこともできる
let hogehoge = "じゃんけん";
for (const a of hogehoge) {
    console.log("じゃんけん：" + a);
}