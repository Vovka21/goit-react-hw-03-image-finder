import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import styles from './ImageGallery.module.css';

// import PropTypes from 'prop-types';
// import styles from './filter.module.css';

class ImageGallery extends Component {
  state = {
    image: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imgName;
    const nextName = this.props.imgName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${nextName}&page=1&key=24121989-9eb31354267b9bbbf5c8e125c&image_type=photo&orientation=horizontal&per_page=12`,
        )
          .then(res => {
            if (res.ok) {
              return res.json();
            }

            return Promise.reject(new Error(`Ошибка ${nextName}`));
          })
          .then(image => this.setState({ image, status: 'resolved' }))
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 3000);
    }
  }

  render() {
    const { image, error, status } = this.state;

    if (status === 'idle') {
      return <div>Введите имя картинки...</div>;
    }

    if (status === 'pending') {
      // return <div>Загружаем...</div>;
      return <Loader />;
    }

    if (status === 'rejected') {
      return <h1>Ошибка {error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <ul className={styles.gallery}>
          <ImageGalleryItem image={image} />
        </ul>
      );
    }
  }
}

// ImageGallery.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default ImageGallery;
