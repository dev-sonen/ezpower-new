import type { Metadata } from 'next'

import AboutUsBanner from '@/components/about-us-banner'
import AboutUsContent from '@/components/about-us-content'
import Footer from '@/components/footer'

export const metadata: Metadata = {
    title: 'ezpower | about us',
    description: ''
}

type Props = { 
    params?: any
    searchParams?: any
}

export default function Page ( props: Props ) {

    return (
        <div className='w-full'>

            <AboutUsBanner />

            <AboutUsContent />

            <Footer />

        </div>
    )

}
