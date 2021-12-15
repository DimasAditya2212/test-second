import MeetupList from '../components/meetup/MeetupList';
import { useState, useEffect} from 'react'


function AllMeetUpsPage() {
const [isLoading, setIsLoading] = useState(true)
const [loadedMeetup, setLoadedMeetup] = useState([])

useEffect(() => {
  fetch('https://react-started-3997e-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json')
    .then(response => {
      response.json();
    }).then(data => {
      const meetup = []
      for (const key in data){
        const newMeetup = {
          id: key,
          ...data[key]
        }

        meetup.push(newMeetup)
      }

      setIsLoading(false)
      setLoadedMeetup(meetup)
    }).catch(() => console.log('error'))
}, [])

    

    if(isLoading){
      return <section>
        <p>Loading..</p>
      </section>
    }

    return <section>
        <MeetupList meetups={loadedMeetup} />
    </section>
}

export default AllMeetUpsPage;