import { useState } from "react";
import { Link } from "react-router-dom";
import '../style/CreateNewThread.css'
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
    <div className="thread__form">
      <p className="thread__new">スレッド新規作成</p>
      <br />
      <input className="thread__input" type="text" value={title} placeholder ="スレッドタイトル" onChange={(event) => setTitle(event.target.value)}></input>
      <br />
      <div className="thread__flex">
        <Link className="thread__to__top" to='/'>Topに戻る</Link>
        <button className="thread__button" onClick={postNewThread}>作成</button>
      </div>
    </div>
  )
}