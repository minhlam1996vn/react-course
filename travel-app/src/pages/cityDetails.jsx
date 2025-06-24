import { useParams } from 'react-router'
export default function CityDetails() {
  const { cityId } = useParams()

  return <div>City Detailsdsd: {cityId}</div>
}
