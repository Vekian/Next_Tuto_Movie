import React from "react";
import styles from "./MediaCard.module.scss";
import Image from "next/image";
import Link from "next/link";

function MediaCard({ mediaId }) {
  return (
    <div className={styles.card}>
      <Link href={`/movies/${mediaId}`}>
        <div className={styles.image}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Nutkin.jpg/220px-Nutkin.jpg"
            alt="media title"
            fill
          />
        </div>
        <div className={styles.content}>
          <h2>Creed</h2>
          <p>Le 01/10/2023</p>
        </div>
      </Link>
    </div>
  );
}

export default MediaCard;
