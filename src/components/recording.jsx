import React, { useState, useRef, useEffect } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";
import WaveSurfer from "wavesurfer.js";


export const Recording = () => {

    const [personRec, setPersonRec] = useState(false)
    const [StartRec, setStartRec] = useState(false)
    const [meetingRec, setMeetingRec] = useState(false)




    const waveformRef = useRef(null);
    const waveSurfer = useRef(null);

    const [audioURL, setAudioURL] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const mediaRecorderRef = useRef(null);
    const chunksRef = useRef([]);

    // Initialize WaveSurfer
    useEffect(() => {
        if (!waveformRef.current) return;

        waveSurfer.current = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: "#c7d2fe",
            progressColor: "#4f46e5",
            cursorColor: "#1e3a8a",
            height: 80,
            barWidth: 3,
            responsive: true,
        });

        return () => waveSurfer.current?.destroy();
    }, []);

    // Load audio after recording
    useEffect(() => {
        if (audioURL && waveSurfer.current) {
            waveSurfer.current.load(audioURL);
        }
    }, [audioURL]);

    // Start Recording
    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);

        chunksRef.current = [];
        mediaRecorderRef.current.ondataavailable = (e) =>
            chunksRef.current.push(e.data);

        mediaRecorderRef.current.onstop = () => {
            const blob = new Blob(chunksRef.current, { type: "audio/webm" });
            setAudioURL(URL.createObjectURL(blob));
        };

        mediaRecorderRef.current.start();
    };

    // Stop Recording
    const stopRecording = () => {
        mediaRecorderRef.current.stop();
    };

    // Play / Pause
    const togglePlay = () => {
        waveSurfer.current.playPause();
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <div className='flex '>
                <div><Sidebar /></div>
                <div className="pb-8">
                    <div><Header /></div>

                    <div className="px-6 py-4">
                        <div className='flex gap-x-4'>
                            <div className='border-gray-200 bg-white w-[55vw]  rounded-xl border-2 border-gray-300/80   '>
                                <div className='py-6 px-4 flex gap-x-2 items-center justify-between '>
                                    <div className='flex gap-x-2'>
                                        <div className='h-8 w-[0.3vw] bg-blue-500 rounded-full'></div>
                                        <div className='font-bold text-xl text-gray-600'>Person Recording</div>
                                    </div>
                                    <button className="text-xl py-2 bg-blue-500 rounded rounded-full text-white px-4  " onClick={() => setPersonRec(true)}><span className=" flex-inline items-center">+</span> New Person Recording</button>
                                </div>
                                <div className="flex px-6 pb-6 gap-x-6">
                                    <div className="flex items-center justify-between gap-x-40 ps-4 border border-gray-300 rounded-lg ps-4 pe-1 py-2 grow-4 bg-gray-100/50 me-8">
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
                                        <option>Date Range</option>
                                    </select>

                                    <select name="" id="" className="grow-1 border border-gray-300 rounded-lg px-2 bg-gray-100/50">
                                        <option>Category</option>
                                    </select>

                                    <select name="" id="" className="grow-1 border border-gray-300 rounded-lg px-2 bg-gray-100/50">
                                        <option>Duration</option>
                                    </select>
                                </div>

                                <table class="table-fixed w-full  text-left rtl:text-right text-body ">
                                    <thead class="text-body bg-neutral-secondary-soft ">
                                        <tr className="bg-gray-100/50   ">
                                            <th scope="col" class="px-6 py-3 ">
                                                Recording Title
                                            </th>
                                            <th scope="col" class="px-6 py-3 ">
                                                Duration
                                            </th>
                                            <th scope="col" class="px-6 py-3 " >
                                                Created on
                                            </th>
                                            <th scope="col" class="px-6 py-3 ">
                                                Category
                                            </th>
                                            <th scope="col" class="px-6 py-3 ">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y  divide-gray-300 ">

                                        <tr class="bg-neutral-primary ">
                                            <td className="px-6 py-4 flex gap-x-2 items-center  break-all break-all">
                                                Developers Team
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                12:45
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                Nov 7,2025
                                            </td>
                                            <td className="px-6 py-4  w-[20vw] md:w-[10vw] lg:w-[8vw] xl:w-[vw] min-w-[120px] break-words break-all">
                                                Discussion
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">

                                                <Dropdown className="rounded-xl" label={<img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-8' />}>
                                                    <DropdownItem className='text-md  font-semibold'>Play Preview</DropdownItem>
                                                    <DropdownDivider />
                                                    <DropdownItem className='text-md  font-semibold'>Edit Tags/Title</DropdownItem>
                                                    <DropdownDivider />
                                                    <DropdownItem className='text-md text-red-500 font-semibold'>Delete Recording</DropdownItem>
                                                    <DropdownDivider />

                                                </Dropdown>

                                            </td>

                                        </tr>

                                        <tr class="bg-neutral-primary ">
                                            <td className="px-6 py-4 flex gap-x-2 items-center  break-all break-all">
                                                Developers Team
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                12:45
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                Nov 7,2025
                                            </td>
                                            <td className="px-6 py-4  w-[20vw] md:w-[10vw] lg:w-[8vw] xl:w-[vw] min-w-[120px] break-words break-all">
                                                Discussion
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">

                                                <Dropdown className="rounded-xl" label={<img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-8' />}>
                                                    <DropdownItem className='text-md  font-semibold'>Play Preview</DropdownItem>
                                                    <DropdownDivider />
                                                    <DropdownItem className='text-md  font-semibold'>Edit Tags/Title</DropdownItem>
                                                    <DropdownDivider />
                                                    <DropdownItem className='text-md text-red-500 font-semibold'>Delete Recording</DropdownItem>
                                                    <DropdownDivider />

                                                </Dropdown>

                                            </td>

                                        </tr>

                                        <tr class="bg-neutral-primary ">
                                            <td className="px-6 py-4 flex gap-x-2 items-center  break-all break-all">
                                                Developers Team
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                12:45
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">
                                                Nov 7,2025
                                            </td>
                                            <td className="px-6 py-4  w-[20vw] md:w-[10vw] lg:w-[8vw] xl:w-[vw] min-w-[120px] break-words break-all">
                                                Discussion
                                            </td>
                                            <td className="px-6 py-4 break-words break-all">

                                                <Dropdown className="rounded-xl" label={<img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-8' />}>
                                                    <DropdownItem className='text-md  font-semibold'>Play Preview</DropdownItem>
                                                    <DropdownDivider />
                                                    <DropdownItem className='text-md  font-semibold'>Edit Tags/Title</DropdownItem>
                                                    <DropdownDivider />
                                                    <DropdownItem className='text-md text-red-500 font-semibold'>Delete Recording</DropdownItem>
                                                    <DropdownDivider />

                                                </Dropdown>


                                            </td>

                                        </tr>



                                    </tbody>
                                </table>
                            </div>


                            <div className='border-gray-200 bg-white flex-8 rounded-xl border-2 border-gray-300/80  px-4 py-4'>
                                <div className='pb-6 mx-4 flex gap-x-2 items-center justify-between '>

                                    <div className='font-bold text-xl text-gray-600'>Recording History</div>
                                    <button className='border-2 border-gray-200/80 bg-gray-100/40 rounded-lg px-2 py-1'>Filter</button>

                                </div>
                                <div className="px-6">

                                    <div className="flex gap-x-4 pb-4">
                                        <img
                                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/fv64nxx8_expires_30_days.png"}
                                            className="size-12"
                                        />
                                        <div className="rounded-xl bg-neutral-100/50  w-full px-4 py-4">
                                            <div className="flex justify-between items-center">
                                                <div className="font-bold">
                                                    Marry D.
                                                </div>
                                                <div className=" text-gray-500">10:45</div>
                                            </div>
                                            <div className="pt-2 text-gray-500">Great! How do you approach visual design? I'm always fascinated by impressive graphics & effects.</div>

                                        </div>

                                    </div>

                                    <div className="flex gap-x-4 pb-4">
                                        <img
                                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/fv64nxx8_expires_30_days.png"}
                                            className="size-12"
                                        />
                                        <div className="rounded-xl bg-neutral-100/50   w-full px-4 py-4">
                                            <div className="flex justify-between items-center">
                                                <div className="font-bold">
                                                    Marry D.
                                                </div>
                                                <div className=" text-gray-500">10:45</div>
                                            </div>
                                            <div className="pt-2 text-gray-500">Great! How do you approach visual design? I'm always fascinated by impressive graphics & effects.</div>

                                        </div>

                                    </div>

                                    <div className="flex gap-x-4 pb-4">
                                        <img
                                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/fv64nxx8_expires_30_days.png"}
                                            className="size-12"
                                        />
                                        <div className="rounded-xl bg-neutral-100/50   w-full px-4 py-4">
                                            <div className="flex justify-between items-center">
                                                <div className="font-bold">
                                                    Marry D.
                                                </div>
                                                <div className=" text-gray-500">10:45</div>
                                            </div>
                                            <div className="pt-2 text-gray-500">Great! How do you approach visual design? I'm always fascinated by impressive graphics & effects.</div>

                                        </div>

                                    </div>

                                </div>



                            </div>
                        </div>

                        <div className="border-gray-200 bg-white w-[55vw]  rounded-xl border-2 border-gray-300/80 w-full mt-4  px-6 py-6">
                            <div className="bg-blue-100/50   rounded-full w-full flex px-8 py-8">
                                <div className=' flex gap-x-2 items-center justify-between w-full'>
                                    <div className='flex gap-x-2'>
                                        <div className='h-8 w-[0.3vw] bg-blue-500 rounded-full'></div>
                                        <div className='font-bold text-xl text-gray-600 w-full '>Meeting Recording</div>
                                    </div>
                                    <div className="border border-blue-500 w-250"></div>
                                    <button className="text-xl py-2 bg-blue-500 rounded rounded-full text-white px-4 py-4 " onClick={() => setMeetingRec(true)}><span className=" flex-inline items-center">+</span> New Meeting Recording</button>
                                </div>

                            </div>
                            <div className="flex  items-center justify-between w-full pt-4 px-4">
                                <div className='font-bold text-xl text-gray-600 w-full '>Meeting Transcripts</div>
                                <div className="flex w-full items-center justify-between gap-x-40 ps-4 border border-gray-300 rounded-lg ps-4 pe-1 py-2 grow-4 bg-gray-100/50 me-8">
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
                            </div>

                            <div className="grid grid-cols-3 gap-4 px-4 py-4">

                                {[1,2,3,4,5,6].map(()=>{
                                    return (<div className="flex flex-col bg-white border-2 border-slate-200/80 rounded-xl" >


                                        <div className="px-4 py-2      ">
                                            <div className=" border-b pb-4 pt-2 border-gray-200 font-semibold text-xl    ">
                                                Exploring Meeting Dynamics: An Insightful D...
    
    
                                            </div>
    
                                            <div className="py-4 ">
                                                <div className="text-blue-500 text-lg font-semibold">Summary:</div>
                                                <div className="text-slate-400 text-lg ">As an Al, I need more context to accurately analyze and summarize the transcript. Could you provide more details about the conversation? Al, I'm currently unable to analyze this transcript because it's in Telugu, a language I'm not programmed to understand. I apologize for the inconvenience.
    
                                                </div>
    
                                            </div>
    
    
                                        </div>
                                        <div className=" pt-4 pt-auto mt-auto px-4 py-4">
    
                                            <div className="flex justify-between items-center gap-x-4 font-semibold">
                                                <button className="border border-slate-300 px-4 py-2 rounded-full ">D</button>
                                                <button className="border border-slate-300 w-full py-2 rounded-full ">Read More</button>
                                                <button className="border border-slate-300 px-4 py-2 rounded-full ">C</button>
                                            </div>
                                        </div>
    
                                    </div>)
                                })}

                               

                            </div>

                           

                        </div>




                    </div>
                </div>

                {personRec && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                        aria-hidden="true"
                    >
                        <div className="relative w-full max-w-6xl  p-4 mx-10 ">
                            <div className="flex flex-col h-full bg-white rounded-lg shadow-lg  ">

                                {/* Header */}
                                <div className="flex items-center justify-between border-b  border-slate-200/80">
                                    <div className="text-2xl font-bold text-gray-600 p-6 ">
                                        New Person Recording
                                    </div>

                                    <button
                                        onClick={() => setPersonRec(false)}
                                        className="w-9 h-9 flex items-center justify-center rounded border-2 rounded-full mx-12"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="flex-1 overflow-y-auto px-12  py-4 space-y-4">

                                    <div className="py-2">
                                        <div className="font-semibold text-lg">Person Name</div>
                                        <input type="text" placeholder="Enter recording name" className="border-2 w-full h-18 mt-2 px-4 rounded-xl border-slate-300/80 bg-zinc-100/50 font-medium text-md" />
                                    </div>

                                    <div className="flex justify-between items-center ">
                                        <div className="font-semibold text-lg">Recording Timer</div>
                                        <div className="font-semibold text-lg">15 Seconds</div>
                                    </div>

                                    <button className={`${StartRec == false ? "bg-white text-blue-500 border border-blue-500 rounded rounded-full py-4 px-6  font-semibold  text-xl mt-8" : "bg-green-400 text-white rounded-xl py-4 px-6  font-semibold  text-xl mt-8"}`} onClick={() => setStartRec(true)}>{StartRec ? 'Recording...' : 'Start Recording'}</button>




                                    <div className="flex justify-end items-center p-2 mt-auto bg-white rounded-full gap-18 pt-6">

                                        <div className="flex gap-x-6 ">
                                            <button className=" bg-white text-blue-500 border border-blue-500 rounded rounded-full py-4 px-6 h-full w-full font-semibold  text-xl">Cancel</button>
                                            <button className=" bg-blue-500 rounded rounded-full text-white py-4 px-6 h-full w-full font-semibold  text-xl">Submit</button>
                                        </div>
                                    </div>


                                </div>



                            </div>
                        </div>
                    </div>
                )}

                {meetingRec && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                        aria-hidden="true"
                    >
                        <div className="relative w-full max-w-6xl  p-4 mx-10 ">
                            <div className="flex flex-col h-full bg-white rounded-lg shadow-lg  ">

                                {/* Header */}
                                <div className="flex items-center justify-between border-b  border-slate-200/80">
                                    <div className="text-2xl font-bold text-gray-600 p-6 ">
                                        Start Meeting Recording
                                    </div>

                                    <button
                                        onClick={() => setMeetingRec(false)}
                                        className="w-9 h-9 flex items-center justify-center rounded border-2 rounded-full mx-12"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="flex-1 overflow-y-auto px-12  py-4 space-y-4">

                                    <div className="py-2">
                                        <div className="font-semibold text-lg">Meeting Name</div>
                                        <input type="text" placeholder="Enter meeting name" className="border-2 w-full h-18 mt-2 px-4 rounded-xl border-slate-300/80 bg-zinc-100/50 font-medium text-md" />
                                    </div>

                                    <div className="flex justify-between items-center ">
                                        <div className="font-semibold text-lg">Recording Timer</div>
                                        <div className="font-semibold text-lg">9 Seconds</div>
                                    </div>

                                    
                                    <button className="bg-green-500 text-white rounded-xl py-4 px-6  font-semibold  text-xl mt-8 me-8" onClick={() => setStartRec(true)}>{StartRec ? 'Recording...' : 'Start Recording'}</button>
                                    <button className="bg-red-500 text-white rounded-xl py-4 px-6  font-semibold  text-xl mt-8" onClick={() => setStartRec(true)}>{StartRec ? 'Recording...' : 'Start Recording'}</button>
                                        
                                    



                                    <div className="flex justify-end items-center p-2 mt-auto bg-white rounded-full gap-18 pt-6">

                                        <div className="flex gap-x-6 ">
                                            <button className=" bg-white text-blue-500 border border-blue-500 rounded rounded-full py-4 px-6 h-full w-full font-semibold  text-xl">Cancel</button>
                                            <button className=" bg-blue-500 rounded rounded-full text-white py-4 px-6 h-full w-full font-semibold  text-xl">Submit</button>
                                        </div>
                                    </div>


                                </div>



                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}