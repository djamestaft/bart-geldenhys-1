import React from 'react'

const workshops = [
  {
    title: 'workshop 1',
    times: 'Wed 9am - 11am',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '
  },
  {
    title: 'workshop 2',
    times: 'Wed 9am - 11am',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '
  }
]

function UpcomingWorkshops() {
  return (
    <div className='upcoming-workshops'>
      <h2 className='worskshop-section-heading flex justify-center'>Upcoming Workshops</h2>
      {workshops.map(e => {
        return <div className='workshop-item flex m-3'>
          <div className='ws-title-section '>
            <h4 className='font-bold'>{e.title}</h4>
            <span className='workshop-times'>{e.times}</span>
          </div>
          <div className='ws-description'>
            <p>{e.description}</p>
          </div>
          <button className='ws-info-button border-black border'>INFO</button>
        </div>
      })}
    </div>
  )
}

export default UpcomingWorkshops