import styles from './Circle.module.css';

const Circle = ({ number, active }) => {
  return (
    <>
      <div className={`${styles.circle} ${active ? styles.active : ''}`}>
        {number}
      </div>
    </>
  );
};

export default Circle;
