import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

function ImageGallery(props) {
  const { imagePage, onClose } = props;

  return (
    <ul className={styles.gallery}>
      {imagePage.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            onClose={onClose}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  imagePage: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageGallery;
