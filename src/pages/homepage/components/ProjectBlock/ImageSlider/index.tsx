import { FC, useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './ImageSlides.css'

interface imageSlider {
  images: string[]
}

const ImageSlider: FC<imageSlider> = ({ images }) => {
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
    <section className="slider">
      <FaArrowAltCircleLeft
        color="#6B7A8F"
        className="left-arrow"
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
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img
                width={100}
                height={100}
                src={slide}
                alt="travel image"
                className="image"
              />
            )}
          </div>
        )
      })}
    </section>
  )
}

export default ImageSlider
