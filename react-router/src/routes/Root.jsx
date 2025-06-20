// import { Form, Link, Outlet, useLoaderData } from 'react-router';
import { Form, NavLink, Outlet, useLoaderData } from 'react-router'
import { createContact, getContacts } from '../contacts'

export async function loader() {
  let contacts = await getContacts()
  return { contacts }
}

export async function action() {
  const contact = await createContact()
  return { contact }
}

export default function Root() {
  let { contacts } = useLoaderData()

  return (
    <>
      <div id="container">
        <div id="sidebar">
          <div className="search-box">
            <div>
              <input type="text" placeholder="Search" />
            </div>
            <div>
              <Form method="post">
                <button>New</button>
              </Form>
            </div>
          </div>

          <nav>
            {contacts.length ? (
              <ul className="names-list">
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    {/* <Link to={`contacts/${contact.id}`}>{contact.first} {contact.last}</Link> */}
                    <NavLink
                      to={`contacts/${contact.id}`}
                      className={({ isActive, isPending }) =>
                        isActive ? 'active' : isPending ? 'pending' : ''
                      }
                    >
                      {contact.first} {contact.last}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No Contacts</p>
            )}
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  )
}
