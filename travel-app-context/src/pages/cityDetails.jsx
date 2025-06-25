import { useParams, useSearchParams } from 'react-router'

export default function CityDetails() {
  const { cityId } = useParams()

  const [searchParams] = useSearchParams()

  const latitude = searchParams.get('lat')
  const longitude = searchParams.get('long')

  return (
    <div>
      City Detailsdsd: {cityId}
      <div>lat: {latitude}</div>
      <div>long: {longitude}</div>
    </div>
  )
}
