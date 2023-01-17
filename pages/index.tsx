/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/legacy/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dates = [
    {
      date: "Feb 11",
      venue: "Studio K",
      city: "Washington, DC",
      link: "https://www.kennedy-center.org/whats-on/explore-by-genre/comedy/2022-2023/girl-god/",
    },
    {
      date: "Feb 25",
      venue: "Biltmore Cabaret",
      city: "Vancouver, BC",
      link: "https://jflvancouver.com/show/girl-god-biltmore/",
    },
    {
      date: "Mar 8",
      venue: "Bell House",
      city: "Brooklyn, NY",
      link: "https://www.eventbrite.com/e/girl-god-tickets-504907771737",
    },
    {
      date: "Mar 9",
      venue: "Richmond Music Hall",
      city: "Richmond, VA",
      link: "https://bit.ly/GirlGod3-9",
    },
    {
      date: "Mar 12",
      venue: "Tuffy's Music Box",
      city: "Orlando, FL",
      link: "https://www.ticketweb.com/event/girl-god-tuffys-music-box-tickets/12763095",
    },
    {
      date: "Mar 14",
      venue: "Aisle 5",
      city: "Atlanta, GA",
      link: "https://seetickets.us/girlgoda5",
    },
    // { date: "Mar 15", venue: "3rd & Lindsey", city: "Nashville, TN", link: "" },
    {
      date: "Mar 16",
      venue: "El Club",
      city: "Detroit, MI",
      link: "https://link.dice.fm/S1b5d731b3b6",
    },
    {
      date: "Mar 18",
      venue: "X-ray Arcade",
      city: "Milwaukee, WI",
      link: "https://www.ticketweb.com/event/girl-god-x-ray-arcade-tickets/12846495?pl=kickstand",
    },
    {
      date: "Mar 19",
      venue: "Bottom Lounge",
      city: "Chicago, IL",
      link: "https://www.ticketweb.com/event/girl-god-bottom-lounge-tickets/12846475?pl=kickstand",
    },
    {
      date: "Mar 21",
      venue: "Old Rock House",
      city: "St. Louis, MO",
      link: "https://www.etix.com/ticket/p/7281483/girl-god-lake-saint-louis-old-rock-house-mjp",
    },
    {
      date: "Mar 22",
      venue: "Gabe's",
      city: "Iowa City, IA",
      link: "https://www.ticketweb.com/event/girl-god-gabes-tickets/12846365?pl=kickstand",
    },
    {
      date: "Mar 26",
      venue: "Cervantes Other Side",
      city: "Denver, CO",
      link: "http://bit.ly/GirlGodCervs",
    },
    {
      date: "Mar 28",
      venue: "Crescent Ballroom",
      city: "Pheonix, AZ",
      link: "https://www.ticketweb.com/event/girl-god-crescent-ballroom-tickets/12779255?pl=crescent",
    },
    {
      date: "Mar 29",
      venue: "Soda Bar",
      city: "San Diego, CA",
      link: "https://link.dice.fm/S614b9fb511d",
    },
    {
      date: "Apr 2",
      venue: "Swedish American Hall",
      city: "San Francisco, CA",
      link: "https://www.ticketweb.com/event/girl-god-swedish-american-hall-tickets/12816075",
    },
    {
      date: "Apr 4",
      venue: "Hawthorne Theatre",
      city: "Portland, OR",
      link: "https://www.etix.com/ticket/p/3956410/girl-god-portland-hawthorne-theatre",
    },
    {
      date: "Apr 5",
      venue: "The Crocodile",
      city: "Seattle, WA",
      link: "https://www.ticketweb.com/event/girl-god-the-crocodile-tickets/12815625?pl=crocodile",
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
