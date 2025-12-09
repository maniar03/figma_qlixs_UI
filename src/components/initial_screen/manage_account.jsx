import React, { useState } from "react";

export const ManageAccount = () => {

   



    return (
        <>
            {/* <div className=" m-10 sm:m-12 mb-17 lg:m-14 xl:m-25 "> */}
            <div className="min-h-screen w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-22">
                <div className="flex w-31  justify-between">
                    <img
                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/5yhegyb9_expires_30_days.png"}
                        className="image size-10"
                    />
                    <img
                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/040czdgg_expires_30_days.png"}
                        className="image2 size-10"
                    />
                </div>
                <div className=" size-full flex mt-10 justify-between  ">
                    <div className=" xl:h-scren lg:w-[25vw] xl:w-[29vw] grid items-center">
                        <div className="text-2xl  lg:text-3xl font-semibold ">Quick Overview</div>
                        <div className="mt-4 ">
                          <div className={`w-full h-auto lg:w-[28vw] lg:h-[6vw] xl:w-[29vw] xl:h-[4.5vw]  bg-white rounded-lg border border-2 border-gray-300/70 lg:p-2 xl:p-3 flex items-center gap-3`} id='ai' >
                                <img src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/5yhegyb9_expires_30_days.png"} className="h-14 lg:h-[4vw] xl:h-[2.8vw] flex-none" />
                                <div className="flex-2 ps-2 flex-wrap">
                                    <div className="font-medium text-base lg:text-lg xl:text-md 2xl:text-lg">AI Summaries</div>
                                    <div className="text-gray-700 text-sm lg:text-md xl:text-md 2xl:text-lg leading-tight">Access candidate summaries and insights</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="border relative flex grow-8 justify-center visible ">
                        <div className="absolute top-0 right-136 bg-blue-600 rotate-3 w-102 h-148 z-10 opacity-85 min-w-60 min-h-90"></div>
                        <div className="absolute top-6 right-16  bg-purple-500 w-130 h-140 z-0"></div>

                        <img src="dashboard.png" className="absolute top-11 right-22 h-130 w-200 place-content-center content-center z-20 min-w-100 min-h-50" />
                    </div> */}


                    {/* <div className="relative flex justify-center grow md:grow-6 lg:grow-8"> */}
                    <div className="relative flex justify-center grow md:grow-6 lg:grow-8">
                        <div className="absolute md:top-[1vw]  xl:top-[0vw] md:right-[36vw] lg:right-[27vw] xl:right-[29vw] bg-blue-600 rotate-3 md:w-[23vw] lg:w-[23vw] xl:w-[19vw] md:h-[54vw] lg:h-[42vw] xl:h-[31vw] z-10 opacity-85 "></div>
                        <div className="absolute md:top-[3vw]  xl:top-[1.4vw] md:right-[0vw]  lg:right-0 xl:right-[3vw]  bg-purple-500 md:w-[42vw] lg:w-[33vw] xl:w-[30vw] md:h-[51vw] lg:h-[39vw] xl:h-[29vw] z-0"></div>

                        <img src="dashboard.png" className="absolute md:top-[4.3vw] xl:top-[2.4vw] md:right-[1.8vw] xl:right-[4vw] md:h-[48vw] lg:h-[36.5vw] xl:h-[27vw] md:w-[54vw] lg:w-[46vw] xl:w-[42vw]  z-20 " />
                    </div>




                </div>

            </div>
        </>
    )

}