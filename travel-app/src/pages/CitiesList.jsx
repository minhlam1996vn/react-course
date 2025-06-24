export default function CitiesList({ cities, loading }) {
  console.log(cities)
  console.log(loading)
  return (
    <div>
      <h2>Cities List</h2>
      <pre>{JSON.stringify(cities, null, 2)}</pre>
      {loading && <p>Loading...</p>}
    </div>
  )
}
