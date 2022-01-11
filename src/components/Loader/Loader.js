import { ImSpinner } from 'react-icons/im';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div>
      <ImSpinner size="32" className={styles.spinner} />
      Загружаем...
    </div>
  );
}
