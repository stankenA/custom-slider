import React from 'react';
import styles from './styles.module.scss';

function Slider() {
  return (
    <section className={styles.slider}>
      <h1 className={styles.title}>
        Custom slider by StankenA
      </h1>
      <div className={styles.container}>
        <button type="button" className={`${styles.button} ${styles['button_prev']}`}></button>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img src="https://catherineasquithgallery.com/uploads/posts/2023-02/1676556467_catherineasquithgallery-com-p-kartinki-fon-zelenogo-tsveta-72.jpg" alt="smth" className={styles.img} />
          </li>
        </ul>
        <button type="button" className={styles.button}></button>
      </div>
      <p className={styles.description}>Ffff</p>
      <ul className={styles.pagination}>
        <li className={`${styles['pagination-bullet']} ${styles['pagination-bullet-active']}`}></li>
        <li className={styles['pagination-bullet']}></li>
        <li className={styles['pagination-bullet']}></li>
        <li className={styles['pagination-bullet']}></li>
        <li className={styles['pagination-bullet']}></li>
      </ul>
    </section>
  )
}

export default Slider;
