import '../style/Header.css';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
      <header className='header__table'>
        <Link className='title' to="/">
          匿名掲示板
        </Link>
        <Link className='link__createThread' to="/thread/new">スレッドをたてる</Link>
      </header>
  )
}