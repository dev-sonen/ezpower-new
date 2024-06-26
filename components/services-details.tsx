'use client'

import Image from 'next/image'

import Slider from 'react-slick'

type Props = { 
    params?: any
    searchParams?: any
}

export default function ServicesDetails ( props: Props ) {

    const { params , searchParams } = props

    return (
        <section className='bg-white'>
            <div className={ `
                w-auto mx-5 py-10
                md:w-2/3 md:mx-auto md:py-20
            ` }>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

                    {/* <Slider
                        dots={ false }
                        infinite={ true }
                        autoplay={ true }
                        autoplaySpeed={ 3000 }
                        fade={ true }
                        arrows={ false }
                        speed={ 500 }
                        slidesToShow={ 1 }
                        slidesToScroll={ 1 }
                    >
                        <div>
                            <Image
                                src='/assets/1.png'
                                alt='img'
                                height={ 1080 }
                                width={ 1920 }
                            />
                        </div>
                        <div>
                            <Image
                                src='/assets/2.png'
                                alt='img'
                                height={ 1080 }
                                width={ 1920 }
                            />
                        </div>
                        <div>
                            <Image
                                src='/assets/3.png'
                                alt='img'
                                height={ 1080 }
                                width={ 1920 }
                            />
                        </div>
                        <div>
                            <Image
                                src='/assets/4.png'
                                alt='img'
                                height={ 1080 }
                                width={ 1920 }
                            />
                        </div>
                        <div>
                            <Image
                                src='/assets/5.png'
                                alt='img'
                                height={ 1080 }
                                width={ 1920 }
                            />
                        </div>
                    </Slider> */}

                    <div className='flex items-center'>
                        <div className='block w-full'>
                            <div className='flex flex-col space-y-2'>
                                <h1 className='text-[#111827] text-2xl sm:text-4xl font-bold'>Overview</h1>
                            </div>
                            <br />
                            <div className='bg-sky-700 h-4 sm:h-5 w-4 sm:w-5'></div>
                            <br />
                            <p className='text-gray-950 text-sm sm:text-base'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vitae delectus saepe incidunt, error aspernatur, dolore cupiditate architecto porro explicabo ex, ut dolor atque recusandae repellendus. Praesentium expedita accusamus earum, est, ipsam eveniet voluptate quod repudiandae sapiente iure odio voluptatibus eaque illum illo magni dolorem, optio iusto suscipit cumque voluptas!
                            </p>
                        </div>
                    </div>
                    
                    <div className='flex items-center'>
                        <div className='block w-full'>
                            <div className='flex flex-col space-y-2'>
                                <h5 className='text-sky-700 text-sm font-semibold uppercase'>subtitle here</h5>
                                <h1 className='text-[#111827] text-2xl sm:text-4xl font-bold'>Title here</h1>
                            </div>
                            <br />
                            <div className='bg-sky-700 h-4 sm:h-5 w-4 sm:w-5'></div>
                            <br />
                            <p className='text-gray-950 text-sm sm:text-base'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vitae delectus saepe incidunt, error aspernatur, dolore cupiditate architecto porro explicabo ex, ut dolor atque recusandae repellendus. Praesentium expedita accusamus earum, est, ipsam eveniet voluptate quod repudiandae sapiente iure odio voluptatibus eaque illum illo magni dolorem, optio iusto suscipit cumque voluptas!
                            </p>
                        </div>
                    </div>

                    {/* <Slider
                        dots={ false }
                        infinite={ true }
                        autoplay={ true }
                        autoplaySpeed={ 4000 }
                        fade={ true }
                        arrows={ false }
                        speed={ 500 }
                        slidesToShow={ 1 }
                        slidesToScroll={ 1 }
                    >
                        <div>
                            <Image
                                src='/assets/1.png'
                                alt='img'
                                height={ 1080 }
                                width={ 1920 }
                            />
                        </div>
                        <div>
                            <Image
                                src='/assets/2.png'
                                alt='img'
                                height={ 1080 }
                                width={ 1920 }
                            />
                        </div>
                        <div>
                            <Image
                                src='/assets/3.png'
                                alt='img'
                                height={ 1080 }
                                width={ 1920 }
                            />
                        </div>
                        <div>
                            <Image
                                src='/assets/4.png'
                                alt='img'
                                height={ 1080 }
                                width={ 1920 }
                            />
                        </div>
                        <div>
                            <Image
                                src='/assets/5.png'
                                alt='img'
                                height={ 1080 }
                                width={ 1920 }
                            />
                        </div>
                    </Slider> */}

                </div>

            </div>
        </section>
    )

}
