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

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    deleteIncompletelist(deleteButton.parentNode);

    //完了リストに追加する要素
    const addTaget = completeButton.parentNode;

    //ToDo内容テキストを取得
    const text = addTaget.firstElementChild.innerText;

    //div以下を初期化
    addTaget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //button（完了）タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された完了ボタンの親タグ（div）を完了タスクから削除
      const daleteTaget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(daleteTaget);

      //テキストを取得
      const text = backButton.parentNode.firstChild.innerText;
    });

    //divタグの子要素に各要素を設定
    addTaget.appendChild(li);
    addTaget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTaget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteIncompletelist(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定の要素を削除
const deleteIncompletelist = (taget) => {
  document.getElementById("incomplete-list").removeChild(taget);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
