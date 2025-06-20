import { Form, useLoaderData } from 'react-router'
import { getContact } from '../contacts'

export async function loader({ params }) {
  let contact = await getContact(params.contactId)
  return { contact }
}

export default function Contact() {
  const contactDetails = useLoaderData()

  const contact = {
    first: 'Your',
    last: 'Name',
    avatar: 'http://placehold.co/200x200',
    twitter: 'your_handle',
    notes: 'Some notes',
    favorite: true,
    ...contactDetails.contact,
  }

  return (
    <div id="contact">
      <div>
        <img src={contact.avatar} />
      </div>
      <div>
        <h1>
          {contact.first} {contact.last}
        </h1>
        <p>
          Twitter Handle:{' '}
          <a href={`https://www.twitter.com/${contact.twitter}`}>
            {contact.twitter}
          </a>
        </p>
        <p>{contact.notes}</p>

        <div>
          <Form action="edit">
            <button>Edit</button>&nbsp;
          </Form>
          <Form action="destroy" method="post">
            <button>Delete</button>
          </Form>
        </div>
      </div>
    </div>
  )
}
