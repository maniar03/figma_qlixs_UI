import React, { use, useState } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
// only import what you want to use
// import {
//     Button,
//     Checkbox,
//     FileInput,
//     Label,
//     Radio,
//     RangeSlider,
//     Select,
//     Textarea,
//     TextInput,
//     ToggleSwitch,
//   } from "flowbite-react";


export const Template = () => {

    const [active, setActive] = useState("dt");
    const [category, setCategory] = useState("hr");
    const [show, setShow] = useState('template')



    return (
        <>

            <div className='flex '>
                <div><Sidebar /></div>
                <div className="pb-8">
                    <div><Header /></div>
                    {show == 'template' &&
                        <div>
                            <div className="border border-gray-300 bg-white mx-6 my-4 py-4 px-4  rounded-xl">
                                <div className=" flex gap-6 border-b border-gray-200">
                                    <div
                                        className={`px-4 py-3 cursor-pointer text-lg ${active === "dt" ? "border-b-2 border-blue-600 text-blue-500 font-bold" : "border-b-2 border-transparent "}`}
                                        onClick={() => setActive("dt")}>
                                        Default Template
                                    </div>

                                    <div
                                        className={`px-4 py-3 cursor-pointer text-lg ${active === "ct" ? "border-b-2 border-blue-600 text-blue-500 font-bold" : "border-b-2 border-transparent"}`}
                                        onClick={() => setActive("ct")}>
                                        Custom Template
                                    </div>
                                </div>


                                <div>
                                    <div className="flex items-center justify-between  py-4">
                                        {active == 'dt' && <div className="text-md ">Manage and use pre-built templates for different interview or communication workflows.</div>}
                                        {active == 'ct' && <div className="text-md ">Create and customize  your own templates to streamline unique interview or communication workflows.</div>}
                                        <button className=" bg-blue-500 rounded rounded-full text-white px-4 h-12 lg:h-12 text-extrabold text-lg ">Create New Template</button>
                                    </div>
                                    <div className="flex justify-between gap-x-4 pb-4">
                                        <div className="flex items-center justify-between gap-x-40 ps-4 border border-gray-300 rounded-lg ps-4 pe-1 py-2 grow-4 bg-gray-100/50">
                                            <div className="flex gap-x-2">
                                                <img
                                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/pdu2i30t_expires_30_days.png"}
                                                    className="size-6"
                                                />
                                                {active == 'dt' &&
                                                    <span className="text-md" >
                                                        Search templates by name or keywords..
                                                    </span>}
                                                {active == 'ct' &&
                                                    <span className="text-md" >
                                                        Dashboard latest by name and keyword
                                                    </span>}
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
                                        {active == 'dt' &&
                                            <select name="" id="" className="grow-1 border border-gray-300 rounded-lg px-2 bg-gray-100/50 ">
                                                <option>Location</option>
                                            </select>
                                        }
                                        <select name="" id="" className="grow-1 border border-gray-300 rounded-lg px-2 bg-gray-100/50">
                                            <option>Template Type</option>
                                        </select>
                                        <button className="grow-1 border border-gray-300 rounded-lg px-2 bg-gray-100/50">filter</button>
                                        <select name="" id="" className="grow-1 border border-gray-300 rounded-lg px-2 bg-gray-100/50">
                                            <option>Sort by: recently added</option>
                                        </select>
                                    </div>
                                    {active == 'dt' &&
                                        <div>
                                            <div className="font-bold">Categories</div>
                                            <div className="flex gap-x-4 pt-2">
                                                <button className={` rounded rounded-full  px-4 h-8 lg:h-10 text-extrabold ${category === 'hr' ? 'bg-blue-500 text-white' : 'bg-slate-300/70 text-gray-500'}`} onClick={() => setCategory('hr')} >HR / Recruitment</button>
                                                <button className={`  rounded rounded-full  px-4 h-12 lg:h-10 font-semibold ${category === 'finance' ? 'bg-blue-500 text-white' : 'bg-slate-300/70 text-gray-500'}`} onClick={() => setCategory('finance')}>Finance</button>
                                                <button className={`  rounded rounded-full  px-4 h-12 lg:h-10 font-semibold ${category === 'eng' ? 'bg-blue-500 text-white' : 'bg-slate-300/70 text-gray-500'}`} onClick={() => setCategory('eng')}>Engineering</button>
                                                <button className={`  rounded rounded-full  px-4 h-12 lg:h-10 font-semibold ${category === 'tech' ? 'bg-blue-500 text-white' : 'bg-slate-300/70 text-gray-500'}`} onClick={() => setCategory('tech')}>Tech</button>
                                                <button className=" bg-slate-300/70 rounded rounded-full text-gray-500 px-4 h-12 lg:h-10 font-semibold " >Interview</button>
                                                <button className=" bg-slate-300/70 rounded rounded-full text-gray-500 px-4 h-12 lg:h-10 font-semibold " >Technical</button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            {active == 'dt' &&
                                <div>
                                    <div className="grid grid-cols-3 gap-4 px-6">
                                        <div className="flex  flex-col px-4 py-4 bg-white border border-gray-300 rounded-xl">
                                            <div className="font-bold text-lg ">Screening Template (Initial Candidate Vetting)</div>
                                            <div className="flex justify-between border-b pb-4 pt-2 border-gray-200 gap-x-6">
                                                <ul className={`text-md list-disc list-inside  ${category === 'hr' ? 'bg-blue-100 text-blue-500' : 'bg-zinc-100 text-gray-500'} px-2`} >
                                                    <li>Categopry: HR / Recruitment</li>

                                                </ul>
                                                <div className="opacity-70">Last Used: Oct 28,2025</div>

                                            </div>
                                            <div className="py-4 ">
                                                <div className="text-gray-800 font-medium">Quickly assess if the candidate meets the basic role requirements.</div>
                                                <ul className='text-md list-disc list-inside px-2 pt-2 text-gray-500' >
                                                    <li> What types of positions are you interested in?</li>

                                                </ul>
                                                <ul className='text-md list-disc list-inside px-2 pt-2 text-gray-500' >
                                                    <li> Hybrid or Onsite?</li>

                                                </ul>
                                                <ul className='text-md list-disc list-inside px-2 pt-2 text-gray-500' >
                                                    <li> Preferred location?</li>

                                                </ul>
                                                <ul className='text-md list-disc list-inside px-2 pt-2 text-gray-500' >
                                                    <li> Can you walk me through your most recent role and key responsibilities?</li>

                                                </ul>
                                            </div>

                                            <div className="flex justify-between items-center pt-4 pt-auto mt-auto">
                                                <button className=" bg-slate-300/70 rounded rounded-full text-gray-500 px-4 h-12 lg:h-10 font-semibold  ">Preview</button>

                                                <button className=" bg-blue-500 rounded rounded-full text-white px-6 h-8 lg:h-10 text-extrabold  ">Use Template</button>
                                            </div>
                                        </div>

                                        <div className=" flex  flex-col px-4 py-4 bg-white border border-gray-300 rounded-xl ">
                                            <div className="font-bold text-lg ">Standard Interview Template (General Role Int...</div>
                                            <div className="flex justify-between border-b pb-4 pt-2 border-gray-200 gap-x-6">
                                                <ul className={`text-md list-disc list-inside ${category === 'finance' ? 'bg-blue-100 text-blue-500' : 'bg-zinc-100 text-gray-500'}   px-2`} >
                                                    <li>Categopry: Finance</li>

                                                </ul>
                                                <div className="opacity-70">Used 3 times in this month</div>
                                            </div>
                                            <div className="py-4 ">
                                                <div className="text-gray-800 text-gray-800 font-medium" >To assess the candidate's skills, experience, problem-solving ability, and fit for the role and organization.</div>
                                                <ul className='text-md list-disc list-inside px-2 pt-1 text-gray-500' >
                                                    <li>Based on the position description, how do you see your experience aligning with this role?</li>
                                                </ul>
                                                <ul className='text-md list-disc list-inside px-2 pt-1 text-gray-500' >
                                                    <li>What do you consider your strongest skills, and how would they add value to this position?</li>

                                                </ul>
                                                <ul className='text-md list-disc list-inside px-2 pt-1 text-gray-500' >
                                                    <li>Can you tell me about a time you faced a challenge at work and how you handled it?</li>

                                                </ul>
                                                <ul className='text-md list-disc list-inside px-2 pt-1 text-gray-500' >
                                                    <li>Describe a project or accomplishment you're particularly proud of and the impact it had.</li>

                                                </ul>
                                            </div>
                                            <div className="flex justify-between items-center pt-4 mt-auto">
                                                <button className=" bg-slate-300/70 rounded rounded-full text-gray-500 px-4 h-12 lg:h-10 font-semibold  ">Preview</button>

                                                <button className=" bg-blue-500 rounded rounded-full text-white px-6 h-8 lg:h-10 text-extrabold  ">Use Template</button>
                                            </div>
                                        </div>
                                        <div className=" flex  flex-col px-4 py-4 bg-white border border-gray-300 rounded-xl ">
                                            <div className="font-bold text-lg ">Executive Interview Template (Senior Leaders...</div>
                                            <div className="flex justify-between border-b pb-4 pt-2 border-gray-200 gap-x-6">
                                                <ul className={`text-md list-disc list-inside  ${category === 'tech' || category === 'eng' ? 'bg-blue-100 text-blue-500' : 'bg-zinc-100 text-gray-500'}  px-2`} >
                                                    <li>Categopry: Engineering / Tech</li>

                                                </ul>
                                                <div className="opacity-70">Updated: Oct 30,2025</div>
                                            </div>
                                            <div className="py-4 ">
                                                <div className=" text-gray-800 font-medium">Evaluate leadership capabilities, vision, and strategic thinking.</div>
                                                <ul className='text-md list-disc list-inside px-2 pt-1 text-gray-500' >
                                                    <li>What is your leadership style, and how has it evolved throughout your career?</li>
                                                </ul>
                                                <ul className='text-md list-disc list-inside px-2 pt-1 text-gray-500' >
                                                    <li>Can you share an example of a time you led a major change or transformation initiative, and what strategies you used to gain buy-in from stakeholders/staff?</li>

                                                </ul>
                                                <ul className='text-md list-disc list-inside px-2 pt-1 text-gray-500' >
                                                    <li>How do you balance short-term operational needs with long-term strategic objectives?</li>

                                                </ul>
                                                <ul className='text-md list-disc list-inside px-2 pt-1 text-gray-500' >
                                                    <li>How do you approach managing, mentoring, and developing your team to ensure both individual growth and organizational success?</li>

                                                </ul>
                                            </div>

                                            <div className="flex justify-between items-center pt-4 mt-auto">
                                                <button className=" bg-slate-300/70 rounded rounded-full text-gray-500 px-4 h-12 lg:h-10 font-semibold  ">Preview</button>

                                                <button className=" bg-blue-500 rounded rounded-full text-white px-6 h-8 lg:h-10 text-extrabold  ">Use Template</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 px-6 pt-4">
                                        <div className="flex  flex-col px-4 py-4 bg-white border border-gray-300 rounded-xl">
                                            <div className="font-bold text-lg ">Referee Template (Reference Check Questions)</div>
                                            <div className="flex justify-between border-b pb-4 pt-2 border-gray-200 gap-x-6">
                                                <ul className='text-md list-disc list-inside bg-zinc-100 text-gray-500 px-2' >
                                                    <li>Category: Customer Support</li>

                                                </ul>
                                                <div className="opacity-70">Last Used: Oct 28, 2025</div>

                                            </div>
                                            <div >
                                                <div className="py-4 text-gray-800 font-medium">To validate a candidate's past performance, work ethic, leadership capabilities, and cultural fit to ensure the right hiring decision'.</div>
                                                <ul className='text-md list-disc list-inside px-2 pt-1 text-gray-500' >
                                                    <li> How long did you work with the candidate, and in what capacity?</li>

                                                </ul>
                                                <ul className='text-md list-disc list-inside px-2 pt-1 text-gray-500' >
                                                    <li> What was the candidate's job title, main responsibilities, and reporting lines during that time?</li>

                                                </ul>
                                                <ul className='text-md list-disc list-inside px-2 pt-1 text-gray-500' >
                                                    <li> How closely did you work with them on a day-to-day basis?</li>

                                                </ul>
                                                <ul className='text-md list-disc list-inside px-2 pt-1 text-gray-500' >
                                                    <li> What would you consider their key strengths in the role?</li>

                                                </ul>
                                            </div>

                                            <div className="flex justify-between items-center pt-4 pt-auto mt-auto">
                                                <button className=" bg-slate-300/70 rounded rounded-full text-gray-500 px-4 h-12 lg:h-10 font-semibold  ">Preview</button>

                                                <button className=" bg-blue-500 rounded rounded-full text-white px-6 h-8 lg:h-10 text-extrabold  ">Use Template</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            }

                            {active == 'ct' &&
                                <div>
                                    <div className="bg-white border border-gray-200/60 mx-6 rounded-xl">
                                        <div className="grid grid-cols-3 gap-4 px-6 pt-6 ">
                                            <div className="flex  flex-col px-4 py-4 bg-slate-200/80  rounded-xl">

                                                <div className="flex justify-between border-b pb-4 pt-2 border-white gap-x-6">
                                                    <div className="font-bold text-xl ">Interview</div>
                                                    <img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-8 text-white' />


                                                </div>
                                                <div className="py-4 text-md font-medium px-2 text-gray-600">

                                                    <ul className='list-disc list-inside py-2 ' >
                                                        <li> Despite these challenges, they maintain a positive outlook and are actively engaged in conversations about luxury cars.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li> They recently rented a Lamborghini for a short period, showing their enthusiasm for nigh-end vehicles.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li>Health Concerns and Luxury Car Rentals: An Informal Discussion on Personal Experiences and Industry Insights.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li> Health Concerns and Luxury Car Rentals: An Informal Discussion on Personal Experiences and Industry Insights.</li>

                                                    </ul>
                                                </div>

                                                <div className="flex justify-between items-center p-2 mt-auto bg-white rounded-full gap-x-4">
                                                    <button className=" bg-white text-blue-500 border border-blue-500 rounded rounded-full py-2 px-4 h-full w-full font-semibold  ">Preview</button>

                                                    <button className=" bg-blue-500 rounded rounded-full text-white px-6 h-full w-full text-extrabold  ">Use Template</button>
                                                </div>
                                            </div>

                                            <div className="flex  flex-col px-4 py-4 bg-slate-200/80  rounded-xl">

                                                <div className="flex justify-between border-b pb-4 pt-2 border-white gap-x-6">
                                                    <div className="font-bold text-xl ">Interview</div>
                                                    <img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-8 text-white' />


                                                </div>
                                                <div className="py-4 text-md font-medium px-2 text-gray-600">

                                                    <ul className='list-disc list-inside py-2 ' >
                                                        <li> Despite these challenges, they maintain a positive outlook and are actively engaged in conversations about luxury cars.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li> They recently rented a Lamborghini for a short period, showing their enthusiasm for nigh-end vehicles.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li>Health Concerns and Luxury Car Rentals: An Informal Discussion on Personal Experiences and Industry Insights.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li> Health Concerns and Luxury Car Rentals: An Informal Discussion on Personal Experiences and Industry Insights.</li>

                                                    </ul>
                                                </div>

                                                <div className="flex justify-between items-center p-2 mt-auto bg-white rounded-full gap-x-4">
                                                    <button className=" bg-white text-blue-500 border border-blue-500 rounded rounded-full py-2 px-4 h-full w-full font-semibold  ">Preview</button>

                                                    <button className=" bg-blue-500 rounded rounded-full text-white px-6 h-full w-full text-extrabold  ">Use Template</button>
                                                </div>
                                            </div>

                                            <div className="flex  flex-col px-4 py-4 bg-slate-200/80  rounded-xl">

                                                <div className="flex justify-between border-b pb-4 pt-2 border-white gap-x-6">
                                                    <div className="font-bold text-xl ">Interview</div>
                                                    <img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-8 text-white' />


                                                </div>
                                                <div className="py-4 text-md font-medium px-2 text-gray-600">

                                                    <ul className='list-disc list-inside py-2 ' >
                                                        <li> Despite these challenges, they maintain a positive outlook and are actively engaged in conversations about luxury cars.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li> They recently rented a Lamborghini for a short period, showing their enthusiasm for nigh-end vehicles.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li>Health Concerns and Luxury Car Rentals: An Informal Discussion on Personal Experiences and Industry Insights.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li> Health Concerns and Luxury Car Rentals: An Informal Discussion on Personal Experiences and Industry Insights.</li>

                                                    </ul>
                                                </div>

                                                <div className="flex justify-between items-center p-2 mt-auto bg-white rounded-full gap-x-4">
                                                    <button className=" bg-white text-blue-500 border border-blue-500 rounded rounded-full py-2 px-4 h-full w-full font-semibold  ">Preview</button>

                                                    <button className=" bg-blue-500 rounded rounded-full text-white px-6 h-full w-full text-extrabold  ">Use Template</button>
                                                </div>
                                            </div>


                                        </div>

                                        <div className="grid grid-cols-3 gap-4 px-6 pt-6 pb-6 ">
                                            <div className="flex  flex-col px-4 py-4 bg-slate-200/80  rounded-xl">

                                                <div className="flex justify-between border-b pb-4 pt-2 border-white gap-x-6">
                                                    <div className="font-bold text-xl ">Interview</div>
                                                    <img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-8 text-white' />


                                                </div>
                                                <div className="py-4 text-md font-medium px-2 text-gray-600">

                                                    <ul className='list-disc list-inside py-2 ' >
                                                        <li> Despite these challenges, they maintain a positive outlook and are actively engaged in conversations about luxury cars.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li> They recently rented a Lamborghini for a short period, showing their enthusiasm for nigh-end vehicles.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li>Health Concerns and Luxury Car Rentals: An Informal Discussion on Personal Experiences and Industry Insights.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li> Health Concerns and Luxury Car Rentals: An Informal Discussion on Personal Experiences and Industry Insights.</li>

                                                    </ul>
                                                </div>

                                                <div className="flex justify-between items-center p-2 mt-auto bg-white rounded-full gap-x-4">
                                                    <button className=" bg-white text-blue-500 border border-blue-500 rounded rounded-full py-2 px-4 h-full w-full font-semibold  ">Preview</button>

                                                    <button className=" bg-blue-500 rounded rounded-full text-white px-6 h-full w-full text-extrabold  ">Use Template</button>
                                                </div>
                                            </div>

                                            <div className="flex  flex-col px-4 py-4 bg-slate-200/80  rounded-xl">

                                                <div className="flex justify-between border-b pb-4 pt-2 border-white gap-x-6">
                                                    <div className="font-bold text-xl ">Interview</div>
                                                    <img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-8 text-white' />


                                                </div>
                                                <div className="py-4 text-md font-medium px-2 text-gray-600">

                                                    <ul className='list-disc list-inside py-2 ' >
                                                        <li> Despite these challenges, they maintain a positive outlook and are actively engaged in conversations about luxury cars.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li> They recently rented a Lamborghini for a short period, showing their enthusiasm for nigh-end vehicles.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li>Health Concerns and Luxury Car Rentals: An Informal Discussion on Personal Experiences and Industry Insights.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li> Health Concerns and Luxury Car Rentals: An Informal Discussion on Personal Experiences and Industry Insights.</li>

                                                    </ul>
                                                </div>

                                                <div className="flex justify-between items-center p-2 mt-auto bg-white rounded-full gap-x-4">
                                                    <button className=" bg-white text-blue-500 border border-blue-500 rounded rounded-full py-2 px-4 h-full w-full font-semibold  ">Preview</button>

                                                    <button className=" bg-blue-500 rounded rounded-full text-white px-6 h-full w-full text-extrabold  ">Use Template</button>
                                                </div>
                                            </div>

                                            <div className="flex  flex-col px-4 py-4 bg-slate-200/80  rounded-xl">

                                                <div className="flex justify-between border-b pb-4 pt-2 border-white gap-x-6">
                                                    <div className="font-bold text-xl ">Interview</div>
                                                    <img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-8 text-white' />


                                                </div>
                                                <div className="py-4 text-md font-medium px-2 text-gray-600">

                                                    <ul className='list-disc list-inside py-2 ' >
                                                        <li> Despite these challenges, they maintain a positive outlook and are actively engaged in conversations about luxury cars.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li> They recently rented a Lamborghini for a short period, showing their enthusiasm for nigh-end vehicles.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li>Health Concerns and Luxury Car Rentals: An Informal Discussion on Personal Experiences and Industry Insights.</li>

                                                    </ul>
                                                    <ul className='list-disc list-inside py-2' >
                                                        <li> Health Concerns and Luxury Car Rentals: An Informal Discussion on Personal Experiences and Industry Insights.</li>

                                                    </ul>
                                                </div>

                                                <div className="flex justify-between items-center p-2 mt-auto bg-white rounded-full gap-x-4">
                                                    <button className=" bg-white text-blue-500 border border-blue-500 rounded rounded-full py-2 px-4 h-full w-full font-semibold  ">Preview</button>

                                                    <button className=" bg-blue-500 rounded rounded-full text-white px-6 h-full w-full text-extrabold  ">Use Template</button>
                                                </div>
                                            </div>


                                        </div>


                                    </div>
                                    <div className="bg-white border border-2 border-gray-400 mx-6 mt-4 py-12 px-8 rounded-xl border-dashed">
                                        <button onClick={() => setShow('add template')}>
                                            <div className="flex gap-x-4 items-center">
                                                <div className="rounded-full bg-blue-500 text-white text-7xl flex align-center justify-center size-22">
                                                    +
                                                </div>
                                                <div className="text-2xl font-semibold">
                                                    Add Custom Template
                                                </div>
                                            </div></button>


                                    </div>
                                </div>

                            }
                        </div>
                    }

                    {show == 'add template' &&

                        <div className="mx-6 my-4 gap-y-4">

                            <div className="font-bold text-xl ">Create New Template</div>
                            <div className="text-md">This template will be saved to your dashboard where you can edit or delete it as needed</div>
                            <div className="bg-white rounded-xl border border-gray-300/70 px-6 py-8 mt-4">
                                <form className="flex ">
                                    <div className="flex justify-between w-full border">
                                        <div className="w-full">
                                            <div className="mb-2 block">
                                                <Label htmlFor="email1">Your email</Label>
                                            </div>
                                            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required sizing="sm" className="w-full"/>
                                        </div>
                                        <div className="w-full">
                                            <div className="mb-2 block">
                                                <Label htmlFor="password1">Your password</Label>
                                            </div>
                                            <TextInput id="password1" type="password" required sizing="sm" className="w-full" />
                                        </div>
                                    </div>


                                    <Button type="submit">Submit</Button>
                                </form>
                            </div>

                        </div>


                    }

                </div>
            </div>
        </>
    )

}