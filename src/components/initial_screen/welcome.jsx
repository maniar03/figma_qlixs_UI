import React from "react";

export const Welcome = () => {

    return (
        <>
            {/* <div className="m-10 sm:m-12 mb-17 lg:m-14 xl:m-25  "> */}
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
                <div className="flex mt-18 justify-between">
                    <div className=" lg:w-[25vw]">
                        <div className="text-3xl lg:text-4xl font-semibold  ">Welcome to Qlixs</div>

                        <div className="text-2xl pt-4 w-68 lg:w-[25vw]">
                            Your smarter, faster way to recruit - all in one workspace
                        </div>
                        <button className="mt-9 bg-blue-500 rounded rounded-full text-white w-30 lg:w-38 h-12 lg:h-12 text-extrabold text-md lg:text-xl">Get Started</button>

                        {/* <div className=" border flex-row lg:flex-col xl:flex-col mt-16  lg:justify-between xl:lg:justify-between lg:w-[25vw] ">

                            <button className="outline outline-blue-500 outline-2 outline-offset-2 bg-blue-100 text-blue-500 rounded-full h-[2.4vw] text-lg font-medium px-6 py-2 pb-2 me-8 md:mb-6 ">Install Chrom Extension</button>
                            <button className="outline outline-blue-500 outline-2 outline-offset-2 bg-blue-100 text-blue-500 rounded-full h-[2.4vw] text-lg font-medium px-6 py-2 pb-2   ">Install Mobile App</button>
                        </div> */}

                        <div className="flex  gap-4  mt-16">
                            <button className=" w-full lg:w-auto
        h-10  md:h-12 lg:h-14  px-6 outline outline-blue-500 outline-2 outline-offset-2 bg-blue-100 text-blue-500 rounded-full text-lg font-medium md:text-sm xl:text-md 2xl:text-lg lg:text-sm ">
                                Install Chrome Extension
                            </button>

                            <button className=" w-full lg:w-auto
        h-10 md:h-12 lg:h-14  px-6 outline outline-blue-500 outline-2 outline-offset-2 bg-blue-100 text-blue-500 rounded-full text-lg font-medium md:text-sm xl:text-md 2xl:text-lg lg:text-sm">
                                Install Mobile App
                            </button>
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