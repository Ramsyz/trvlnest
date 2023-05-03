import React from 'react'

const BookingForm = () => {
  return (
    <div id='deals' className='max-w-[1140px] m-auto w-full p-4'>
      <form className='lg:flex justify-between items-center w-full'>
        <div className='flex flex-col my-2 py-2'>
            <label>Destination</label>
            <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
                <option>Burji Khalifi</option>
                <option>Desert Safari</option>
                <option>Jumeriah Mosque</option>
                <option>Dolphinarium</option>
                <option>Zabeel Park</option>
            </select>
        </div>
        <div className='flex w-full'>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label>Check-In</label>
                <input className='border rounded-md p-2' type="date" />
            </div>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label>Check-Out</label>
                <input className='border rounded-md p-2' type="date" />
            </div>
            </div>
            <div className='flex w-full'>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label>Adults</label>
                <select name="select" id="#">
                <option value="1">1 person</option>
                <option value="2">2 person</option>
                <option value="3">3 person</option>
                <option value="4">4+ person</option>
                </select>
            </div>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label>Kids</label>
                <select name="select" id="#">
                <option value="1">1 child</option>
                <option value="2">2 child</option>
                <option value="3">3+ child</option>
                </select>
            </div>
            </div>
            
            <div className='flex flex-col my-2 p-2 w-full'>
                <label>Search</label>
                <button className='w-full'>Rates & Avialabilities</button>
            </div>
      </form>
    </div>
  )
}

export default BookingForm
