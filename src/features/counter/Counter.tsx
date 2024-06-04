import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import counterReducer, {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  incrementAsyncIfEven,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  const onIncrement = () => {
    dispatch(increment());
    // const newState = counterReducer(
    //   {
    //     value: 45,
    //     status: 'idle',
    //   },
    //   incrementByAmount(44)
    // );
    // console.log(newState);
  };

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} aria-label='Increment value' onClick={onIncrement}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button} onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button className={styles.asyncButton} onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
        <button className={styles.button} onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </button>
        <button className={styles.button} onClick={() => dispatch(incrementAsyncIfEven(incrementValue))}>
          Add If Even Async
        </button>
      </div>
    </div>
  );
}
