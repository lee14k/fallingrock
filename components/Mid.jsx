import './Mid.css'
import Image from 'next/image'

export default function Mid () {

    return (
        <div className='mid'>
            <Image 
                src='/espressoicon.png'
                width={100}
                height={100}
                alt='espresso icon'
            />
            <h1 className='text-6xl'>Munising's Living Room</h1>
            <p className="midp text-2xl tracking-tight text-gray">From the local artist exhibits, to the live music and events that inspire us, to the thousands of hand-selected books among the shelves, the Falling Rock Café is much more than the comfy atmosphere, the delicious food, and the custom roasted coffee we serve.
</p>
 <button
        type="button"
        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >Our Story</button>

        </div>
    )
}