import React from 'react'
import styles from '../style/search.module.css'

function SearchBar() {
    return (
        <div className={styles.container}>
        <form className={styles.form} autocomplete="off">
          <div className={`${styles.finder}`}>
            <div className={styles.finder__outer}>
              <div className={styles.finder__inner}>
                
                <input placeholder='search' className={styles.finder__input} type="text" name="q" />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
}

export default SearchBar
