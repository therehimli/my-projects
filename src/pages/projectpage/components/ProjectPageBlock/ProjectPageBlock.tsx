import { FC } from 'react'
import ProjectImageSlider from '../projectImage/ProjectImageSlider'
import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { IProject } from '../../../homepage/components/ProjectBlock'
import styles from './ProjectPageBock.module.scss'

interface ProjectBlockProps {
  project: IProject
}

const ProjectPageBlock: FC<ProjectBlockProps> = ({ project }) => {
  const dispatch = useAppDispatch()
  const { themeToogle } = useAppSelector((state) => state.projects)

  return (
    <div className={styles.projectblock}>
      <div className={styles.projectinfo}>
        <ProjectImageSlider images={project.images} />
      </div>
    </div>
  )
}

export default ProjectPageBlock
