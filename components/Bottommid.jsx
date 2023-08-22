import './Bottommid.css'
import Image from 'next/image'

export default function Mid () {

    return (
        <div className='bottommid'>
            <Image 
                src='/espressoicon.png'
                width={100}
                height={100}
                alt='espresso icon'
            />
            <h1 className='text-6xl'>Books & More</h1>
            <p className="midp  text-2xl tracking-tight text-gray">The bookstore at the Falling Rock Café has more than 30,000 new, used and rare books, free wireless internet, and hosts regular art, music and community events.
</p>
 <button
        type="button"
        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >Shop Now</button>

        </div>
    )
}