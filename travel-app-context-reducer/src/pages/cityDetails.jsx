import { useParams, useSearchParams } from 'react-router'
import { useCity } from '../contexts/CityContext'
import { useEffect } from 'react'
import Loader from '../components/Loader'

export default function CityDetails() {
  const { cityId } = useParams()

  const { getCity, currentCity, loading } = useCity()

  const [searchParams] = useSearchParams()

  const latitude = searchParams.get('lat')
  const longitude = searchParams.get('long')

  useEffect(() => {
    getCity(cityId)
  }, [cityId])

  if (loading) return <Loader />

  return (
    <div>
      <div>City Details: {cityId}</div>
      <div>Name: {currentCity.name}</div>
      <div>Country: {currentCity.country}</div>
      <div>lat: {latitude}</div>
      <div>long: {longitude}</div>
    </div>
  )
}
