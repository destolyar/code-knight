import '../styles/components/Header.scss'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  return(
    <header className='header'>
      <h1 className='header__title'>Welcome to the test task for Code Knight</h1>
      <h2 className='header__subtitle'>Pick part of test task what you interested in below</h2>
      <div className='header__buttons'>
        <Link to='/clock' className="header__buttons__button">Clock</Link>
        <Link to='/semicircle' className="header__buttons__button">Semicircle</Link>
      </div>
    </header>
  )
}