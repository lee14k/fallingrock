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
            <h1 className='text-white text-6xl'>Munising's Living Room</h1>
            <p>From the local artist exhibits, to the live music and events that inspire us, to the thousands of hand-selected books among the shelves, the Falling Rock Café is much more than the comfy atmosphere, the delicious food, and the custom roasted coffee we serve.
<button>Our Story</button>
</p>
        </div>
    )
}