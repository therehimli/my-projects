import styles from './ProjectBlock.module.scss'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import ImageSlider from './ImageSlider'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { addCourse } from '../../../../store/Slices/CourseSlice'

export interface IProject {
  id: number
  title: string
  github: string
  visit: string
  images: string[]
  description: string
  stack: string
}

interface ProjectBlockProps {
  project: IProject
}

const ProjectBlock: FC<ProjectBlockProps> = ({ project }) => {
  const dispatch = useAppDispatch()
  const { themeToogle } = useAppSelector((state) => state.projects)

  return (
    <div className={styles.projectblock}>
      <div className={styles.projectinfo}>
        <ImageSlider images={project.images} />
        <h3 style={themeToogle ? { color: 'black' } : { color: 'white' }}>
          {project.title}
        </h3>
      </div>
      <div className={styles.projectinteract}>
        <div className={styles.projectsource}>
          <a target="__blank" href={project.visit}>
            <button
              style={{ background: 'green' }}
              className={styles.projectvisit}
            >
              Visit
            </button>
          </a>
          <a target="__blank" href={project.github}>
            <button
              style={{ background: 'green' }}
              className={styles.projectgithub}
            >
              GitHub
            </button>
          </a>
        </div>
        <Link className={styles.Link} to={`/project/${project.id}`}>
          <button
            onClick={() => dispatch(addCourse(project))}
            className={styles.projectdetails}
          >
            Details
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectBlock
