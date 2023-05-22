import styles from './authent.module.scss';

/* eslint-disable-next-line */
export interface AuthentProps {}

export function Authent(props: AuthentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Authent!</h1>
    </div>
  );
}

export default Authent;
