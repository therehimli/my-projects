import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import LanguageToogle from '../../UI/languagetoogle'
import ThemeToogle from '../../UI/themetoogle/ThemeToogle'
import styles from './Header.module.scss'

const Header: FC = () => {
  const { themeToogle } = useAppSelector((state) => state.projects)

  return (
    <div
      style={themeToogle ? { background: 'white' } : { background: '#111111' }}
      className={styles.header}
    >
      <Link style={{ textDecoration: 'none' }} to="/">
        <div
          style={themeToogle ? { color: 'black' } : { color: 'white' }}
          className={styles.name}
        >
          Orkhan Rahimli
        </div>
      </Link>
      <div className={styles.toogles}>
        <LanguageToogle />
        <ThemeToogle />
      </div>
    </div>
  )
}

export default Header
