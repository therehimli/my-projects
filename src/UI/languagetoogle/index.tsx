import { useState } from 'react'
import styles from './LanguageToogle.module.scss'

const LanguageToogle = () => {
  const languages = ['EN', 'RU']
  const [activeLanguage, setActiveLanguage] = useState(1)

  const activeHandler = (i: number) => setActiveLanguage(i)

  return (
    <div className={styles.languages}>
      {languages.map((language, i) => (
        <button
          onClick={() => activeHandler(i)}
          style={{ background: i === activeLanguage ? '#e0fbfc' : '' }}
          className={styles.language}
          key={i}
        >
          {language}
        </button>
      ))}
    </div>
  )
}

export default LanguageToogle
