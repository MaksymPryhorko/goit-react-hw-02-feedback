import React from 'react';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statictics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className="statList">
      <li className={style.statItem}>Neutral: {neutral}</li>
      <li className={style.statItem}>Bad: {bad}</li>
      <li className={style.statItem}>Good: {good}</li>
      <li className={style.statItem}>Total: {total}</li>
      <li className={style.statItem}>
        Positive Feedback: {positivePercentage ? positivePercentage : 0}%
      </li>
    </ul>
  );
}

Statictics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
