import MediaCard from "@/components/media-card/MediaCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <MediaCard mediaId={10} />
    </main>
  );
}
