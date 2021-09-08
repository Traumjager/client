import React, { useState, useEffect } from 'react';
import RatedCard from '../../home/RatedCard';
import styles from '../style/AllBarbers.module.css';

function AllBarbers({allBarbers}) {
  // axios.get()

  return (
    <div className={styles.container}>
      {allBarbers.map((barber) => (
        <RatedCard barber={barber}  key={barber.id} />
      ))}
    </div>
  );
}

export default AllBarbers;
