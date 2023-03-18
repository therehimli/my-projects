import React from 'react'
import { useAppSelector } from '../../../../hooks'
import Buttons from '../Buttons/Buttons'
import ReturnButton from '../ReturnButton/ReturnButton'
import styles from './projectInfo.module.scss'

const projectInfo = () => {
  const { projects, themeToogle } = useAppSelector((state) => state.projects)

  return (
    <div className={styles.projectInfo}>
      <p
        style={themeToogle ? { color: 'black' } : { color: 'white' }}
        className={styles.projectDescription}
      >
        Project description
      </p>
      <div
        style={
          themeToogle
            ? { height: '0.04px', background: 'black' }
            : { height: '0.04px', background: 'white' }
        }
      ></div>
      <h1
        style={themeToogle ? { color: 'black' } : { color: 'white' }}
        className={styles.projectTitle}
      >
        {projects.title}
      </h1>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <h3
          className={styles.projectTechnogolies}
          style={themeToogle ? { color: 'black' } : { color: 'white' }}
        >
          Technologies:
        </h3>
        <p
          className={styles.stack}
          style={themeToogle ? { color: 'black' } : { color: 'white' }}
        >
          {projects.stack}
        </p>
      </div>
      <p
        className={styles.description}
        style={themeToogle ? { color: 'black' } : { color: 'white' }}
      >
        Description: {projects.description}
      </p>
      <Buttons />
      <div style={{ marginTop: '80px', marginLeft: '200px' }}>
        <ReturnButton />
      </div>
    </div>
  )
}

export default projectInfo
