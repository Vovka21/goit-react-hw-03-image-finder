import styles from './Button.module.css';
import propTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      Load more...
    </button>
  );
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
