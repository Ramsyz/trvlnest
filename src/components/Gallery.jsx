import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-8'>
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
          <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
        </div>
        <div>
          <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/5075078/pexels-photo-5075078.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
        </div>
        <div>
          <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/3684847/pexels-photo-3684847.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
        </div>
        <div>
          <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/3873672/pexels-photo-3873672.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
        </div>
        <div>
          <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/2867769/pexels-photo-2867769.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
        </div>
      </div>
    </div>
  )
}

export default Gallery
