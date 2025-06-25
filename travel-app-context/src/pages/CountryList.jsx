import CountryItem from '../components/CountryItem'
import Loader from '../components/Loader'
import styles from './CountryList.module.css'

export default function CountryList({ cities, loading }) {
  if (loading) return <Loader />

  let countries = []

  countries = cities.reduce((arr, curr) => {
    if (!arr.map((el) => el.country).includes(curr.country)) {
      return [...arr, { country: curr.country, emoji_flag: curr.emoji_flag }]
    } else {
      return arr
    }
  }, [])

  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </div>
  )
}
