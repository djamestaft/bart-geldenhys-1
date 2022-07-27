import React from 'react'

function Footer() {
  return (
        <div className='flex flex-col bg-white items-center'>
            <div className='flex footer flex flex-col bg-white items-center mt-10'>
                <div>
                    <div className='flex flex-col text-center'>
                        <h3 className='text-center m-5'>Newsletter</h3>
                        <p className='text-center mb-5 text-xs'>Don&apos;t stop believing</p>
                        <div className='flex mb-10 justify-center'>
                            <input className='email-input p-3' type="text" placeholder='Email Here'/>
                            <button className='email-button bg-black text-white p-5'>Email</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div className="socials flex p-5">
                    <div className='mr-5'>Instagram</div>
                    <div className='mr-5'>Facebook</div>
                    <div className='mr-5'>Twitter</div>
                </div>
                <div className='w-screen text-center bg-gray-500 text-white'>Copywright</div>
            </div>
        </div>
    )
}

export default Footer