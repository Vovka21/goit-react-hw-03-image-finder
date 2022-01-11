import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    imgName: '',
  };

  handleNameChange = e => {
    this.setState({ imgName: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.imgName.trim() === '') {
      alert('Please enter image name');
      return;
    }

    this.props.onSubmit(this.state.imgName);
    this.setState({ imgName: '' });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.button}>
            <span className={styles.buttonLabel}>
              <FcSearch />
            </span>
          </button>

          <input
            className={styles.input}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            name="imgName"
            value={this.state.imgName}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

// Searchbar.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   handleNameChange: PropTypes.func.isRequired,
//   value: PropTypes.string,
// };

export default Searchbar;
