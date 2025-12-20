import React, { useState } from "react";

// export const Overview = () => {

//     const [selectedDivId, setSelectedDivId] = useState()
//     const [count, setCount] = useState(1)
//     const images = {
//         1: 'templates.jpg', 2: 'summaries.jpg', 3: 'booking.jpg', 4: 'meeting.jpg', 5: 'analytics.jpg'
//     }

//     const handleSelect = (e) => {
//         setSelectedDivId(e.currentTarget.id);
//         console.log(e.currentTarget.id)
//     }

//     const handleNext = () => {
//         setCount(prev => {
//             const newValue = prev < 5 ? prev + 1 : prev;
//             console.log("updated:", newValue);
//             return newValue;
//         });
//     };



//     return (
//         <>
//             {/* <div className=" m-10 sm:m-12 mb-17 lg:m-14 xl:m-25 "> */}
//             <div className="min-h-screen w-full px-6 sm:px-10 lg:px-16 xl:px-20 py-22">

//                 <div className="flex w-31  justify-between">
//                     <img
//                         src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/5yhegyb9_expires_30_days.png"}
//                         className="image size-10"
//                     />
//                     <img
//                         src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/040czdgg_expires_30_days.png"}
//                         className="image2 size-10"
//                     />
//                 </div>
//                 <div className="flex mt-10 justify-between">
//                     <div className=" lg:w-[25vw] xl:w-[29vw]">
//                         <div className="text-2xl lg:text-3xl font-semibold  ">Quick Overview</div>

//                         <div className="text-xl pt-4 w-68 lg:w-[25vw] lg:w-[29vw]">
//                             Select the features you'll use most in your recruitment workflow
//                         </div>

//                         <div className="mt-4 grid gap-y-3">
//                             {/* <div className={`xl:w-[29vw]  xl:h-[4.5vw] bg-white rounded-lg border border-2 ${count == 1 ? 'border-blue-500' : 'border-gray-300/70'} lg:p-2 xl:p-3 relative flex`} id='templates' onClick={handleSelect}>
//                                 <img src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/5yhegyb9_expires_30_days.png"} className="flex-none  xl:h-[2.8vw]" />
//                                 <div className="flex-2 ps-2 flex-wrap">
//                                     <div className="font-medium lg:text-normal xl:text-lg">Templates</div>
//                                     <div className="text text-gray-700 lg:text-md xl:text-lg">Select from pre-made or custome template</div>

//                                 </div>
//                             </div> */}

//                             <div
//                                 className={`w-full h-auto lg:w-[28vw] lg:h-[6vw] xl:w-[29vw] xl:h-[4.5vw] bg-white rounded-lg border border-2 ${count == 1 ? 'border-blue-500' : 'border-gray-300/70'} lg:p-2 xl:p-3 flex items-center gap-3`}
//                                 id="templates"
//                                 onClick={handleSelect}
//                             >

//                                 <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/5yhegyb9_expires_30_days.png" className="h-14 lg:h-[4vw] xl:h-[2.8vw] flex-none"/>

//                                 <div>
//                                     <div className="font-medium text-base lg:text-md xl:text-md 2xl:text-lg">
//                                         Templates
//                                     </div>

//                                     <div className="text-gray-700 text-sm lg:text-md xl:text-md 2xl:text-lg leading-tight">
//                                         Select from pre-made or custom template
//                                     </div>
//                                 </div>
//                             </div>


//                             <div className={`w-full h-auto lg:w-[28vw] lg:h-[6vw] xl:w-[29vw] xl:h-[4.5vw]  bg-white rounded-lg border border-2 ${count == 2 ? 'border-blue-500' : 'border-gray-300/70'} lg:p-2 xl:p-3 flex items-center gap-3`} id='ai' >
//                                 <img src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/5yhegyb9_expires_30_days.png"} className="h-14 lg:h-[4vw] xl:h-[2.8vw] flex-none" />
//                                 <div className="flex-2 ps-2 flex-wrap">
//                                     <div className="font-medium text-base lg:text-lg xl:text-md 2xl:text-lg">AI Summaries</div>
//                                     <div className="text-gray-700 text-sm lg:text-md xl:text-md 2xl:text-lg leading-tight">Access candidate summaries and insights</div>

//                                 </div>
//                             </div>
//                             <div className={`w-full h-auto lg:w-[28vw] lg:h-[6vw] xl:w-[29vw] xl:h-[4.5vw] bg-white rounded-lg border border-2 ${count == 3 ? 'border-blue-500' : 'border-gray-300/70'} lg:p-2 xl:p-3 flex items-center gap-3`} id='booking' >
//                                 <img src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/5yhegyb9_expires_30_days.png"} className="h-14 lg:h-[4vw] xl:h-[2.8vw] flex-none" />
//                                 <div className="flex-2 ps-2 flex-wrap">
//                                     <div className="font-medium text-base lg:text-md xl:text-md 2xl:text-lg">Booking System</div>
//                                     <div className="text-gray-700 text-sm lg:text-md xl:text-md 2xl:text-lg leading-tight">Schedule meeting times with no back-and-forth</div>

//                                 </div>
//                             </div>
//                             <div className={`w-full h-auto lg:w-[28vw] lg:h-[6vw] xl:w-[29vw] xl:h-[4.5vw] bg-white rounded-lg border border-2 ${count == 4 ? 'border-blue-500' : 'border-gray-300/70'} lg:p-2 xl:p-3 flex items-center gap-3`} id='meeting' >
//                                 <img src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/5yhegyb9_expires_30_days.png"} className="h-14 lg:h-[4vw] xl:h-[2.8vw] flex-none" />
//                                 <div className="flex-2 ps-2 flex-wrap">
//                                     <div className="font-medium text-base lg:text-lg xl:text-md 2xl:text-lg">In Person Meeting</div>
//                                     <div className="text-gray-700 text-sm lg:text-md xl:text-md 2xl:text-lg leading-tight">Capture, summarize and conduct all in 1 - spot</div>

//                                 </div>
//                             </div>
//                             <div className={`w-full h-auto lg:w-[28vw] lg:h-[6vw] xl:w-[29vw] xl:h-[4.5vw] bg-white rounded-lg border border-2 ${count == 5 ? 'border-blue-500' : 'border-gray-300/70'} lg:p-2 xl:p-3 flex items-center gap-3`} id='analytics' >
//                                 <img src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/5yhegyb9_expires_30_days.png"} className="h-14 lg:h-[4vw] xl:h-[2.8vw] flex-none" />
//                                 <div className="flex-2 ps-2 flex-wrap">
//                                     <div className="font-medium text-base lg:text-lg xl:text-md 2xl:text-lg">Analytics</div>
//                                     <div className="text-gray-700 text-sm lg:text-md xl:text-md 2xl:text-lg leading-tight">Progress faster and stay updated</div>

//                                 </div>
//                             </div>
//                         </div>

//                         <div className="mt-10 flex justify-between">
//                             <div className="text-gray-500">Step {count} of 5</div>
//                             <div className="flex grip gap-3 text-gray-500">
//                                 <div>Skip</div>
//                                 <div>
//                                     <button className=" bg-blue-500 rounded rounded-full text-white px-4 py-1 text-extrabold text-md " onClick={handleNext}>Next</button>
//                                 </div>
//                             </div>
//                         </div>


//                     </div>

//                     {/* <div className="border relative flex grow-8 justify-center visible ">
//                         <div className="absolute top-0 right-136 bg-blue-600 rotate-3 w-102 h-148 z-10 opacity-85 min-w-60 min-h-90"></div>
//                         <div className="absolute top-6 right-16  bg-purple-500 w-130 h-140 z-0"></div>

//                         <img src="dashboard.png" className="absolute top-11 right-22 h-130 w-200 place-content-center content-center z-20 min-w-100 min-h-50" />
//                     </div> */}


//                     {/* <div className="relative flex justify-center grow md:grow-6 lg:grow-8"> */}
//                     <div className="relative flex justify-center grow md:grow-6 lg:grow-8">
//                         <div className="absolute md:top-[1vw]  xl:top-[0vw] md:right-[36vw] lg:right-[27vw] xl:right-[29vw] bg-blue-600 rotate-3 md:w-[23vw] lg:w-[23vw] xl:w-[19vw] md:h-[54vw] lg:h-[42vw] xl:h-[31vw] z-10 opacity-85 "></div>
//                         <div className="absolute md:top-[3vw]  xl:top-[1.4vw] md:right-[0vw]  lg:right-0 xl:right-[3vw]  bg-purple-500 md:w-[42vw] lg:w-[33vw] xl:w-[30vw] md:h-[51vw] lg:h-[39vw] xl:h-[29vw] z-0"></div>

//                         <img src={images[count]} className="absolute md:top-[4.3vw] xl:top-[2.4vw] md:right-[1.8vw] xl:right-[4vw] md:h-[48vw] lg:h-[36.5vw] xl:h-[27vw] md:w-[54vw] lg:w-[46vw] xl:w-[42vw]  z-20 " />
//                     </div>




//                 </div>

//             </div>
//         </>
//     )

// }




export const Overview = () => {

    const [selectedDivId, setSelectedDivId] = useState()
    const [count, setCount] = useState(1)
    const images = {
        1: 'template2.jpg', 2: 'summary2.jpg', 3: 'booking2.jpg', 4: 'meeting2.jpg', 5: 'analytics2.jpg'
    }

    const handleSelect = (e) => {
        setSelectedDivId(e.currentTarget.id);
        console.log(e.currentTarget.id)
    }

    const handleNext = () => {
        setCount(prev => {
            const newValue = prev < 5 ? prev + 1 : prev;
            console.log("updated:", newValue);
            return newValue;
        });
    };



    return (
        <>
            {/* <div className=" m-10 sm:m-12 mb-17 lg:m-14 xl:m-25 "> */}
            <div className="w-full px-6 sm:px-10 lg:px-10 xl:px-10 py-10">

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
                <div className="flex mt-6 justify-between">
                    <div className=" lg:w-[25vw] xl:w-[29vw]">
                        <div className="text-2xl lg:text-3xl font-semibold  ">Quick Overview</div>

                        <div className="text-xl pt-4 w-68 lg:w-[25vw] lg:w-[29vw] ">
                            Select the features you'll use most in your recruitment workflow
                        </div>

                        <div className="mt-4 grid gap-y-3">
                            {/* <div className={`xl:w-[29vw]  xl:h-[4.5vw] bg-white rounded-lg border border-2 ${count == 1 ? 'border-blue-500' : 'border-gray-300/70'} lg:p-2 xl:p-3 relative flex`} id='templates' onClick={handleSelect}>
                                <img src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/5yhegyb9_expires_30_days.png"} className="flex-none  xl:h-[2.8vw]" />
                                <div className="flex-2 ps-2 flex-wrap">
                                    <div className="font-medium lg:text-normal xl:text-lg">Templates</div>
                                    <div className="text text-gray-700 lg:text-md xl:text-lg">Select from pre-made or custome template</div>

                                </div>
                            </div> */}

                            <div
                                className={`w-full max-w-[2xl] h-auto max-h-[4vw] h-auto lg:w-[28vw] lg:h-[6vw] xl:w-[29vw] xl:h-[4.5vw] bg-white rounded-lg border border-2 ${count == 1 ? 'border-blue-500' : 'border-gray-300/70'} lg:p-2 xl:p-3 flex items-center gap-3`}
                                id="templates"
                                onClick={()=>setCount(1)} 
                            >
                                <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/5yhegyb9_expires_30_days.png" className="h-14 lg:h-[4vw] xl:h-[2.8vw] flex-none" />

                                <div>
                                    <div className="font-medium text-base lg:text-md xl:text-md 2xl:text-lg">
                                        Templates
                                    </div>

                                    <div className="text-gray-700 text-sm lg:text-md xl:text-md 2xl:text-lg leading-tight">
                                        Select from pre-made or custom template
                                    </div>
                                </div>
                            </div>


                            <div className={`w-full max-w-[2xl] h-auto max-h-[4vw]  lg:h-[6vw]  xl:h-[4.5vw]  bg-white rounded-lg border border-2 ${count == 2 ? 'border-blue-500' : 'border-gray-300/70'} lg:p-2 xl:p-3 flex items-center gap-3`} id='ai'  onClick={()=>setCount(2)}>
                                <img src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/5yhegyb9_expires_30_days.png"} className="h-14 lg:h-[4vw] xl:h-[2.8vw] flex-none" />
                                <div className="flex-2 ps-2 flex-wrap">
                                    <div className="font-medium text-base lg:text-lg xl:text-md 2xl:text-lg">AI Summaries</div>
                                    <div className="text-gray-700 text-sm lg:text-md xl:text-md 2xl:text-lg leading-tight">Access candidate summaries and insights</div>

                                </div>
                            </div>
                            <div className={`w-full max-w-[2xl] h-auto max-h-[4vw] h-auto lg:w-[28vw] lg:h-[6vw] xl:w-[29vw] xl:h-[4.5vw] bg-white rounded-lg border border-2 ${count == 3 ? 'border-blue-500' : 'border-gray-300/70'} lg:p-2 xl:p-3 flex items-center gap-3`} id='booking'  onClick={()=>setCount(3)}>
                                <img src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/5yhegyb9_expires_30_days.png"} className="h-14 lg:h-[4vw] xl:h-[2.8vw] flex-none" />
                                <div className="flex-2 ps-2 flex-wrap">
                                    <div className="font-medium text-base lg:text-md xl:text-md 2xl:text-lg">Booking System</div>
                                    <div className="text-gray-700 text-sm lg:text-md xl:text-md 2xl:text-lg leading-tight">Schedule meeting times with no back-and-forth</div>

                                </div>
                            </div>
                            <div className={`w-full max-w-[2xl] h-auto max-h-[4vw] h-auto lg:w-[28vw] lg:h-[6vw] xl:w-[29vw] xl:h-[4.5vw] bg-white rounded-lg border border-2 ${count == 4 ? 'border-blue-500' : 'border-gray-300/70'} lg:p-2 xl:p-3 flex items-center gap-3`} id='meeting'  onClick={()=>setCount(4)}>
                                <img src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/5yhegyb9_expires_30_days.png"} className="h-14 lg:h-[4vw] xl:h-[2.8vw] flex-none" />
                                <div className="flex-2 ps-2 flex-wrap">
                                    <div className="font-medium text-base lg:text-lg xl:text-md 2xl:text-lg">In Person Meeting</div>
                                    <div className="text-gray-700 text-sm lg:text-md xl:text-md 2xl:text-lg leading-tight">Capture, summarize and conduct all in 1 - spot</div>

                                </div>
                            </div>
                            <div className={`w-full max-w-[2xl] h-auto max-h-[4vw] h-auto lg:w-[28vw] lg:h-[6vw] xl:w-[29vw] xl:h-[4.5vw] bg-white rounded-lg border border-2 ${count == 5 ? 'border-blue-500' : 'border-gray-300/70'} lg:p-2 xl:p-3 flex items-center gap-3`} id='analytics'  onClick={()=>setCount(5)}>
                                <img src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/5yhegyb9_expires_30_days.png"} className="h-14 lg:h-[4vw] xl:h-[2.8vw] flex-none" />
                                <div className="flex-2 ps-2 flex-wrap">
                                    <div className="font-medium text-base lg:text-lg xl:text-md 2xl:text-lg">Analytics</div>
                                    <div className="text-gray-700 text-sm lg:text-md xl:text-md 2xl:text-lg leading-tight">Progress faster and stay updated</div>

                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex justify-between">
                            <div className="text-gray-500">Step {count} of 5</div>
                            <div className="flex grip gap-3 text-gray-500">
                                <div>Skip</div>
                                <div>
                                    <button className=" bg-blue-500 rounded rounded-full text-white px-4 py-1 text-extrabold text-md " onClick={handleNext}>Next</button>
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
                        <div className="absolute md:top-[1vw]  xl:top-[0vw] md:right-[36vw] lg:right-[27vw] xl:right-[19vw] bg-blue-600 rotate-3 md:w-[23vw] lg:w-[23vw] xl:w-[19vw] md:h-[54vw] lg:h-[42vw] xl:h-[31vw] z-10 opacity-85 "></div>
                        <div className="absolute md:top-[3vw]  xl:top-[1.4vw] md:right-[0vw]  lg:right-0 xl:right-[3vw]  bg-purple-500 md:w-[32vw] lg:w-[23vw] xl:w-[20vw] md:h-[51vw] lg:h-[39vw] xl:h-[29vw] z-0"></div>

                        <img src={images[count]} className="absolute md:top-[4.3vw] xl:top-[2.4vw] md:right-[1.8vw] xl:right-[4vw] md:h-[48vw] lg:h-[36.5vw] xl:h-[27vw] md:w-[22vw] lg:w-[28vw] xl:w-[32vw]  z-20 " />
                    </div>

             




            </div>

        </div >
        </>
    )

}