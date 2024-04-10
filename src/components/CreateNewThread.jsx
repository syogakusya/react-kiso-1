import { useState } from "react";
import { Link } from "react-router-dom";
export const CreateNewThread = () => {
  const [title, setTitle] = useState("");

  const postNewThread = () => {
    if(title === ""){
      alert("スレッドタイトルを入力してください");
      return;
    }

    let url = "https://railway.bulletinboard.techtrain.dev/threads"
    let data ={
      "title": title
    }

    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    setTitle("");
  }
  return(
    <div>
      <p>スレッド新規作成</p>
      <input type="text" value={title} placeholder ="スレッドタイトル" onChange={(event) => setTitle(event.target.value)}></input>
      <Link to='/'>Topに戻る</Link>
      <button onClick={postNewThread}>作成</button>
    </div>
  )
}