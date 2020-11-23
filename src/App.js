import Map from './components/Map'
import { useState, useEffect } from 'react'
import Loading from './components/Loader'
import Header from './components/Header'
 
function App() {
  const [eventData, setEventData] = useState([]) 
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json() //only really want events array, so destructure 

      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
    console.log(eventData)
  }, []) //dependency array which is empty

  return (
    <div>
      <Header />
    { !loading ? <Map eventData={eventData} /> : <Loading />}
    </div>
  );
}

export default App;
