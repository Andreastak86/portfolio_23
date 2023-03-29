import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

export default function Xp() {
    return (
        <>
            <div>
                <h1 className='my-6'>Erfaringer</h1>
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center gap-2 '>
                        <AiFillHtml5 />
                        <p>God erfaring med HTML</p>
                    </div>
                    <div className='flex flex-row items-center gap-2 '>
                        <SiCss3 />
                        <p>Glad i å style ved hjelp av CSS</p>
                    </div>
                    <div className='flex flex-row items-center gap-2 '>
                        <SiJavascript />
                        <p>God forståelse innen JavaScript</p>
                    </div>
                </div>
            </div>
        </>
    );
}
