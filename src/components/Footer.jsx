import {BiTrip} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full py-8 border-t-4'>
      <div className='flex justify-center items-center m-auto'>
        <BiTrip size={30} className='text-[var(--primary-dark)] mr-2'/>
        <h1 className='text-xl font-bold text-gray-700'>TRVLNEST</h1>
      </div>
    </div>
  )
}

export default Footer
