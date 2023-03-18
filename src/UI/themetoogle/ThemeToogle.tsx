import { FC, useState } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { useAppDispatch } from '../../hooks'
import { changeToogle } from '../../store/Slices/CourseSlice'
import styles from './ThemeToogle.module.scss'

const ThemeToogle: FC = () => {
  const [activeTheme, setActiveTheme] = useState<boolean>(true)
  const dispatch = useAppDispatch()

  const themeHandler = () => {
    setActiveTheme(!activeTheme)
    dispatch(changeToogle())
  }

  return (
    <div className={styles.themes}>
      {activeTheme ? (
        <div className={styles.moon}>
          <BsMoonFill
            color={activeTheme ? 'black' : 'white'}
            size={25}
            onClick={() => themeHandler()}
          />
        </div>
      ) : (
        <div className={styles.sun}>
          <BsSunFill
            color={activeTheme ? 'black' : 'white'}
            size={25}
            onClick={() => themeHandler()}
          />
        </div>
      )}
    </div>
  )
}

export default ThemeToogle
