import React,{ useState, useEffect } from 'react'
import AllBarbers from './components/AllBarbers'
import SearchBar from './components/SearchBar'
import styles from './style/main.module.css'
import instance from '../../API/axios'
function Index() {
    const [allBarbers, setAllBarbers] = useState([]);
    const [allBarberServices, setAllBarberServices] = useState(23);
    const [allBarberProducts, setAllBarberProducts] = useState(16);
    const [followers, setFollowers] = useState(1258);
    const [following, setFollowing] = useState(49);
  
    // fetch barbers
    async function fetchBarbers() {
      const response = await instance.get('/barber/user');
      setAllBarbers(response.data);
    }
  
    useEffect(() => {
      fetchBarbers();
    }, []);
  
    useEffect(() => {
    }, [allBarbers]);

    return (
        <div className={styles.main}>
            <SearchBar fetchBarbers={fetchBarbers} setAllBarbers={setAllBarbers} allBarbers={allBarbers}/>
            <AllBarbers allBarbers={allBarbers}/>
        </div>
    )
}

export default Index
