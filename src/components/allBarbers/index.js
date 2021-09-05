import React from 'react'
import AllBarbers from './components/AllBarbers'
import SearchBar from './components/SearchBar'

import styles from './style/main.module.css'
function index() {
    return (
        <div className={styles.main}>
            <SearchBar/>
            <AllBarbers/>
        </div>
    )
}

export default index
