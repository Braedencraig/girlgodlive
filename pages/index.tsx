/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/legacy/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dates = [
    { date: "Mar 8", venue: "Bell House", city: "Brooklyn, NY" },
    { date: "Mar 9", venue: "Richmond Music Hall", city: "Richmond, VA" },
    { date: "Mar 12", venue: "Tuffy's Music Box", city: "Orlando, FL" },
    { date: "Mar 14", venue: "Aisle 5", city: "Atlanta, GA" },
    { date: "Mar 15", venue: "3rd & Lindsey", city: "Nashville, TN" },
    { date: "Mar 16", venue: "El Club", city: "Detroit, MI" },
    { date: "Mar 18", venue: "X-ray Arcade", city: "Milwaukee, WI" },
    { date: "Mar 19", venue: "Bottom Lounge", city: "Chicago, IL" },
    { date: "Mar 21", venue: "Old Rock House", city: "St. Louis, MO" },
    { date: "Mar 22", venue: "Gabe's", city: "Iowa City, IA" },
    { date: "Mar 26", venue: "Cervantes Other Side", city: "Denver, CO" },
    { date: "Mar 28", venue: "Crescent Ballroom", city: "Pheonix, AZ" },
    { date: "Mar 29", venue: "Soda Bar", city: "San Diego, CA" },
    {
      date: "Apr 2",
      venue: "Swedish American Hall",
      city: "San Francisco, CA",
    },
    { date: "Apr 4", venue: "Hawthorne Theatre", city: "Portland, OR" },
    { date: "Apr 5", venue: "The Crocodile", city: "Seattle, WA" },
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
                <a href="http://">Tickets</a>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
