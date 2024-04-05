import {useState} from 'react'

export const Threads = () =>{
  const [threads, setThreads] = useState();

  useEffect(() => {
    getThreads();
  },[])

  function getThreads(){
    let url = ""
  }

  return(
    <>
      
    </>
  )
}