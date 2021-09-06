import React,{useState} from 'react'
import RatedCard from '../../home/RatedCard';
import styles from '../style/AllBarbers.module.css'
import axios from '../../../API/axios'
function AllBarbers() {
    
    // axios.get()
    const barber = {
        userName: "Saleh Al Hallaq",
        email: "saleh@gmail.com",
        city: "Amman, Jordan",
        address: "location.GPS",
        gender: "Male",
        age: 28,
        shopGender: "for Men",
        shopName: "Sha3rati",
        phoneNumber: "0771253651",
        profilePicture:
          "https://scontent.famm2-3.fna.fbcdn.net/v/t1.6435-9/196709769_2074808709326359_2775027692625290496_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGFOM9IQSZQDbxqZAmA9hyAI0SWV6srTsYjRJZXqytOxtl7xIfawVpKudayZYpAo48xQ6BY5TIhfUBcYClBfgdh&_nc_ohc=F0H728oRJnIAX-sIuP5&_nc_ht=scontent.famm2-3.fna&oh=49a25acff53aa6653679fabe5136fdb4&oe=61561B09",
        workingHours: "8 Am - 5 Pm ",
        holidays: "Monday",
        state: "open",
      };
      const [allBarbers, setAllBarbers] = useState([
        barber,
        barber,
        barber,
        barber,
        barber,
        barber,
        barber,
        barber,
      ]);
      const [allBarberServices, setAllBarberServices] = useState(23);
      const [allBarberProducts, setAllBarberProducts] = useState(16);
      const [followers, setFollowers] = useState(1258);
      const [following, setFollowing] = useState(49);
      return (
        <div className={styles.container}>
          {allBarbers.map((barber) => (
            <RatedCard />
          ))}
        </div>
    )
}

export default AllBarbers
