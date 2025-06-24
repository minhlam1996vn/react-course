import styles from './CountryItem.module.css'

export default function CountryItem({ country }) {
  return (
    <div className={styles.countryItem}>
      <div>{country.country}</div>
      <div>{country.emoji_flag}</div>
    </div>
  )
}
