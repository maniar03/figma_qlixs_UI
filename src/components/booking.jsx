import React, { useState,useEffect } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Button, Checkbox, Label, TextInput, Select, FileInput, ToggleSwitch, Radio } from "flowbite-react";
// import { ZoomMtg } from '@zoomus/websdk'




export const Booking = () => {


    const [selected, setSelected] = useState();
    const [switch2, setSwitch2] = useState({
        'Monday': false,
        'Tuesday': false,
        'Wednesday': false,
        'Thursday': false,
        'Friday': false,
        'Saturday': false,
        'Sunday': false,

    });
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const [openModal, setOpenModal] = useState(false);
    const [zoom,setZoom]=useState(false)

//     useEffect(()=>{
//         // Loads WebAssembly (Wasm) assets and prepares the SDK
// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareWebSDK();

// // Loads language files (optional, but recommended)
// ZoomMtg.i18n.load('en-US');
// ZoomMtg.i18n.reload('en-US');

// // Set the path for the dependent library assets
// // Replace {VERSION_NUMBER} with the latest version (e.g., 2.19.0)
// ZoomMtg.setZoomJSLib('https://source.zoom.us/2.19.0/lib', '/av');
//     },[zoom])

    return (
        <>
            <div className='flex '>
                <div><Sidebar /></div>
                <div className="pb-8">
                    <div><Header /></div>

                    <div className="px-6 py-4">
                        <div className="flex  justify-between items-center">
                            <div>
                                <div className="font-bold text-xl ">automated Booking System</div>
                                <div className="text-md">Manage and review all your scheduled appointsments.</div>
                            </div>
                            <button className=" bg-blue-500 rounded rounded-full text-white  text-extrabold text-2xl px-6 py-2">Manage Time Slot</button>


                        </div>

                        <div className="pt-4 flex gap-x-6">
                            <div className="p-4 bg-white rounded-xl  w-fit border border-slate-200/80">
                                <DayPicker
                                    mode="single"
                                    selected={selected}
                                    onSelect={setSelected}
                                    className="rounded-lg"
                                />
                                {selected && (
                                    <p className="mt-3 text-sm text-gray-600">
                                        Selected: {selected.toDateString()}
                                    </p>
                                )}
                            </div>

                            <div className="w-full border border-slate-200/80 bg-white px-6 py-4 rounded-xl">
                                {[0, 1, 2, 3, 4, 5, 6].map((_, index) => (
                                    <div className=" grid grid-cols-5 gap-6 my-2 ">
                                        <div>{days[index]}</div>
                                        <div>
                                            <Label className="text-xl pe-4">{switch2[days[index]] == true ? `open` : `close`}</Label>
                                            <label class="inline-flex items-center cursor-pointer">
                                                <input type="checkbox" value={days[index]} name={days[index]} className="sr-only peer " checked={switch2[days[index]]} onChange={() => setSwitch2(prev => ({
                                                    ...prev,
                                                    [days[index]]: !prev[days[index]],
                                                }))}
                                                />

                                                <div
                                                    class="relative w-9 h-5 bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-300
                                                   rounded-full peer peer-checked:after:translate-x-full
                                                   after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                                                   after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all
                                                   peer-checked:bg-blue-600" value={days[index]} name={days[index]}>
                                                </div>


                                            </label>
                                        </div>
                                        <button className="border border-slate-200/80 px-4 py-2 rounded-xl ">09:00 PM</button>
                                        <button className="border border-slate-200/80 px-4 py-2 rounded-xl">09:00 PM</button>
                                        <button className="border border-slate-200/80 px-4 py-2 rounded-xl">09:00 PM</button>
                                    </div>

                                ))}
                            </div>



                        </div>

                        <div className=' pt-4'>
                            <div className='border-gray-200 bg-white w-full   rounded-xl border border-gray-300/80   '>
                                <div className='py-6 px-4 flex gap-x-2 items-center justify-between '>
                                    <div className='flex gap-x-2'>
                                        <div className='h-8 w-[0.3vw] bg-blue-500 rounded-full'></div>
                                        <div className='font-bold text-xl text-gray-600'>Recent Summaries</div>
                                    </div>
                                    <div className="flex gap-x-4">
                                        <div className="flex items-center justify-between gap-x-40 ps-4 border border-gray-300 rounded-lg ps-4 pe-1 py-2 grow-4 bg-gray-100/50">
                                            <div className="flex gap-x-2">
                                                <img
                                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/pdu2i30t_expires_30_days.png"}
                                                    className="size-6"
                                                />

                                                <span className="text-md" >
                                                    Search hear
                                                </span>
                                            </div>
                                            <button className="flex  bg-blue-500 rounded-lg px-2 lg:py-1 2xl:py-1 items-center gap-x-1 "
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


                                        <select name="" id="" className="grow-1 border border-gray-300 rounded-lg px-2 bg-gray-100/50">
                                            <option>Sort by Date</option>
                                        </select>

                                        <select name="" id="" className="grow-1 border border-gray-300 rounded-lg px-2 bg-gray-100/50">
                                            <option>Filter by Date</option>
                                        </select>

                                        <button className=" bg-blue-500 rounded rounded-full text-white px-4  flex items-center gap-2 ">
                                            {/* <div className="text-4xl">
                                                +
                                            </div> */}
                                            <button className="text-xl py-2" onClick={() => setOpenModal(true)}><span className=" flex-inline items-center">+</span> New Appointment</button>
                                        </button>

                                    </div>

                                </div>

                                <table class="table-fixed w-full  text-left rtl:text-right text-body ">
                                    <thead class="text-body bg-neutral-secondary-soft ">
                                        <tr className="bg-blue-200/20  text-gray-700 text-lg ">
                                            <th scope="col" class="px-6 py-3 ">
                                                Candidate
                                            </th>
                                            <th scope="col" class="px-6 py-3 ">
                                                Job Title
                                            </th>
                                            <th scope="col" class="px-6 py-3 " >
                                                Date & Time
                                            </th>
                                            <th scope="col" class="px-6 py-3 ">
                                                Screening Time
                                            </th>
                                            <th scope="col" class="px-6 py-3 ">
                                                Status
                                            </th>
                                            <th scope="col" class="px-6 py-3 ">
                                                Meeting Link
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
                                                Rahul Rao
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                UI/UX Engineer
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                Nov 5, 2025
                                            </td>
                                            <td className="px-6 py-4  w-[20vw] md:w-[10vw] lg:w-[8vw] xl:w-[vw] min-w-[120px] break-words break-all">
                                                In-Person
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                <span className="text-white bg-emerald-600 rounded-full px-4 py-2 font-medium ">Confirmed</span>
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                <a href='#' className="border border-slate-200/80 bg-gray-100/50 px-2 py-2 text-gray-700 font-semibold rounded-lg">Join Meeting</a>
                                            </td>

                                        </tr>

                                        <tr class="bg-neutral-primary ">
                                            <td className="px-6 py-4 flex gap-x-2 items-center  break-all break-all">
                                                <img
                                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/fv64nxx8_expires_30_days.png"}
                                                    className="size-8"
                                                />
                                                Rahul Rao
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                UI/UX Engineer
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                Nov 5, 2025
                                            </td>
                                            <td className="px-6 py-4  w-[20vw] md:w-[10vw] lg:w-[8vw] xl:w-[vw] min-w-[120px] break-words break-all">
                                                In-Person
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                <span className="text-white bg-amber-600 rounded-full px-4 py-2 font-medium ">Pending</span>
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                <a href='#' className="border border-slate-200/80 bg-gray-100/50 px-2 py-2 text-gray-700 font-semibold rounded-lg">Join Meeting</a>
                                            </td>

                                        </tr>

                                        <tr class="bg-neutral-primary ">
                                            <td className="px-6 py-4 flex gap-x-2 items-center  break-all break-all">
                                                <img
                                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/fv64nxx8_expires_30_days.png"}
                                                    className="size-8"
                                                />
                                                Rahul Rao
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                UI/UX Engineer
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                Nov 5, 2025
                                            </td>
                                            <td className="px-6 py-4  w-[20vw] md:w-[10vw] lg:w-[8vw] xl:w-[vw] min-w-[120px] break-words break-all">
                                                In-Person
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                <span className="text-white bg-red-600 rounded-full px-4 py-2 font-medium ">Cancelled</span>
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                <a href='#' className="border border-slate-200/80 bg-gray-100/50 px-2 py-2 text-gray-700 font-semibold rounded-lg">Join Meeting</a>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>

                    {openModal && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                            aria-hidden="true"
                        >
                            <div className="relative w-full max-w-6xl h-[84vh] p-4 mx-10 ">
                                <div className="flex flex-col h-full bg-white rounded-lg shadow-lg  ">

                                    {/* Header */}
                                    <div className="flex items-center justify-between border-b  border-slate-200/80">
                                        <div className="text-2xl font-bold text-gray-900 p-6 ">
                                            Create new appointment
                                            <div className="text-gray-500 text-lg font-normal">An email will be sent to the candidate's email</div>
                                        </div>

                                        <button
                                            onClick={() => setOpenModal(false)}
                                            className="w-9 h-9 flex items-center justify-center rounded border-2 rounded-full mx-12"
                                        >
                                            ✕
                                        </button>
                                    </div>

                                    {/* Body */}
                                    <div className="flex-1 overflow-y-auto px-12  py-4 space-y-4">
                                        <form>
                                            <div className="py-2">
                                                <div className="font-semibold text-lg">Candidate Name</div>
                                                <input type="text" placeholder="Candidate Name" className="border-2 w-full h-18 mt-2 px-4 rounded-xl border-slate-300/80 bg-zinc-100/50 font-medium text-md" />
                                            </div>
                                            <div className="py-2">
                                                <div className="font-semibold text-lg">Candidate Email</div>
                                                <input type="text" placeholder="Candidate Email" className="border-2 w-full h-18 mt-2 px-4 rounded-xl border-slate-300/80 bg-zinc-100/50 font-medium text-md" />
                                            </div>
                                            <div className="py-2">
                                                <div className="font-semibold text-lg">Job Title</div>
                                                <input type="text" placeholder="Job Title" className="border-2 w-full h-18 mt-2 px-4 rounded-xl border-slate-300/80 bg-zinc-100/50 font-medium text-md" />
                                            </div>
                                            <div className="py-2 flex gap-x-6">
                                                <div className="w-full">
                                                    <div className="font-semibold text-lg">Screen Type</div>
                                                    <select placeholder="Job Title" className="border-2 w-full h-18 mt-2 px-4 rounded-xl border-slate-300/80 bg-zinc-100/50 font-medium text-md" >
                                                        <option >Telephon</option>
                                                        <option>Interview</option>
                                                    </select>
                                                </div>
                                                <div className="w-full">
                                                    <div className="font-semibold text-lg">Meeting Platform</div>
                                                    <select placeholder="Job Title" className="border-2 w-full h-18 mt-2 px-4 rounded-xl border-slate-300/80 bg-zinc-100/50 font-medium text-md" >
                                                        <option     >Zoom</option>
                                                        <option>Microsoft Teams</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center p-2 mt-auto bg-white rounded-full gap-18 pt-6">
                                                <div className="">
                                                    <div className="text-xl font-semibold text-amber-500">Zoom is not connected.<a className="text-xl font-semibold text-blue-500" onClick={()=>setZoom(true)}> Connect now.</a></div>
                                                    <div className="text-xl">For this integration, you'll need a Microsoft 356 Business or office 365 Education account.</div>
                                                </div>
                                                <div className="flex gap-x-6 ">
                                                    <button className=" bg-white text-blue-500 border border-blue-500 rounded rounded-full py-4 px-6 h-full w-full font-semibold  text-xl">Cancel</button>
                                                    <button className=" bg-blue-500 rounded rounded-full text-white py-4 px-6 h-full w-full font-semibold  text-xl">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    {/* Footer */}
                                    {/* <div className="flex justify-end gap-3 border-t pt-4 border-slate-200/80 p-6 ">

                                        <button
                                            className="px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
                                            onClick={() => setOpenModal(false)}
                                        >
                                            I accept
                                        </button>
                                        <button
                                            className="px-4 py-2 text-sm rounded bg-gray-100 hover:bg-gray-200"
                                            onClick={() => setOpenModal(false)}
                                        >
                                            Decline
                                        </button>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}