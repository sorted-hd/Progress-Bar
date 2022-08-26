import Circle from '../../UI/Circle/Circle';
import styles from './ProgressBar.module.css';
import { useState } from 'react';

const ProgressBar = () => {
  let noOfComponents = [1, 2, 3, 4];
  const [start, setStart] = useState(1);

  const setNextStart = () => {
    setStart((curr) => curr + 1);
  };

  return (
    <div className={styles.progressBar}>
      {noOfComponents.map((val) => {
        return (
          <>
            <Circle number={val} active={val === start || val < start} />
            {val !== 4 && (
              <div
                className={`${styles.line} ${
                  val === start ? styles.halfFill : ''
                } ${val < start ? styles.fill : ''}`}
              ></div>
            )}
          </>
        );
      })}

      <button onClick={setNextStart}>{start === 4 ? 'Confirm' : 'Next'}</button>
    </div>
  );
};

export default ProgressBar;
