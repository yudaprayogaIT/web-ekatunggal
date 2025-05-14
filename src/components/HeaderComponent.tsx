import Image from 'next/image'
import React from 'react'

function HeaderComponent() {
    return (
        <nav className='w-full h-[70px] flex justify-between items-center text-center cs-border  '>
            <Image src="/img/logo_etm.png" alt="etm-logo" width={50} height={50} className='w-auto px-3 h-[41px]' />
            <ul className='pr-5 flex mt-3 space-x-12 font-bold text-[0.9em] ' style={{ fontFamily: "montserrat" }}>
                <li className='cs-border '>TENTANG KAMI</li>
                <li>PRODUK</li>
                <li>KARIR</li>
            </ul>
        </nav>
    )
}

export default HeaderComponent