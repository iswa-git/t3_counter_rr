import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//eslint-disable-next-line
//import { selectCount, decr, incr } from './counterSlice';
import { selectCount2, incr2 } from './counterSlice2';
import styles from './Counter.module.css';

export function Counter({tesbih}) {
  const count = useSelector(selectCount2);
  const dispatch = useDispatch();


  return (
    <div>
      <div className={styles.row}>
        
        {/*<span className={styles.value}>{count}</span>*/}
        <p className={styles.countertext}>{count}</p>
        
        <button
          className={styles.button}
          onClick={() => dispatch(incr2())}
        >
          {tesbih}
        </button>
      </div>
    </div>
  );
}
