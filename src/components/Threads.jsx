import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../style/Threads.css'

export const Threads = () =>{
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    getThreads();
  },[])

  function getThreads(){
    let url = "https://railway.bulletinboard.techtrain.dev/threads?offset=0";
    fetch(url)
    .then(data => {
      return data.json();
    })
    .then(threads_ =>{
      console.log(threads_);
      setThreads(threads_.map(thread_ => {
        return thread_
      }))
    })
  }


  return(
    <div className='threads'>
      <p className='thread__head'>新着スレッド</p>
      <ul className='thread__ul'>
        {threads.map((threads, index) => (
          <Link to = {"/thread/" + threads['id']} className='link'  key={index}>
            <li className='thread__li'>
                {threads['title']}
            </li>
          </Link>
          ))}
      </ul>
    </div>
  )
}