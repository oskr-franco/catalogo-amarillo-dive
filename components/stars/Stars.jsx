import React from 'react';
// https://react-icons.github.io/react-icons/icons?name=fa
import { FaStarHalfAlt, FaStar, FaRegStar} from "react-icons/fa";

import styles from './Stars.module.scss'

const TOTAL_STARS = 5;

function Stars({rating}) {
  const floor = Math.floor(rating);
  const fullStars = [...Array(floor)].map((_,index)=>(
    <FaStar key={index} className={styles.star}/>
  ));

  const isDecimal = floor != Math.round(rating);

  const rest = TOTAL_STARS - ( isDecimal ?  fullStars.length + 1 : fullStars.length)
  const emptyStars = [...Array(rest)].map((_,index)=>(
    <FaRegStar key={index} className={styles.star} />
  ));

  
  return (
    <>
      {fullStars}
      {isDecimal && (
        <FaStarHalfAlt 
          className={styles.star}/>
        )}
      {emptyStars}
    </>
  )
}
export default Stars;