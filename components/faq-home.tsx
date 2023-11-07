'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

type Props = {}

export default function FAQHome ( props: Props ) {

    return (
        <div id='faq' className='bg-white h-max py-40'>
            <div className='mx-96'>
                
                <div className='flex items-center justify-center w-full pb-10'>
                    <div className='flex flex-col space-y-2 w-[720px]'>
                        <h1 className='text-[#111827] text-4xl text-center font-bold'>Frequently Ask Questions</h1>
                    </div>
                </div>

                <div className='flex items-center justify-center w-full'>
                    <Accordion type='single' collapsible className='w-3/4'>
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
        </div>
    )

}