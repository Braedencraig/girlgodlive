/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/legacy/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dates = [
    {
      date: "Aug 4",
      venue: "The Bourbon Room",
      city: "Los Angeles, CA",
      link: "https://www.ticketweb.com/event/girl-god-the-bourbon-room-tickets/13318508?pl=BourbonRoom",
    },
  ];
  return (
    <>
      <Head>
        <title>Girl God Live</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Girl God Live</title>
        <meta name="description" content="Girl God Live" />
        <meta property="og:title" content="Girl God Live" />
        <meta property="og:description" content="Girl God Live" />
        <meta property="og:url" content="http://girlgodlive.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://girlgodlive.commain.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta name="twitter:title" content="Girl God Live" />
        <meta name="twitter:description" content="Girl God Live" />
        <meta name="twitter:image" content="http://girlgodlive.commain.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img src="/main.png" alt="Girl God Live" />
        <div className={styles.dateWrapper}>
          {dates.map((date) => {
            return (
              <div key={date.date} className={styles.date}>
                <div className={styles.dateText}>{date.date}</div>
                <div className={styles.dateText}>{date.venue}</div>
                <div className={styles.dateText}>{date.city}</div>
                {date.link && (
                  <a href={date.link} target="_blank" rel="noopener noreferrer">
                    Tickets
                  </a>
                )}
                {!date.link && <a>TBD</a>}
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
