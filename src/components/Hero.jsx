
const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="hero" />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full h-full md:-[50%] max-w-[600px] p-4 text-white">
            <h1 className="text-4xl font-bold">Find Your Special Trip</h1>
            <h2 className="py-4 italic">With Weekaway</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quisquam dolorem eligendi in, labore eaque ipsam. Dignissimos cumque eveniet dolorum fugiat at repellendus repudiandae ducimus.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
