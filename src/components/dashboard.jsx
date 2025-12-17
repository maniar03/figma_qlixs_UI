import React from 'react'
import { Sidebar } from './sidebar'

export const Dashboard = () => {

    return (
        <>
            <div className='flex '>
                <div><Sidebar /></div>
                <div>
                    <div className="w-[87vw]">
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
                    {/* <div className='w-full  bg-white h-[4.6vw]'>wfesacdefdfgdfgwdrgfrgfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</div> */}
                    <div className='px-6 grid gap-4'>
                        <div className='pt-4 flex gap-x-2'>
                            <img
                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/fv64nxx8_expires_30_days.png"}
                                className="size-8"
                            />
                            <text className='2xl:text-2xl font-semibold '>
                                Good Morning, Rahul
                            </text>
                            <img
                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/9p1odb1g_expires_30_days.png"}
                                className="size-6"
                            />
                        </div>
                        {/* <div className="bg-blue-100 lg:h-[7vw]  xl:h-[6vw] 2xl:h-[5vw] w-[87vw] mt-4 flex items-center justify-between px-4"> */}
                        <div className="bg-blue-100 w-full lg:w-[96%] xl:w-[98%] 2xl:w-[100%]  flex items-center justify-between px-4 lg:h-[7vw] xl:h-[6vw] 2xl:h-[5vw]">


                            <div className="flex items-center gap-4">
                                <div className='bg-white rounded-lg lg:p-1 xl:p-1 2xl:p-3 flex items-center'>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/6jvs8b50_expires_30_days.png"}
                                        className="h-10 w-10"
                                    />
                                </div>

                                <div className="text-sm lg:text-base font-medium">
                                    Upcoming Integrations are on the way.
                                    Integrate apps that you use to speed up your workflow
                                </div>
                            </div>


                            <div className="flex gap-3">
                                <button className="bg-blue-500 rounded-full text-white lg:px-3 lg:py-2 2xl:px-5 2xl:py-2 text-md">
                                    Coming Soon
                                </button>

                                <button className="rounded-full text-blue-400 border border-blue-400 lg:px-3 lg:xl:py-2  2xl:px-5 2xl:py-2 text-md">
                                    Do It Later
                                </button>
                            </div>

                        </div>

                        <div className='flex gap-x-6 '>

                            <div className='rounded-xl bg-white w-[18vw] h-auto border border-gray-100 px-4 grow'>
                                <div className='flex justify-between  py-4'>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/1df3ipiy_expires_30_days.png"}
                                        className="size-12 "
                                    />
                                    <text className=' bg-gray-100/30 border border-gray-300/80 rounded-lg lg:h-[2vw] 2xl:h-[1.5vw]  text-sm p-2 flex items-center'>Report Overview</text>
                                </div>
                                <div className='text-lg font-semibold  '>EL1 Referee Report</div>
                                <div className='relative flex pt-4 pb-10'>
                                    <div className="column12 z-20 absolute left-8 bg-white rounded-full size-8 border border-gray-200/80">
                                        <div className='flex items-center'>
                                            <img
                                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/jc1zv8kr_expires_30_days.png"}
                                                className="size-4"
                                            />
                                            <span className="text15" >
                                                {"2"}
                                            </span>

                                        </div>

                                    </div>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/46xyf8dp_expires_30_days.png"}
                                        className="z-0 absolute size-8"
                                    />
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/x1msaon0_expires_30_days.png"}
                                        className="z-10 absolute left-4 size-8"
                                    />

                                </div>

                            </div>

                            <div className='rounded-xl bg-white w-[18vw] h-auto border border-gray-100 px-4 grow'>
                                <div className='flex justify-between  py-4'>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/wl6865rp_expires_30_days.png"}
                                        className="size-12"
                                    />
                                    <text className=' bg-gray-100/30 border border-gray-300/80 rounded-lg lg:h-[2vw] 2xl:h-[1.5vw]  text-sm p-2 flex items-center'>Candidate Overview</text>
                                </div>
                                <div className='text-lg font-semibold  '>APS 6 Bulk Interviews</div>
                                <div className='relative flex pt-4 pb-10'>
                                    <div className="column12 z-20 absolute left-8 bg-white rounded-full size-8 border border-gray-200/80">
                                        <div className='flex items-center'>
                                            <img
                                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/jc1zv8kr_expires_30_days.png"}
                                                className="size-4"
                                            />
                                            <span className="text15" >
                                                {"2"}
                                            </span>

                                        </div>

                                    </div>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/46xyf8dp_expires_30_days.png"}
                                        className="z-0 absolute size-8"
                                    />
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/x1msaon0_expires_30_days.png"}
                                        className="z-10 absolute left-4 size-8"
                                    />

                                </div>

                            </div>

                            <div className='rounded-xl bg-white w-[18vw] h-auto border border-gray-100 px-4 grow'>
                                <div className='flex justify-between  py-4'>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/i0iee2at_expires_30_days.png"}
                                        className="size-12"
                                    />
                                    <text className=' bg-gray-100/30 border border-gray-300/80 rounded-lg lg:h-[2vw] 2xl:h-[1.5vw]  text-sm p-2 flex items-center'>Report Overview</text>
                                </div>
                                <div className='text-lg font-semibold  '>Candidate Feedback Template</div>
                                <div className='relative flex pt-4 pb-10'>
                                    <div className="column12 z-20 absolute left-8 bg-white rounded-full size-8 border border-gray-200/80">
                                        <div className='flex items-center'>
                                            <img
                                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/jc1zv8kr_expires_30_days.png"}
                                                className="size-4"
                                            />
                                            <span className="text15" >
                                                {"2"}
                                            </span>

                                        </div>

                                    </div>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/46xyf8dp_expires_30_days.png"}
                                        className="z-0 absolute size-8"
                                    />
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/x1msaon0_expires_30_days.png"}
                                        className="z-10 absolute left-4 size-8"
                                    />

                                </div>

                            </div>

                            <div className='rounded-xl bg-white w-[18vw] h-auto border border-gray-100 px-4 grow'>
                                <div className='flex justify-between  py-4'>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/zf2bz97y_expires_30_days.png"}
                                        className="imagesize-12 bg-black"
                                    />
                                    <text className=' bg-gray-100/30 border border-gray-300/80 rounded-lg lg:h-[2vw] 2xl:h-[1.5vw]  text-sm p-2 flex items-center'>+1% last week</text>
                                </div>
                                <div className='text-lg font-semibold  '>Generic Bulk Interview Questionse</div>
                                <div className='relative flex pt-4 pb-10'>
                                    <div className="column12 z-20 absolute left-8 bg-white rounded-full size-8 border border-gray-200/80">
                                        <div className='flex items-center'>
                                            <img
                                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/jc1zv8kr_expires_30_days.png"}
                                                className="size-4"
                                            />
                                            <span className="text15" >
                                                {"2"}
                                            </span>

                                        </div>

                                    </div>
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/46xyf8dp_expires_30_days.png"}
                                        className="z-0 absolute size-8"
                                    />
                                    <img
                                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/x1msaon0_expires_30_days.png"}
                                        className="z-10 absolute left-4 size-8"
                                    />

                                </div>

                            </div>
                        </div>

                        <div className='flex gap-x-4'>
                            <div className='border-gray-200 bg-white w-[55vw]  rounded-xl border border-gray-300/80   '>
                                <div className='py-6 px-4 flex gap-x-2 items-center justify-between '>
                                    <div className='flex gap-x-2'>
                                        <div className='h-8 w-[0.3vw] bg-blue-500 rounded-full'></div>
                                        <div className='font-bold text-xl text-gray-600'>Recent Summaries</div>
                                    </div>
                                    <button className='border border-gray-200/80 rounded-lg px-2 py-1'>See All</button>
                                </div>

                                <table class="table-fixed w-full  text-left rtl:text-right text-body ">
                                    <thead class="text-body bg-neutral-secondary-soft ">
                                        <tr className="bg-blue-200/20   ">
                                            <th scope="col" class="px-6 py-3 ">
                                                Name
                                            </th>
                                            <th scope="col" class="px-6 py-3 ">
                                                Contacted on
                                            </th>
                                            <th scope="col" class="px-6 py-3 " >
                                                Meeting Title
                                            </th>
                                            <th scope="col" class="px-6 py-3 ">
                                                Key Topic
                                            </th>
                                            <th scope="col" class="px-6 py-3 ">
                                                Summary Link
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y  divide-gray-300 ">

                                        <tr class="bg-neutral-primary ">
                                            <td className="px-6 py-4 flex gap-x-2 items-center  break-all break-all">
                                                <img
                                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/fv64nxx8_expires_30_days.png"}
                                                    className="size-8"
                                                />
                                                Darrell Stewardadssssssssssssssssss
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                2/11/2025
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                product designssdvgsvsfsdddddddddddddddddddddddddascfadacfkjnfjdngvrgvwregvjrdwpogjjoju8 h
                                            </td>
                                            <td className="px-6 py-4  w-[20vw] md:w-[10vw] lg:w-[8vw] xl:w-[vw] min-w-[120px] break-words break-all">
                                                dassa
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                <a href='#'>View Summary</a>
                                            </td>

                                        </tr>

                                        <tr class="bg-neutral-primary">
                                            <td className="px-6 py-4 flex gap-x-2 break-words break-all">
                                                <img
                                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/fv64nxx8_expires_30_days.png"}
                                                    className="size-8"
                                                />
                                                Darrell Stewarddsgvgvgvgvgvgvgvgvgvgvgv
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                2/11/2025
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                product designvgddddddddsdsvvvvvvvvvvvvvv
                                            </td>
                                            <td className="px-6 py-4  w-[20vw] md:w-[10vw] lg:w-[8vw] xl:w-[vw] min-w-[120px] break-words break-all">
                                                dassa
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                <a href='#'>View Summary</a>
                                            </td>

                                        </tr>

                                        <tr class="bg-neutral-primary">
                                            <td className="px-6 py-4 flex gap-x-2 break-all break-all">
                                                <img
                                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/fv64nxx8_expires_30_days.png"}
                                                    className="size-8"
                                                />
                                                Darrell Steward
                                            </td>
                                            <td className="px-6 py-4 break-all break-all">
                                                2/11/2025
                                            </td>
                                            <td className="px-6 py-4 break-all break-all">
                                                product design
                                            </td>
                                            <td className="px-6 py-4  w-[20vw] md:w-[10vw] lg:w-[8vw] xl:w-[vw] min-w-[120px] break-all break-all">
                                                dassa
                                            </td>
                                            <td className="px-6 py-4 break-all break-all">
                                                <a href='#'>View Summary</a>
                                            </td>

                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                            <div className='border-gray-200 bg-white flex-8 rounded-xl border border-gray-300/80'>
                                <div className='py-5 mx-4 flex gap-x-2 items-center justify-between border-b border-gray-300 '>

                                    <div className='font-bold text-xl text-gray-600'>Recent Bookings</div>

                                </div>
                                <div className='flex justify-between pt-3 border-b border-gray-300 mx-4 pb-3'>
                                    <div className='flex gap-x-2 ' >
                                        <div className='h-12 w-[0.2vw] bg-blue-500 rounded-full'></div>
                                        <div>
                                            <div className=''>Interview with Michael Scott</div>
                                            <ul className='text-sm list-disc list-inside opacity-70' >
                                                <li>5 cups chopped Porcini mushrooms</li>

                                            </ul>
                                        </div>

                                    </div>

                                    <div className='flex gap-x-4 items-center justify-between'>

                                        <div className='relative w-12 h-8'>
                                            <img
                                                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/46xyf8dp_expires_30_days.png"
                                                className="absolute left-0 top-0 size-6 z-0"
                                            />
                                            <img
                                                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/x1msaon0_expires_30_days.png"
                                                className="absolute left-3 top-0 size-6 z-10"
                                            />
                                            <img
                                                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/46xyf8dp_expires_30_days.png"
                                                className="absolute left-6 top-0 size-6 z-20"
                                            />
                                        </div>

                                        <div>
                                            <img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-6' />
                                        </div>

                                    </div>


                                </div>

                                <div className='flex justify-between pt-3 border-b border-gray-300 mx-4 pb-3'>
                                    <div className='flex gap-x-2 ' >
                                        <div className='bg-linear-to-b from-blue-200 to-blue-500 h-12 w-[0.2vw] rounded-full'></div>
                                        <div>
                                            <div className=''>Interview with Michael Scott</div>
                                            <ul className='text-sm list-disc list-inside opacity-70' >
                                                <li>5 cups chopped Porcini mushrooms</li>

                                            </ul>
                                        </div>

                                    </div>

                                    <div className='flex gap-x-4 items-center justify-between'>

                                        <div className='relative w-12 h-8'>
                                            <img
                                                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/46xyf8dp_expires_30_days.png"
                                                className="absolute left-0 top-0 size-6 z-0"
                                            />
                                            <img
                                                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/x1msaon0_expires_30_days.png"
                                                className="absolute left-3 top-0 size-6 z-10"
                                            />
                                            <img
                                                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/46xyf8dp_expires_30_days.png"
                                                className="absolute left-6 top-0 size-6 z-20"
                                            />
                                        </div>

                                        <div>
                                            <img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-6' />
                                        </div>

                                    </div>


                                </div>
                            

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}