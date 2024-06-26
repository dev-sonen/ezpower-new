'use client'

import { useState , useEffect } from 'react'
import Link from 'next/link'

type Props = {}

export default function QuickUp ( props: Props ) {

    const [ height , setHeight ] = useState <number> ( 0 )
    useEffect( () => window.addEventListener( 'scroll' , () => setHeight( window.scrollY ) ) , [ height ] )

    // Todo: move this to a better place.

    return (
        <div className={ `fixed bottom-24 w-max h-max transition-all ease-in-out duration-300 ${ height >= 720 ? 'right-9' : '-right-20' }` }>
            <Link href='#top' scroll={ true } className='flex bg-green-500 text-white rounded-md p-1 outline-none cursor-pointer group'>                
                <div className='relative'>
                    <svg
                        className='h-7 w-7 transition ease-in-out duration-300 group-hover:animate-ping'
                        width='1em'
                        height='1em'
                        viewBox='0 0 24 24'
                    >
                        <path
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='m6 15l6-6l6 6'
                        />
                    </svg>
                    <svg
                        className='h-7 w-7 absolute top-0 '
                        width='1em'
                        height='1em'
                        viewBox='0 0 24 24'
                    >
                        <path
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='m6 15l6-6l6 6'
                        />
                    </svg>
                </div>
            </Link>
        </div>
    )

}



