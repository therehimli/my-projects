import { FC, useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import styles from './projectImageproject.module.css'

interface ProjectImageSliderProps {
  images: string[]
}

const ProjectImageSlider: FC<ProjectImageSliderProps> = ({ images }) => {
  const [current, setCurrent] = useState(0)
  const length = images?.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(images) || images?.length <= 0) {
    return null
  }

  return (
    <section className={styles.slider}>
      <FaArrowAltCircleLeft
        color="#6B7A8F"
        className={styles.leftArrow}
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        color="#6B7A8F"
        className="right-arrow"
        onClick={nextSlide}
      />
      {images.map((slide, index) => {
        return (
          <div
            className={index === current ? styles.slideActive : styles.slide}
            key={index}
          >
            {index === current && (
              <img
                // width={700}
                // height={400}
                src={slide}
                alt="travel image"
                className={styles.image}
              />
            )}
          </div>
        )
      })}
    </section>
  )
}

export default ProjectImageSlider
