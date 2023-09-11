const TopButtons = () => {
    const cities = [
        {
            id : 1,
            title: 'New York City',
        },
        {
            id : 2,
            title: 'Chicago',
        },
        {
            id:3,
            title: 'Austin',
        },
        {
            id : 4,
            title : 'Washington D.C.',
        },
        {
            id : 5,
            title : 'Seattle'
        }
    ]
  return (
    <div className="flex items-center justify-around py-6"> 
        {cities.map((city)=> (
        <button key = {city.id} className='text-black text-lg font-large'>{city.title}</button>

    ))

    }</div>
  )
}
export default TopButtons