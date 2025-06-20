import { useRouteError } from 'react-router'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div>
      <p>The page you are trying is not available</p>
      <p>{error.statusText || error.message} </p>
    </div>
  )
}
