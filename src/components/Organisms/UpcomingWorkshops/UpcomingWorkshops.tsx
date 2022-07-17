import React from 'react'

function UpcomingWorkshops(props: any) {
  return (
    <div className='upcoming-workshops'>
      <h2 className='worskshop-section-heading flex justify-center'>Upcoming Workshops</h2>
      {props.workshops.map((e: any, i: number) => {
        return <div className='workshop-item flex m-3' key={i}>
          <div className='ws-title-section '>
            <h4 className='font-bold'>{e.attributes.workshopTitle}</h4>
            <span className='workshop-times'>{e.attributes.times}</span>
          </div>
          <div className='ws-description'>
            <p>{e.attributes.workshopDescription}</p>
          </div>
          <button className='ws-info-button border-black border'>INFO</button>
        </div>
      })}
    </div>
  )
}

export default UpcomingWorkshops