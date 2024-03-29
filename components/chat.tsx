'use client'

import { useState , useEffect } from 'react'
import { FacebookProvider , CustomChat } from 'react-facebook'

type Props = {}

export default function Chat ( props: Props ) {

    const [ height , setHeight ] = useState <number> ( 0 )
    useEffect( () => window.addEventListener( 'scroll' , () => setHeight( window.scrollY ) ) , [ height ] )

    return (
        <FacebookProvider appId='1102743007119581' chatSupport>
            <CustomChat
                pageId='254352434418146'
                minimized={ false }
            />
        </FacebookProvider>
    )

}
