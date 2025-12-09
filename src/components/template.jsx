import React, { useState } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

export const Template = () => {

    const [active, setActive] = useState("dt");

    return (
        <>

            <div className='flex '>
                <div><Sidebar /></div>
                <div>
                    <div><Header /></div>
                    <div className="border border-gray-300 bg-white mx-6 my-4 py-4 px-4  rounded-xl">
                        <div className=" flex gap-6 border-b border-gray-200">
                            <div
                                className={`px-4 py-3 cursor-pointer ${active === "dt" ? "border-b-2 border-blue-600 text-blue-500 font-bold" : "border-b-2 border-transparent"}`}
                                onClick={() => setActive("dt")}>
                                Default Template
                            </div>

                            <div
                                className={`px-4 py-3 cursor-pointer ${active === "ct" ? "border-b-2 border-blue-600 text-blue-500 font-bold" : "border-b-2 border-transparent"}`}
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
                                        <button className=" bg-blue-500 rounded rounded-full text-white px-4 h-8 lg:h-10 text-extrabold  ">HR / Recruitment</button>
                                        <button className=" bg-slate-300/70 rounded rounded-full text-gray-500 px-4 h-12 lg:h-10 font-semibold ">Finance</button>
                                        <button className=" bg-slate-300/70 rounded rounded-full text-gray-500 px-4 h-12 lg:h-10 font-semibold ">Engineering</button>
                                        <button className=" bg-slate-300/70 rounded rounded-full text-gray-500 px-4 h-12 lg:h-10 font-semibold ">Tech</button>
                                        <button className=" bg-slate-300/70 rounded rounded-full text-gray-500 px-4 h-12 lg:h-10 font-semibold ">Interview</button>
                                        <button className=" bg-slate-300/70 rounded rounded-full text-gray-500 px-4 h-12 lg:h-10 font-semibold ">Technical</button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <div className="flex gap-x-4 px-6">
                        <div className="flex flex-1 flex-col px-4 py-4 bg-white border border-gray-300 rounded-xl">
                            <div className="font-bold text-lg ">Screening Template</div>
                            <div className="flex justify-between border-b pb-4 pt-2 border-gray-200">
                                <ul className='text-md list-disc list-inside  bg-blue-100 text-blue-500 px-2' >
                                    <li>Categopry: HR / Recruitment</li>

                                </ul>
                                <div className="opacity-70">Last Used: Oct 28,2025</div>

                            </div>
                            <div>
                                Quickly assess if the candidate meets the basic role requirements.
                                <ul className='text-md list-disc list-inside px-2' >
                                    <li> What types of positions are you interested in?</li>

                                </ul>
                                <ul className='text-md list-disc list-inside px-2' >
                                    <li> Hybrid or Onsite?</li>

                                </ul>
                                <ul className='text-md list-disc list-inside px-2' >
                                    <li> Preferred location?</li>

                                </ul>
                                <ul className='text-md list-disc list-inside px-2' >
                                    <li> Can you walk me through your most recent role and key responsibilities?</li>

                                </ul>
                            </div>

                            <div className="flex justify-between items-center pt-4 pt-auto mt-auto">
                                <button className=" bg-slate-300/70 rounded rounded-full text-gray-500 px-4 h-12 lg:h-10 font-semibold  ">Preview</button>

                                <button className=" bg-blue-500 rounded rounded-full text-white px-6 h-8 lg:h-10 text-extrabold  ">Use Template</button>
                            </div>
                        </div>
                        <div className=" flex flex-1 flex-col px-4 py-4 bg-white border border-gray-300 rounded-xl ">
                            <div className="font-bold text-lg ">Screening Template</div>
                            <div className="flex justify-between border-b pb-4 pt-2 border-gray-200">
                                <ul className='text-md list-disc list-inside  bg-zinc-100 text-gray-500 px-2' >
                                    <li>Categopry: Finance</li>

                                </ul>
                                <div className="opacity-70">Used 3 times in this month</div>
                            </div>
                            <div>
                                To assess the candidate's skills, experience, problem-solving ability, and fit for the role and organization.
                                <ul className='text-md list-disc list-inside px-2' >
                                    <li>Based on the position description, how do you see your experience aligning with this role?</li>
                                </ul>
                                <ul className='text-md list-disc list-inside px-2' >
                                    <li>What do you consider your strongest skills, and how would they add value to this position?</li>

                                </ul>
                                <ul className='text-md list-disc list-inside px-2' >
                                    <li>Can you tell me about a time you faced a challenge at work and how you handled it?</li>

                                </ul>
                                <ul className='text-md list-disc list-inside px-2' >
                                    <li>Describe a project or accomplishment you're particularly proud of and the impact it had.</li>

                                </ul>
                            </div>
                            <div className="flex justify-between items-center pt-4 mt-auto">
                                <button className=" bg-slate-300/70 rounded rounded-full text-gray-500 px-4 h-12 lg:h-10 font-semibold  ">Preview</button>

                                <button className=" bg-blue-500 rounded rounded-full text-white px-6 h-8 lg:h-10 text-extrabold  ">Use Template</button>
                            </div>
                        </div>
                        <div className=" flex flex-1 flex-col px-4 py-4 bg-white border border-gray-300 rounded-xl ">
                            <div className="font-bold text-lg ">Screening Template</div>
                            <div className="flex justify-between border-b pb-4 pt-2 border-gray-200">
                                <ul className='text-md list-disc list-inside  bg-zinc-100 text-gray-500 px-2' >
                                    <li>Categopry: Engineering / Tech</li>

                                </ul>
                                <div className="opacity-70">Updated: Oct 30,2025</div>
                            </div>
                            <div>Evaluate leadership capabilities, vision, and strategic thinking.
                                <ul className='text-md list-disc list-inside px-2' >
                                    <li>What is your leadership style, and how has it evolved throughout your career?</li>
                                </ul>
                                <ul className='text-md list-disc list-inside px-2' >
                                    <li>Can you share an example of a time you led a major change or transformation initiative, and what strategies you used to gain buy-in from stakeholders/staff?</li>

                                </ul>
                                <ul className='text-md list-disc list-inside px-2' >
                                    <li>How do you balance short-term operational needs with long-term strategic objectives?</li>

                                </ul>
                                <ul className='text-md list-disc list-inside px-2' >
                                    <li>How do you approach managing, mentoring, and developing your team to ensure both individual growth and organizational success?</li>

                                </ul>
                            </div>

                            <div className="flex justify-between items-center pt-4 mt-auto">
                                <button className=" bg-slate-300/70 rounded rounded-full text-gray-500 px-4 h-12 lg:h-10 font-semibold  ">Preview</button>

                                <button className=" bg-blue-500 rounded rounded-full text-white px-6 h-8 lg:h-10 text-extrabold  ">Use Template</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}