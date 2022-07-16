import React from 'react'

interface IProps {
  blurbText: string,
}

function Blurb(props: IProps) {
  return (
    <div className='blurb text-center uppercase'>
      {props.blurbText}
    </div>
  )
}

export default Blurb