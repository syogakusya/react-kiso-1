import {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import '../style/Thread.css';

export const Thread = () => {
  const { thread_id }  = useParams();
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [refreshPosts, setRefreshPosts] = useState(false);

  useEffect(() =>{
    getPosts();
  }, [refreshPosts])

  useEffect(() => {
    getTitle();
    getPosts();
  },[])

  function getPosts(){
    let url = 'https://railway.bulletinboard.techtrain.dev/threads/' + thread_id +'/posts?offset=0';
    fetch(url)
    .then(data => {
      return data.json();
    })
    .then(jsonData =>{
      setPosts(jsonData['posts']);
    })
  }

  function getTitle(){
    let url = "https://railway.bulletinboard.techtrain.dev/threads?offset=0";
    fetch(url)
    .then(data => {
      return data.json();
    })
    .then(threads_ =>{
      threads_.map(thread_ => {
        thread_['id'] === thread_id ? setTitle(thread_['title']) : null;
      })})
    }

    const post = () =>{
      if(message === ""){
        alert("スレッドタイトルを入力してください");
        return;
      }

      let url = "https://railway.bulletinboard.techtrain.dev/threads/" + thread_id+ "/posts";
      let data = {
        "post":message
      }
      fetch(url,{
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(() =>{
        setMessage("");
        setRefreshPosts(prev => !prev);
      })
    }
  return(
    <div className='grid-container'>
      <div className='posts'>
        <p className='thread__title'>{title}</p>
        <ul className='posts__ul'>
          {posts.map((posts_, index) => (
              <li className='posts__li' key={index}>
                  {posts_['post']}
              </li>
            ))}
        </ul>
      </div>
      <div className='post__form'>
        <textarea cols='30' rows='8' className="post__textarea" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="投稿をはじめてみよう！"></textarea>
        <br />
        <button onClick={post} className='post__button'>投稿</button>
      </div>
    </div>
  )
}