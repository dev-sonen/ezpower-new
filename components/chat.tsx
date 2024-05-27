'use client'

import { useState , useEffect } from 'react'
import Link from 'next/link'

type Props = {}

export default function Chat ( props: Props ) {

    const [ height , setHeight ] = useState <number> ( 0 )
    useEffect( () => window.addEventListener( 'scroll' , () => setHeight( window.scrollY ) ) , [ height ] )

    return (
        <div className='fixed bottom-7 right-7 w-max h-max transition-all ease-in-out duration-300'>
            <Link href='https://m.me/254352434418146' className='flex bg-blue-500 text-white rounded-full p-3 outline-none cursor-pointer group'>
                <div className='relative'>
                    <svg
                        className='h-7 w-7 transition ease-in-out duration-300 group-hover:scale-125'
                        xmlns='http://www.w3.org/2000/svg'
                        width='1em'
                        height='1em'
                        viewBox='0 0 24 24'
                    >
                        <path
                            fill='currentColor'
                            d='M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17c.16.13.26.35.27.57l.05 1.78c.04.57.61.94 1.13.71l1.98-.87c.17-.06.36-.09.53-.06c.9.27 1.9.4 2.9.4c5.64 0 10-4.13 10-9.7S17.64 2 12 2m6 7.46l-2.93 4.67c-.47.73-1.47.92-2.17.37l-2.34-1.73a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.33-.97-.17-.68-.63l2.93-4.67c.47-.73 1.47-.92 2.17-.4l2.34 1.76a.6.6 0 0 0 .72 0l3.16-2.4c.42-.33.97.17.68.63'
                        />
                    </svg>
                    <svg
                        className='h-7 w-7 absolute top-0 '
                        xmlns='http://www.w3.org/2000/svg'
                        width='1em'
                        height='1em'
                        viewBox='0 0 24 24'
                    >
                        <path
                            fill='currentColor'
                            d='M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17c.16.13.26.35.27.57l.05 1.78c.04.57.61.94 1.13.71l1.98-.87c.17-.06.36-.09.53-.06c.9.27 1.9.4 2.9.4c5.64 0 10-4.13 10-9.7S17.64 2 12 2m6 7.46l-2.93 4.67c-.47.73-1.47.92-2.17.37l-2.34-1.73a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.33-.97-.17-.68-.63l2.93-4.67c.47-.73 1.47-.92 2.17-.4l2.34 1.76a.6.6 0 0 0 .72 0l3.16-2.4c.42-.33.97.17.68.63'
                        />
                    </svg>
                </div>
            </Link>
        </div>
    )

}
