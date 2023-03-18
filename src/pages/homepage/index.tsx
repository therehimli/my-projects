import { FC } from 'react'
import InputBlock from '../../UI/inputblock'
import styles from './Home.module.scss'
import projectsdata from '../../data/projects.json'
import { useAppSelector } from '../../hooks'
import ProjectBlock from './components/ProjectBlock'

const Home: FC = () => {
  const allRuss = ['В', 'С', 'Е']
  const projectsRuss = ['П', 'Р', 'О', 'Е', 'К', 'Т', 'Ы']
  const themeToogle = useAppSelector((state) => state.projects.themeToogle)

  return (
    <div className={styles.home}>
      <section>
        <div className={styles.main}>
          <div>
            {allRuss.map((all, i) => (
              <span
                key={i}
                style={themeToogle ? { color: 'black' } : { color: 'white' }}
              >
                {all}
              </span>
            ))}
          </div>
          <div>
            {projectsRuss.map((project, i) => (
              <span
                key={i}
                style={themeToogle ? { color: 'black' } : { color: 'white' }}
              >
                {project}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section>
        <InputBlock />
      </section>
      <section>
        <div className={styles.projectsblock}>
          {projectsdata.map((project) => (
            <ProjectBlock project={project} key={project.id} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
