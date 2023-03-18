import ProjectInfo from './components/projectInfo/ProjectInfo'
import { useAppSelector } from '../../hooks'
import ProjectPageBlock from './components/ProjectPageBlock/ProjectPageBlock'

const Project = () => {
  const project = useAppSelector((state) => state.projects.projects)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: '30px',
        paddingLeft: '30px',
        marginBottom: '50px',
      }}
    >
      <div>
        <ProjectInfo />
      </div>
      <div>
        <ProjectPageBlock project={project} />
      </div>
    </div>
  )
}

export default Project
