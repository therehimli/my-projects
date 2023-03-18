import { useAppSelector } from '../../../../hooks'
import styles from './Buttons.module.scss'

const Buttons = () => {
  const project = useAppSelector((state) => state.projects.projects)

  return (
    <div className={styles.projectinteract}>
      <div className={styles.projectsource}>
        <a target="__blank" href={project.visit}>
          <button className={styles.projectdetails}>Visit</button>
        </a>
        <a target="__blank" href={project.github}>
          <button className={styles.projectdetails}>GitHub</button>
        </a>
      </div>
    </div>
  )
}

export default Buttons
