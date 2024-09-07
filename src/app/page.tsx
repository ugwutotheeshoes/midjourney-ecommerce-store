/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";
import { ProductData, ProductDataProp } from './data';

export default function Home() {
  const data: ProductDataProp[] = ProductData
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>digital art store</h1>

        <ul className={styles.section}>
          {data.map((image) => {
            return (
              <li className={styles.list} key={image.name}>
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
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  );
}
