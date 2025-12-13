import React from "react";
import { Sidebar } from "./sidebar";

export const Header=()=>{

    return (

        <>
             <div className="w-[87vw]">
                 {/* lg:h-[6.8vw] xl:h-[5.8vw] 2xl:h-[4.6vw] h-22 */}
                        <div className=' bg-white lg:h-[6.8vw] xl:h-[5.8vw] 2xl:h-[4.6vw] py-5'>
                       
                            <div className=' px-4 flex items-center justify-between'>

                                <div className="flex items-center gap-x-40 ps-4 border border-gray-300 rounded-lg ps-4 pe-1 py-2">
                                    <div className="flex gap-x-2">
                                        <img
                                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/pdu2i30t_expires_30_days.png"}
                                            className="size-6"
                                        />
                                        <span className="text-md" >
                                            {"Search here"}
                                        </span>
                                    </div>


                                    <button className="flex bg-blue-500 rounded-lg px-2 lg:py-1 2xl:py-1 items-center gap-x-1 "
                                        onClick={() => alert("Pressed!")}>
                                        <img
                                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/nraalto8_expires_30_days.png"}
                                            className="size-4 "
                                        />
                                        <span className="lg:text-sm xl:text-md 2xl:text-md" >
                                            {"+ K"}
                                        </span>
                                    </button>
                                </div>
                                <div className='flex border border-gray-200 rounded-full items-center gap-x-2 px-2 py-2'>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/z9lfk3u4_expires_30_days.png"}
                                        className="size-8"
                                    />
                                    demo@clarifyme.ai
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/mr5k8zjc_expires_30_days.png"}
                                        className="size-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )

}