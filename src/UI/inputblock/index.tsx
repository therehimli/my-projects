import { FC } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useAppSelector } from '../../hooks'
import styles from './InputBlock.module.scss'

const InputBlock: FC = () => {
  const themeToogle = useAppSelector((state) => state.projects.themeToogle)

  return (
    <div
      style={
        themeToogle
          ? { border: '1px solid black' }
          : { border: '1px solid white' }
      }
      className={styles.inputblock}
    >
      <BsSearch color={themeToogle ? 'black' : 'white'} />
      <input
        className={themeToogle ? styles.whiteinput : styles.blackinput}
        placeholder="Введите ключевое слово"
        type="text"
      />
    </div>
  )
}

export default InputBlock
