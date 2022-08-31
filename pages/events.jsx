import Link from 'next/link'
import dbConnect from '../lib/mongo'
import Event from '../models/Event'



const Index = ({ events }) => {

  
return(
    <>
  
  
  <h1>List of Events</h1>
    {/* Create a card for each pet */}
    {events.map((event) => (
      <div key={event._id}>
        <div className="card">
          
          <h5 className="pet-name">{event.title}</h5>
          <div className="main-content">
            <h2>{event._id} - {event.title} - {event.date} | {event.category}</h2>
            <p>{event.description}</p>
            <hr />

            {/* Extra Pet Info: Likes and Dislikes
            <div className="likes info">
              <p className="label">Likes</p>
              <ul>
                {pet.likes.map((data, index) => (
                  <li key={index}>{data} </li>
                ))}
              </ul>
            </div>
            <div className="dislikes info">
              <p className="label">Dislikes</p>
              <ul>
                {pet.dislikes.map((data, index) => (
                  <li key={index}>{data} </li>
                ))}
              </ul>
            </div> */}

            {/* <div className="btn-container">
              <Link href="/[id]/edit" as={`/${pet._id}/edit`}>
                <button className="btn edit">Edit</button>
              </Link>
              <Link href="/[id]" as={`/${pet._id}`}>
                <button className="btn view">View</button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    ))}
  )
  </>
)
          }
export default Index


/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const response = await Event.find({})
  const events = response.map((doc) => {
    const event = doc.toObject()
    event._id = event._id.toString()
    return event
  })

  return { props: { 
    events: JSON.parse(JSON.stringify(events)),
  } }
}






