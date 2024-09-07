/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";
import { ImageData, ImageDataProp } from './data';

export default function Home() {
  const data: ImageDataProp[] = ImageData
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>digital art store</h1>

        <div className={styles.ctas}>
          {data.map((image) => {
            return (
                <div className={styles.primary} key={image.name}>
                  <img
                    className={styles.img}
                    src={image.url}
                    alt={image.name}
                  />
                  <h3>{image.name}</h3>
                  <span>
                    <p>${image.price}</p>
                    <button>buy</button>
                  </span>
                </div>
            )
          })}
        </div>
      </main>

    </div>
  );
}
