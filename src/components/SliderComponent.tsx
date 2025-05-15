import { ClassNames } from "@emotion/react";
import Image from "next/image";
import React from "react";

export default function SliderComponent() {
    return (
        <section className="leading-0">
            {/* <div>
            <Image src="/img/hero.png" alt="gedung_etm" width={1920} height={849} className="w-full h-130" />
            <div className="content" style={{ fontFamily: "montserrat" }}>
                <h2 >APAPUN KEBUTUHANMU, SOLUSINYA, #EKATUNGGAL</h2>
                <a href="https://wa.me/085788837057" className="wa">
                  <div className="button-text p-1">Tanya <span>Vika</span></div>
                  <img src="img/wa.png" alt="logo_wa" />
                </a>
            </div>
        </div>
        <div className='hidden'>
            <Image src="/img/hero.png" alt="gedung_etm" width={1920} height={849} className="w-full h-130" />
            <div className="content" style={{ fontFamily: "montserrat" }}>
                <h2 >APAPUN KEBUTUHANMU, SOLUSINYA, #EKATUNGGAL</h2>
                <a href="https://wa.me/085788837057" className="wa">
                  <div className="button-text p-1">Tanya <span>Vika</span></div>
                  <img src="img/wa.png" alt="logo_wa" />
                </a>
            </div>
        </div>
<div className='hidden'>
            <Image src="/img/hero.png" alt="gedung_etm" width={1920} height={849} className="w-full h-130" />
            <div className="content" style={{ fontFamily: "montserrat" }}>
                <h2 >APAPUN KEBUTUHANMU, SOLUSINYA, #EKATUNGGAL</h2>
                <a href="https://wa.me/085788837057" className="wa">
                  <div className="button-text p-1">Tanya <span>Vika</span></div>
                  <img src="img/wa.png" alt="logo_wa" />
                </a>
            </div>
        </div> */}

            <div className="carousel w-full h-[82vh]" >
                <div className="absolute bottom-[13vh] flex w-full transform justify-center z-20">
                    <a href="#item1" className="btn btn-square w-5 h-1 mx-1"></a>
                    <a href="#item2" className="btn btn-square w-5 h-1 mx-1"></a>
                    <a href="#item3" className="btn btn-square w-5 h-1 mx-1"></a>
                    <a href="#item4" className="btn btn-square w-5 h-1 mx-1"></a>
                </div>
                <div id="item1" className="carousel-item w-full relative overflow-hidden">
                    <Image
                        src="/img/hero.png"
                        alt="gedung_etm"
                        width={1920}
                        height={849}
                        className="w-full h-full"
                    />
                    <div className="content" style={{ fontFamily: "montserrat" }}>
                        <h2 className="w-2xl">APAPUN KEBUTUHANMU, SOLUSINYA, #EKATUNGGAL</h2>
                        <a href="https://wa.me/085788837057" className="wa mt-2.5">
                            <div className="button-text p-1">Tanya <span>Vika</span></div>
                            <img src="img/wa.png" alt="logo_wa" />
                        </a>
                    </div>
                </div>

                <div id="item2" className="carousel-item w-full relative">
                    <Image
                        src="/img/hero2.png"
                        alt="gedung_etm"
                        width={1920}
                        height={849}
                        className="object-cover w-full h-full"
                    />
                    <div className="content" style={{ fontFamily: "montserrat" }}>
                        <h2 className="w-2xl">APAPUN KEBUTUHANMU, SOLUSINYA, #EKATUNGGAL</h2>
                        <a href="https://wa.me/085788837057" className="wa mt-2.5">
                            <div className="button-text p-1">Tanya <span>Vika</span></div>
                            <img src="img/wa.png" alt="logo_wa" />
                        </a>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full relative">
                    <Image
                        src="/img/hero3.png"
                        alt="gedung_etm"
                        width={1920}
                        height={849}
                        className="object-cover w-full h-full"
                    />
                    <div className="content " style={{ fontFamily: "montserrat" }}>
                        <h2 className="w-2xl">APAPUN KEBUTUHANMU, SOLUSINYA, #EKATUNGGAL</h2>
                        <a href="https://wa.me/085788837057" className="wa mt-2.5">
                            <div className="button-text p-1">Tanya <span>Vika</span></div>
                            <img src="img/wa.png" alt="logo_wa" />
                        </a>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full relative">
                    <Image
                        src="/img/hero.png"
                        alt="gedung_etm"
                        width={1920}
                        height={849}
                        className="object-cover w-full h-full"
                    />
                    <div className="content" style={{ fontFamily: "montserrat" }}>
                        <h2 className="w-2xl">APAPUN KEBUTUHANMU, SOLUSINYA, #EKATUNGGAL</h2>
                        <a href="https://wa.me/085788837057" className="wa mt-2.5">
                            <div className="button-text p-1">Tanya <span>Vika</span></div>
                            <img src="img/wa.png" alt="logo_wa" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="floating-icon d-none d-md-flex flex-column">
                <a href="https://wa.me/085788837057">
                    <div>
                        <img src="/img/floating-icon.png" alt="tanya_vika" />
                    </div>
                </a>
            </div>

            <section className="label">
                <div className="label-text">BEKERJA DAN MELAYANI DENGAN SEJUTA HATI</div>
            </section>
        </section>
    );
}
