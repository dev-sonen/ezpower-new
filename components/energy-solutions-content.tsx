'use client'

import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function EnergySolutionsContent ( props: Props ) {

    const source: { one: string , two: string , three: string } = {
        one: '/assets/1.png',
        two: '/assets/2.png',
        three: '/assets/3.png'
    }

    return (
        <div className='bg-white'>
            <div className='mx-96 py-20'>

                <div className='flex flex-col space-y-2 w-[720px]'>
                    <h5 className='text-sky-700 text-sm font-semibold uppercase'>subtitle here</h5>
                    <h1 className='text-[#111827] text-4xl font-bold'>Title Here</h1>
                    <p className='text-[#111827] font-medium pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio in quod nobis ab molestias molestiae modi expedita, placeat, cum fuga reprehenderit totam, quaerat aliquid aut ex repellendus aliquam! Eveniet, nihil.</p>
                </div>

                <div className='grid grid-cols-3 gap-10 py-20'>

                    <div className='relative bg-white w-full h-[480px] shadow-black/20 shadow-2xl rounded-sm transition ease-in-out duration-300 group hover:bg-[#111827]'>
                        <div className='h-max overflow-hidden rounded-t-sm'>
                            <Link href={ source.one } className='cursor-pointer'>
                                <Image
                                    className='rounded-t-sm transition ease-in-out duration-300 hover:scale-105'
                                    src={ source.one }
                                    alt='img'
                                    height={ 960 }
                                    width={ 520 }
                                    priority={ true }
                                />
                            </Link>
                        </div>
                        <div className='p-4'>
                            <h5 className='text-[#111827] text-lg font-medium group-hover:text-white'>Commercial and Industrial</h5>
                            <div className='bg-sky-700 h-2 w-2 my-4 group-hover:bg-white'></div>
                            <p className='text-gray-600 text-sm font-medium mb-4 h-44 overflow-y-auto group-hover:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati distinctio blanditiis optio, a ullam perspiciatis veritatis consequatur dolorum voluptates qui id magnam. Dolorum incidunt similique quod porro itaque veritatis ut?</p>
                        </div>
                        <Link href='/energy-solutions/commercial-and-industrial' className='absolute left-4 bottom-4 flex items-center bg-[#111827] text-white text-sm font-medium uppercase cursor-pointer rounded-sm px-5 py-2 w-max transition ease-in-out duration-300 group-hover:bg-white group-hover:text-[#111827] group'>
                            learn more
                            <div className='relative ml-2'>
                                <svg
                                    className='h-4 w-4 group-hover:animate-ping'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1em'
                                    height='1em'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fill='currentColor'
                                        d='m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z'
                                    />
                                </svg>
                                <svg
                                    className='h-4 w-4 absolute top-0'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1em'
                                    height='1em'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fill='currentColor'
                                        d='m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z'
                                    />
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <div className='relative bg-white w-full h-[480px] shadow-black/20 shadow-2xl rounded-sm transition ease-in-out duration-300 group hover:bg-[#111827]'>
                        <div className='h-max overflow-hidden rounded-t-sm'>
                            <Link href={ source.two } className='cursor-pointer'>
                                <Image
                                    className='rounded-t-sm transition ease-in-out duration-300 hover:scale-105'
                                    src={ source.two }
                                    alt='img'
                                    height={ 960 }
                                    width={ 520 }
                                    priority={ true }
                                />
                            </Link>
                        </div>
                        <div className='p-4'>
                            <h5 className='text-[#111827] text-lg font-medium group-hover:text-white'>Home Solutions</h5>
                            <div className='bg-sky-700 h-2 w-2 my-4 group-hover:bg-white'></div>
                            <p className='text-gray-600 text-sm font-medium mb-4 h-44 overflow-y-auto group-hover:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati distinctio blanditiis optio, a ullam perspiciatis veritatis consequatur dolorum voluptates qui id magnam. Dolorum incidunt similique quod porro itaque veritatis ut?</p>
                        </div>
                        <Link href='/energy-solutions/home-solutions' className='absolute left-4 bottom-4 flex items-center bg-[#111827] text-white text-sm font-medium uppercase cursor-pointer rounded-sm px-5 py-2 w-max transition ease-in-out duration-300 group-hover:bg-white group-hover:text-[#111827] group'>
                            learn more
                            <div className='relative ml-2'>
                                <svg
                                    className='h-4 w-4 group-hover:animate-ping'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1em'
                                    height='1em'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fill='currentColor'
                                        d='m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z'
                                    />
                                </svg>
                                <svg
                                    className='h-4 w-4 absolute top-0'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1em'
                                    height='1em'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fill='currentColor'
                                        d='m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z'
                                    />
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <div className='relative bg-white w-full h-[480px] shadow-black/20 shadow-2xl rounded-sm transition ease-in-out duration-300 group hover:bg-[#111827]'>
                        <div className='h-max overflow-hidden rounded-t-sm'>
                            <Link href={ source.three } className='cursor-pointer'>
                                <Image
                                    className='rounded-t-sm transition ease-in-out duration-300 hover:scale-105'
                                    src={ source.three }
                                    alt='img'
                                    height={ 960 }
                                    width={ 520 }
                                    priority={ true }
                                />
                            </Link>
                        </div>
                        <div className='p-4'>
                            <h5 className='text-[#111827] text-lg font-medium group-hover:text-white'>Community Development</h5>
                            <div className='bg-sky-700 h-2 w-2 my-4 group-hover:bg-white'></div>
                            <p className='text-gray-600 text-sm font-medium mb-4 h-44 overflow-y-auto group-hover:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati distinctio blanditiis optio, a ullam perspiciatis veritatis consequatur dolorum voluptates qui id magnam. Dolorum incidunt similique quod porro itaque veritatis ut?</p>
                        </div>
                        <Link href='/energy-solutions/community-development' className='absolute left-4 bottom-4 flex items-center bg-[#111827] text-white text-sm font-medium uppercase cursor-pointer rounded-sm px-5 py-2 w-max transition ease-in-out duration-300 group-hover:bg-white group-hover:text-[#111827] group'>
                            learn more
                            <div className='relative ml-2'>
                                <svg
                                    className='h-4 w-4 group-hover:animate-ping'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1em'
                                    height='1em'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fill='currentColor'
                                        d='m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z'
                                    />
                                </svg>
                                <svg
                                    className='h-4 w-4 absolute top-0'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='1em'
                                    height='1em'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fill='currentColor'
                                        d='m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z'
                                    />
                                </svg>
                            </div>
                        </Link>
                    </div>


                </div>

            </div>
        </div>
    )

}