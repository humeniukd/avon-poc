import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Cart from '../components/Cart';
import { defineCustomElements as defineHeader } from 'avon-header/loader';
import { defineCustomElements as defineFooter } from 'avon-footer/loader';
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    defineHeader()
    defineFooter()
  }, []);
  return (
    <div className={styles.container}>
      <avon-header></avon-header>
      <Head>
        <title>Avon | Category</title>
      </Head>

      <main className={styles.main}>
        <Cart />
      </main>

      <avon-footer></avon-footer>
    </div>
  );
}
