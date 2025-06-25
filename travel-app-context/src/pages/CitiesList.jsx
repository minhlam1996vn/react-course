import Loader from '../components/Loader'
import CityItem from '../components/CityItem'
import Message from '../components/Message'
import styles from './CitiesList.module.css'
import { useCity } from '../contexts/CityContext'
// import { useSearchParams } from 'react-router'

export default function CitiesList() {
  const { cities, loading } = useCity()

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
