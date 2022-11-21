import React from 'react';
import cx from 'classnames';

import Workday from '../workday/Workday'

import styles from './Workdays.module.scss';

const WEEK = {
  monday: 'M',
  tuesday: 'T',
  wednesday: 'W',
  thursday: 'T',
  friday: 'F',
  saturday: 'S',
  sunday: 'S'
}

function Workdays({className, workdays}) {
  const days = workdays.map((workday) => workday.name.toLowerCase());

  return (
    <div className={cx(className, styles.workdays)}>
      { Object.keys(WEEK).map((day) => (
          <Workday 
            key={day}
            isActive={days.includes(day)}
            value={WEEK[day]}
          />
        ))
      }
    </div>
  )
}

export default Workdays;