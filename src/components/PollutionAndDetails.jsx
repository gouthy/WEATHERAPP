import { ReactComponent as ViteLogo } from '../../assets/ic-face-green.svg';
import { MapContainer, TileLayer, Marker,Popup  } from 'react-leaflet'


const PollutionAndDetails = () => {
  return (
    <div >
     <MapContainer center={[51.505, -0.09]} zoom={13}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
</MapContainer> 
{/* <div className="flex flex-row items-center justify-between text-black py-3">
<ViteLogo />
<div className='flex flex-col items-center '>
<h1 className='text-4xl'>25</h1>
<h1 className='text-sm'>US AQI</h1>
</div>
<div className='flex flex-col items-center pr-2 '>
<h1 className='text-2xl'>Healthy</h1>
<h1 className='text-sm p-1  bg-slate-100 rounded-md'>PM 2.5 | 3 {'\u03bc'}g/m{'\u00B3'}</h1>
</div>

</div> */}
    </div>
  )
}
export default PollutionAndDetails