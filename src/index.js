import "./styles.css";

const onClickAdd = () => {
  //テキストボックススの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //divを生成
  const div = document.createElement("div");
  //classに名前を付与
  div.className = "list-row";

  //liタグを生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //divタグの子要素に各要素を設定
  div.appendChild(li);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
