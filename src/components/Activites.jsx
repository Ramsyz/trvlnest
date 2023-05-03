
const Activites = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
        <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold">RollerCoaster</h3>
        <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src="https://images.pexels.com/photos/106155/germany-duisburg-tiger-turtle-106155.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="rollercoaster" />
        </div>
        <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold">Atlantis Diving</h3>
        <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src="https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Diving" />
        </div>
        <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold">Flying</h3>
        <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src="https://images.pexels.com/photos/4857564/pexels-photo-4857564.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Flying" />
        </div>
    </div>
  )
}

export default Activites
