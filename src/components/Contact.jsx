
const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full px-4 py-8">
      <h2 className="text-center text-gray-700">Send a Message</h2>
      <p className="text-center text-gray-700 py-2">We're standing by</p>
      <div className="grid md:grid-cols-2">
        <img className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]" src="https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="/" />
      <form>
        <div className="grid grid-cols-2">
            <input className="border m-2 p-2" type="text" placeholder='First'/>
            <input className="border m-2 p-2" type="text" placeholder='Last' />
            <input className="border m-2 p-2" type="text" placeholder='Email' />
            <input className="border m-2 p-2" type="text" placeholder='Phone' />
            <input className="border m-2 p-2 col-span-2" type="text" placeholder='Address' />
            <textarea className="border m-2 p-2 col-span-2" cols="30" rows="10"></textarea>
            <button className="col-span-2 m-2">Submit</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Contact
