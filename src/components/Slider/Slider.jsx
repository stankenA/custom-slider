import React, { useState } from 'react';
import './Slider.scss';
import { slidesArr } from '../../utils/contstants';

function Slider() {

  const [activeSlide, setActiveSlider] = useState(0);

  function showPrevSlide() {
    if (activeSlide === 0) {
      setActiveSlider(slidesArr.length - 1);
      return;
    }

    setActiveSlider(activeSlide - 1);
  }

  function showNextSlide() {
    if (activeSlide === slidesArr.length - 1) {
      setActiveSlider(0);
      return;
    }

    setActiveSlider(activeSlide + 1);
  }

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
              onClick={() => setActiveSlider(i)}
            ></li>
          ))
        }
      </ul>
    </section>
  )
}

export default Slider;
