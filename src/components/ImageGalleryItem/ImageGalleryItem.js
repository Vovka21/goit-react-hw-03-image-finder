import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem(props) {
  const { webformatURL, largeImageURL, onClose } = props;
  return (
    <li className={styles.galleryItem}>
      <img
        onClick={e => {
          onClose(e.target.dataset.large);
        }}
        src={webformatURL}
        alt=""
        className={styles.galleryItemImage}
        data-large={largeImageURL}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
