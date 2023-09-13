import React, { useEffect, useState } from 'react';
import './Slider.scss';
import { slidesArr } from '../../utils/contstants';

function Slider() {

  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoplay, setIsAutoPlay] = useState(false);
  let timer;

  function showPrevSlide() {
    if (activeSlide === 0) {
      setActiveSlide(slidesArr.length - 1);
      return;
    }

    setActiveSlide(activeSlide - 1);
  }

  function showNextSlide() {
    if (activeSlide === slidesArr.length - 1) {
      setActiveSlide(0);
      return;
    }

    setActiveSlide(activeSlide + 1);
  }

  function toggleAutoplay() {
    setIsAutoPlay(!isAutoplay);
  }

  function countTimer() {
    timer = !timer && setInterval(() => {
      if (activeSlide === slidesArr.length - 1) {
        setActiveSlide(0);
        return;
      }

      setActiveSlide(activeSlide => activeSlide + 1);
    }, 4000);
  }

  useEffect(() => {
    if (isAutoplay) {
      countTimer();
    }

    return () => clearInterval(timer);
  }, [activeSlide, isAutoplay])

  return (
    <section className="slider">
      <h1 className="slider__title">
        Custom slider by StankenA
      </h1>
      <div className="slider__container">
        <button
          type="button"
          className="slider__button slider__button_prev"
          onClick={showPrevSlide}
        ></button>
        <ul className="slider__list">
          {
            slidesArr.map((slide, i) => (
              <li
                className={`slider__item
                  ${i < activeSlide ? 'slider__item_shown' : ''} ${i === activeSlide ? 'slider__item_active' : ''}`
                }
                key={slide.id}
              >
                <img src={slide.img} alt={slide.title} className="slider__img" />
              </li>
            ))
          }
        </ul>
        <button
          type="button"
          className="slider__button"
          onClick={showNextSlide}
        ></button>
      </div>
      <p className="slider__description">{slidesArr[activeSlide].title}</p>
      <ul className="slider__pagination">
        {
          [...new Array(slidesArr.length)].map((el, i) => (
            <li
              key={i}
              className={`slider__pagination-bullet ${i === activeSlide ? 'slider__pagination-bullet_active' : ''}`}
              onClick={() => setActiveSlide(i)}
            ></li>
          ))
        }
      </ul>
      <button
        type="button"
        className="slider__autoplay"
        onClick={toggleAutoplay}
      >
        {isAutoplay ? 'Stop autoplay' : 'Start autoplay'}
      </button>
    </section>
  )
}

export default Slider;
