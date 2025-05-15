import React from 'react'
import Image from "next/image";

export const AboutComponent = () => {
    return (
        <section>
            <div className="container flex border border-amber-400 max-w-[90vw] mx-auto">
                <div className="grid grid-flow-col grid-rows-4 gap-4">
                    <div className='border bg-fuchsia-500'>01</div>
                    <div className='border bg-fuchsia-500'>02</div>
                    <div className='border bg-fuchsia-500'>03</div>
                    <div className='border bg-fuchsia-500'>04</div>
                    <div className='border bg-fuchsia-500'>05</div>
                    <div className='border bg-fuchsia-500'>06</div>
                    <div className='border bg-fuchsia-500'>07</div>
                    <div className='border bg-fuchsia-500'>08</div>
                    <div className='border bg-fuchsia-500'>09</div>
                </div>
            </div>
        </section>
    )
}
