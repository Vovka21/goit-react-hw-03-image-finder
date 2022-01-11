import React, { Component } from 'react';
import fetchImages from './API/fetchImages';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import styles from './App.module.css';
class App extends Component {
  state = {
    imgName: '',
    showModal: false,
    imagePage: [],
    page: 1,
    total: null,
    bigImageUrl: '',
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    const page = this.state.page;
    const imgName = this.state.imgName;
    this.fetchFirstImagePage(imgName, page);
  }

  componentDidUpdate(prevProps, prevState) {
    const page = this.state.page;
    const imgName = this.state.imgName;

    if (prevState.imgName !== imgName) {
      this.setState({ loading: true });
      this.fetchFirstImagePage(imgName, page);
    }

    if (prevState.page !== page) {
      this.fetchNextImagePages(imgName, page);
    }
  }

  toggleModal = bigImageUrl => {
    this.setState({
      showModal: !this.state.showModal,
      bigImageUrl,
    });
  };

  async fetchNextImagePages(imgName, page) {
    const { hits } = await fetchImages(imgName, page);
    const images = hits.map(({ id, webformatURL, largeImageURL }) => {
      return { id, webformatURL, largeImageURL };
    });
    this.setState(prevState => ({
      imagePage: [...prevState.imagePage, ...images],
    }));
  }

  async fetchFirstImagePage(imgName, page) {
    const { hits, total } = await fetchImages(imgName, page);
    const images = hits.map(({ id, webformatURL, largeImageURL }) => {
      return { id, webformatURL, largeImageURL };
    });
    this.setState({
      imagePage: images,
      total,
      loading: false,
    });
  }

  formSubmitHandler = value => {
    this.setState({
      imgName: value,
    });
  };

  handleClickMoreImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log('!!!');
  };

  render() {
    const { imgName, imagePage, total, showModal, bigImageUrl, loading } =
      this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.formSubmitHandler} />

        <ImageGallery
          imgName={imgName}
          imagePage={imagePage}
          onClose={this.toggleModal}
        />

        {loading && <Loader />}

        {total > 0 && <Button onClick={this.handleClickMoreImages} />}

        {!loading && total === 0 && <p>No images!</p>}

        {showModal && (
          <Modal onClose={this.toggleModal} bigImageUrl={bigImageUrl} />
        )}
      </div>
    );
  }
}

export default App;
