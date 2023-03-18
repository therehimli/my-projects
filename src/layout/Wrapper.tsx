import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header/Header'
import { useAppSelector } from '../hooks'
import styles from './Wrapper.module.scss'

const Wrapper: FC = () => {
  const themeToogle = useAppSelector((state) => state.projects.themeToogle)

  return (
    <div
      style={themeToogle ? { background: 'white' } : { background: '#1d1e22' }}
      className={styles.wrapper}
    >
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Wrapper
