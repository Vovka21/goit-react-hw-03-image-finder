import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem(props) {
  const { webformatURL, largeImageURL, onImageClick } = props;
  const setFullImage = () => onImageClick(largeImageURL);

  return (
    <li className={styles.galleryItem}>
      <img
        onClick={setFullImage}
        src={webformatURL}
        alt=""
        className={styles.galleryItemImage}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
