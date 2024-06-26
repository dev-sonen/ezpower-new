'use client'

import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function HomeAboutUs ( props: Props ) {

    return (
        <section id='home-about-us' className='bg-white'>
            <div
                className={ `
                    w-auto mx-5 py-10
                    md:w-2/3 md:mx-auto md:py-20
                ` }
            >

                <div className='flex justify-start sm:justify-center'>
                    <div className='grid gap-2'>
                        <h5 className='text-sky-700 text-sm sm:text-base uppercase'>about our company.</h5>
                        <h1 className='text-[#111827] text-2xl sm:text-4xl font-bold'>Energy, Environment and Efficiency</h1>
                    </div>
                </div>

                <div className='my-10'></div> 

                <div className='flex items-center flex-col xl:flex-row space-x-0 xl:space-x-10 space-y-5 xl:space-y-0'>                    
                    <div className='relative h-max w-max'>
                        <div className='h-[320px] w-[320px] sm:w-[480px]'>
                            <Image
                                src='/assets/content/home/ha-01.png'
                                alt='img'
                                style={ {
                                    objectFit: 'cover',
                                    objectPosition: '50% 50'
                                } }
                                priority
                                fill
                            />
                        </div>
                        <div className='absolute inset-0 bg-black/50 h-[320px] w-[320px] sm:w-[480px]'>
                            <button className='flex items-center bg-white border-white text-[#111827] text-sm sm:text-base border-2 font-medium uppercase cursor-pointer rounded-sm m-5 p-3 sm:p-4 w-max transition ease-in-out duration-300 hover:bg-[#111827] hover:border-[#111827] hover:text-white'>
                                <div className='relative'>
                                    <svg
                                        className='h-5 w-5 mr-2 animate-ping'
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='1em'
                                        height='1em'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            fill='currentColor'
                                            d='m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z'
                                        />
                                    </svg>
                                    <svg
                                        className='h-5 w-5 mr-2 absolute top-0'
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='1em'
                                        height='1em'
                                        viewBox='0 0 24 24'
                                    >
                                        <path
                                            fill='currentColor'
                                            d='m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z'
                                        />
                                    </svg>
                                </div>
                                watch our video
                            </button>
                        </div>
                    </div>

                    <div className='block'>
                        <div className='bg-sky-700 h-4 sm:h-5 w-4 sm:w-5 mb-5'></div>
                        <div className='text-sm sm:text-base grid gap-5'>
                            <p className='text-gray-950'>
                                Established on October of 2018, EZ Power by Edge-Systems Engineering Services had humble beginnings and modest resources but also was coming from solid grounds with its founder Engr. Edzel Galguerra, who had progressive 15 years career in design and development of electronics and power systems fro global markets.
                            </p>
                            <p className='text-gray-600'>
                                We are motivated by the belief that the next big impact to the economy will be defined by Energy, Environment and Efficiency on which the company was also founded for.
                            </p>
                        </div>
                        <br />
                        <Link href='/about-us#goals' className='flex items-center bg-[#111827] border-[#111827] text-white text-sm sm:text-base border-2 font-medium uppercase cursor-pointer rounded-sm p-3 sm:p-4 h-max w-max transition ease-in-out duration-300 hover:bg-sky-700 hover:border-sky-700'>
                            <svg
                                className='h-5 w-5 mr-2'
                                xmlns='http://www.w3.org/2000/svg'
                                width='1em'
                                height='1em'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    d='M19 4H6V2H4v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z'
                                    fill='currentColor'
                                />
                            </svg>
                            our goals
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )

}
