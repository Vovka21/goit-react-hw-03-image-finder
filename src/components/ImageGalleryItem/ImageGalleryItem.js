import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ image: { hits, total } }) {
  return (
    <div>
      {hits.map(img => (
        <li key={img.id} className={styles.galleryItem}>
          <img
            src={img.webformatURL}
            alt={img.tags}
            className={styles.galleryItemImage}
          />
        </li>
      ))}
    </div>
  );
}
