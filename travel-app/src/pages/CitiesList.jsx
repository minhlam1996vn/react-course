import Loader from '../components/Loader'
import CityItem from '../components/CityItem'
import Message from '../components/Message'
import styles from './CitiesList.module.css'

export default function CitiesList({ cities, loading }) {
  if (loading) return <Loader />

  if (!cities.length) return <Message message="Cities Data is not avialable" />

  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.name} />
      ))}
    </div>
  )
}
