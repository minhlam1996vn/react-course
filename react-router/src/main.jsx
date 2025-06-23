import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router'
import Root, { loader as rootLoader, action as rootAction } from './routes/Root'
import ErrorPage from './routes/ErrorPage'
import Contact, {
  loader as contactLoader,
  favoriteAction,
} from './routes/Contact'
import EditContact, { editAction } from './routes/EditContact'
import { destroyAction } from './routes/Destroy'
import Index from './routes/Index'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//     action: rootAction,
//     children: [
//       {
//         errorElement: <ErrorPage />,
//         children: [
//           { index: true, element: <Index /> },
//           {
//             path: 'contacts/:contactId',
//             element: <Contact />,
//             loader: contactLoader,
//             action: favoriteAction,
//           },
//           {
//             path: 'contacts/:contactId/edit',
//             element: <EditContact />,
//             loader: contactLoader,
//             action: editAction,
//           },
//           {
//             path: 'contacts/:contactId/destroy',
//             action: destroyAction,
//           },
//         ],
//       },
//     ],
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<ErrorPage />}
      loader={rootLoader}
      action={rootAction}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />}></Route>
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={favoriteAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route path="contacts/:contactId/destroy" action={destroyAction} />
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
