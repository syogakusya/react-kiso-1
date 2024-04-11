import {useParams} from 'react-router-dom';

export const Thread = () => {
  const { thread_id }  = useParams();
  return(
    <div>{thread_id}</div>
  )
}