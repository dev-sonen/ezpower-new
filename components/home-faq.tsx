'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

type Props = {}

export default function HomeFAQ ( props: Props ) {

    return (
        <section id='faq' className='bg-white'>
            <div
                className={ `
                    w-auto mx-5 py-10
                    md:w-2/3 md:mx-auto md:py-20
                ` }
            >

                <div className='flex justify-center'>
                    <div className='grid gap-2 w-full xl:w-2/3'>
                        <h5 className='text-sky-700 text-center text-sm sm:text-base uppercase'>what our clients usually ask.</h5>
                        <h1 className='text-[#111827] text-center text-2xl sm:text-4xl font-bold'>Frequently Ask Questions</h1>
                    </div>
                </div>

                <br />

                <div className='flex items-center justify-center'>
                    <Accordion type='single' collapsible className='text-sm sm:text-base w-full xl:w-2/3'>
                        <AccordionItem value='item-1'>
                            <AccordionTrigger>Lorem ipsum dolor sit amet?</AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia cum eaque sit doloremque nam laborum dicta illo provident, inventore amet!
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-2'>
                            <AccordionTrigger>Lorem ipsum dolor sit amet?</AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia cum eaque sit doloremque nam laborum dicta illo provident, inventore amet!
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-3'>
                            <AccordionTrigger>Lorem ipsum dolor sit amet?</AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia cum eaque sit doloremque nam laborum dicta illo provident, inventore amet!
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-4'>
                            <AccordionTrigger>Lorem ipsum dolor sit amet?</AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia cum eaque sit doloremque nam laborum dicta illo provident, inventore amet!
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-5'>
                            <AccordionTrigger>Lorem ipsum dolor sit amet?</AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia cum eaque sit doloremque nam laborum dicta illo provident, inventore amet!
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>
        </section>
    )

}
