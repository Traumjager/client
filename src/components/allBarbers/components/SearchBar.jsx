import React from 'react'
import styles from '../style/search.module.css'


function SearchBar({setAllBarbers,allBarbers,fetchBarbers}) {
  function search(e){
    if(e.target.value.length > 0){
   const barbers= allBarbers.filter(barber=>{
    return barber.user_name.toLowerCase().includes(e.target.value.toLowerCase())?barber:null;
   })
   setAllBarbers(barbers);
  }else{
    fetchBarbers();
  }
  }

    return (
        <div className={styles.container}>
        <form className={styles.form} autocomplete="off">
          <div className={`${styles.finder}`}>
            <div className={styles.finder__outer}>
              <div className={styles.finder__inner}>
                
                <input placeholder='Search' onChange={e=>search(e)} className={styles.finder__input} type="text" name="q" />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
}

export default SearchBar
