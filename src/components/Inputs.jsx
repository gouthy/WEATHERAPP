import { UilSearch, UilLocationPoint  } from '@iconscout/react-unicons'
const Inputs = () => {
  return (
    <div className='flex flex-row items-center justify-center'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input type='text' placeholder='Search for Address...' className='text-xl font-light p-2 shadow-xl border-2 border-gray-500 focus:outline-none capitalize w-full rounded-md' />
        <UilSearch size={25} className='text-black cursor-pointer transition ease-out hover:scale-125'/>
        <UilLocationPoint size={25} className='text-black cursor-pointer transition ease-out hover:scale-125'/>
    </div>
    </div>
  )
}
export default Inputs