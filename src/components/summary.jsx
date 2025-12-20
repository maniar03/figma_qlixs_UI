import React, { useState } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";



export const Summary = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openPreviewModal, setOpenPreviewModal] = useState(false)
    const [previewData, setPreviewData] = useState({})

    const template_card = [
        {
            id: 1,
            title: 'Basic Telephone Screening Template',
            category: ' HR / Recruitment',
            time: 'Last Used: Oct 28,2025',
            description: 'A quick checklist for pre-screening candidates before interviews.',
            points: ['Position Type & Contract Details', 'Expected Salary / Hourly Rate', 'Candidate Location & Availability', 'Background Verification Steps'],
        },
        {
            id: 2,
            title: 'Finance Interview',
            category: 'Finance',
            time: 'Used 3 times in this month',
            description: 'Structured questions to evaluate a candidate\'s financial knowledge.',
            points: ['Familiar Software (Excel, SAP, QuickBooks)', 'Budget & Risk Management Experience', 'Accounting Principles', 'Valuation Knowledge']
        },
        {
            id: 3,
            title: 'Technology Interview',
            category: 'Engineering / Tech',
            time: 'Updated: Oct 30,2025',
            description: 'Evaluate candidates on core programming and problem-solving skills.',
            points: ['Array & Algorithm Operations', 'Debugging Techniques', 'Subsystem Optimization', 'Coding Scenarios']
        }
    ]

    const cat_bg_color = ['bg-blue-100', 'bg-green-100', 'bg-red-100']
    const cat_text_color = ['text-blue-500', 'text-green-500', 'text-red-500']

    const second_template_card = {
        title: 'Interview',
        points: ['Despite these challenges, they maintain a positive outlook and are actively engaged in conversations about luxury cars.',
            'They recently rented a Lamborghini for a short period, showing their enthusiasm for nigh-end vehicles.',
            'Health Concerns and Luxury Car Rentals: An Informal Discussion on Personal Experiences and Industry Insights.',
            'Speaker A, age 25, recently experienced dizziness and health issues, leading to specialist consultations for further tests.'
        ]
    }

    const handlePreview = (card) => {
        setPreviewData(card)
        setOpenPreviewModal(true)
    }

    return (
        <>

            <div className='flex '>
                <div><Sidebar /></div>
                <div className="pb-8">
                    <div><Header /></div>

                    <div >
                        <div className="border border-gray-300 bg-white mx-6 my-4 py-4 px-4  rounded-xl">
                            <div>
                                <div className="items-center justify-between  py-2">
                                    <div className="text-xl font-bold">Interview Summaries & Behavioral Insights</div>
                                    <div className="text-md py-4">Access structured summaries, follow-up opportunities, and candidate insights all in one place.</div>

                                </div>

                                <div className="flex justify-between gap-x-4 pb-4">
                                    <div className="flex items-center justify-between gap-x-40 ps-4 border border-gray-300 rounded-lg ps-4 pe-1 me-16 py-2 grow-4 bg-gray-100/50">
                                        <div className="flex gap-x-2">
                                            <img
                                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/pdu2i30t_expires_30_days.png"}
                                                className="size-6"
                                            />

                                            <span className="text-md" >
                                                Search transcripts by candidate name, skill, topic, or creation date..
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

                                    <select name="" id="" className="grow-1 border border-gray-300 rounded-lg px-2 bg-gray-100/50  ">
                                        <option>All</option>
                                    </select>
                                    <button className="grow-1 border border-gray-300 rounded-lg px-2 bg-gray-100/50">Meeting</button>
                                    <button className="grow-1 border border-gray-300 rounded-lg px-2 bg-gray-100/50">Custom Tag</button>

                                    <select name="" id="" className="grow-1 border border-gray-300 rounded-lg px-2 bg-gray-100/50">
                                        <option>Sort by: Recently Created</option>
                                    </select>
                                </div>



                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 px-6 ">
                            <div className="flex flex-col bg-white border-2 border-slate-200/80 rounded-xl" onClick={() => setOpenModal(true)}>
                                <div className="flex justify-between border-b px-4 py-4 border-white gap-x-6 bg-slate-200/50">
                                    <div className="font-bold text-xl ">Evaluating Emotional Intelligence I...</div>
                                    <img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-8 text-white bg-white' />


                                </div>

                                <div className="px-4 py-2      ">
                                    <div className=" border-b pb-4 pt-2 border-gray-200     ">
                                        <div className="flex justify-between items-center">
                                            <div className="flex justify-center items-center gap-x-4">
                                                <img
                                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/fv64nxx8_expires_30_days.png"}
                                                    className="size-12"
                                                />
                                                <div>
                                                    <div className="text-sm text-slate-400">Interviewer</div>
                                                    <div className="font-medium text-blue-500">Facilitator John S</div>
                                                </div>
                                            </div>

                                            <ul className={`text-md list-disc list-inside  bg-blue-500 text-white rounded-full px-2 py-1`} >
                                                <li>HR Screen</li>

                                            </ul>
                                        </div>
                                        <div className="text-slate-500 font-medium">Duration:<span className="text-slate-600 "> 40 min</span></div>

                                    </div>

                                    <div className="py-4 ">
                                        <div className="text-slate-600 text-md">The candidate discussed a recent experience involving an emotional outburst from a colleague, which significantly impacted their perception of that person. They expressed that the colleague's inability to handle rejection gracefully diminished their confidence in them. The candidate emphasized the importance of emotional intelligence in....

                                        </div>

                                    </div>


                                </div>
                                <div className=" pt-4 pt-auto mt-auto px-4 py-4">
                                    <div className=" flex justify-between items-center mb-6">

                                        <div className="text-sm text-slate-600">Created: 4/11/2025</div>
                                        <div className="text-sm text-slate-600">Active: 4/11/2025</div>
                                    </div>
                                    <div className="flex justify-between items-center gap-x-4 font-semibold">
                                        <button className="border border-slate-300 w-full py-2 rounded-full ">Download PDF</button>
                                        <button className="border border-slate-300 px-4 py-2 rounded-full ">C</button>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-col bg-white border-2 border-slate-200/80 rounded-xl">
                                <div className="flex justify-between border-b px-4 py-4 border-white gap-x-6 bg-slate-200/50">
                                    <div className="font-bold text-xl ">Q4 Product Strategy Sync</div>
                                    <img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-8 text-white bg-white' />


                                </div>

                                <div className="px-4 py-2      ">
                                    <div className=" border-b pb-4 pt-2 border-gray-200     ">
                                        <div className="flex justify-between items-center">
                                            <div className="flex justify-center items-center gap-x-4">
                                                <img
                                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/fv64nxx8_expires_30_days.png"}
                                                    className="size-12"
                                                />
                                                <div>
                                                    <div className="text-sm text-slate-400">Interviewer</div>
                                                    <div className="font-medium text-purple-500">Facilitator John S</div>
                                                </div>
                                            </div>

                                            <ul className={`text-md list-disc list-inside  bg-purple-500 text-white rounded-full px-2 py-1`} >
                                                <li>Project Planning</li>

                                            </ul>
                                        </div>
                                        <div className="text-slate-500 font-medium">Duration:<span className="text-slate-600 "> 40 min</span></div>

                                    </div>

                                    <div className="py-4 ">
                                        <div className="text-slate-600 text-md">The Q4 OKRs were finalized, and budget approval is pending. The team revised the Q4 OKRs, final The Q4 OKRs were finalized, and budget approval is pending. The team revised the Q4 OKRs, final The Q4 OKRs were finalized, and budget approval is pending. The team revised the Q4 OKRs, final The Q4 OKRs were finalized, and budget approval is...

                                        </div>

                                    </div>


                                </div>
                                <div className=" pt-4 pt-auto mt-auto px-4 py-4">
                                    <div className=" flex justify-between items-center mb-6">

                                        <div className="text-sm text-slate-600">Created: 4/11/2025</div>
                                        <div className="text-sm text-slate-600">Active: 4/11/2025</div>
                                    </div>
                                    <div className="flex justify-between items-center gap-x-4 font-semibold">
                                        <button className="border border-slate-300 w-full py-2 rounded-full ">Download PDF</button>
                                        <button className="border border-slate-300 px-4 py-2 rounded-full ">C</button>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-col bg-white border-2 border-slate-200/80 rounded-xl">
                                <div className="flex justify-between border-b px-4 py-4 border-white gap-x-6 bg-slate-200/50">
                                    <div className="font-bold text-xl ">Client Onboarding Call - Acme Inc.</div>
                                    <img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-8 text-white bg-white' />


                                </div>

                                <div className="px-4 py-2      ">
                                    <div className=" border-b pb-4 pt-2 border-gray-200     ">
                                        <div className="flex justify-between items-center">
                                            <div className="flex justify-center items-center gap-x-4">
                                                <img
                                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/fv64nxx8_expires_30_days.png"}
                                                    className="size-12"
                                                />
                                                <div>
                                                    <div className="text-sm text-slate-400">Interviewer</div>
                                                    <div className="font-medium text-red-500">Facilitator John S</div>
                                                </div>
                                            </div>

                                            <ul className={`text-md list-disc list-inside  bg-red-500 text-white rounded-full px-2 py-1`} >
                                                <li>HR Screen</li>

                                            </ul>
                                        </div>
                                        <div className="text-slate-500 font-medium">Duration:<span className="text-slate-600 "> 40 min</span></div>

                                    </div>

                                    <div className="py-4 ">
                                        <div className="text-slate-600 text-md">The candidate confirms Speaker A is an experienced individual regarding social issues, particularly topics related to media narratives, surrounding abortion, and the impact of popular culture The candidate confirms Speaker A is an experienced individual regarding social issues, particularly topics related to media narratives, surrounding abortion....

                                        </div>

                                    </div>


                                </div>
                                <div className=" pt-4 pt-auto mt-auto px-4 py-4">
                                    <div className=" flex justify-between items-center mb-6">

                                        <div className="text-sm text-slate-600">Created: 4/11/2025</div>
                                        <div className="text-sm text-slate-600">Active: 4/11/2025</div>
                                    </div>
                                    <div className="flex justify-between items-center gap-x-4 font-semibold">
                                        <button className="border border-slate-300 w-full py-2 rounded-full ">Download PDF</button>
                                        <button className="border border-slate-300 px-4 py-2 rounded-full ">C</button>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="grid grid-cols-3 gap-4 px-6 pt-4">
                            <div className="flex flex-col bg-white border-2 border-slate-200/80 rounded-xl">
                                <div className="flex justify-between border-b px-4 py-4 border-white gap-x-6 bg-slate-200/50">
                                    <div className="font-bold text-xl ">Evaluating Emotional Intelligence I...</div>
                                    <img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-8 text-white bg-white' />


                                </div>

                                <div className="px-4 py-2      ">
                                    <div className=" border-b pb-4 pt-2 border-gray-200     ">
                                        <div className="flex justify-between items-center">
                                            <div className="flex justify-center items-center gap-x-4">
                                                <img
                                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/fv64nxx8_expires_30_days.png"}
                                                    className="size-12"
                                                />
                                                <div>
                                                    <div className="text-sm text-slate-400">Interviewer</div>
                                                    <div className="font-medium text-blue-500">Facilitator John S</div>
                                                </div>
                                            </div>

                                            <ul className={`text-md list-disc list-inside  bg-blue-500 text-white rounded-full px-2 py-1`} >
                                                <li>HR Screen</li>

                                            </ul>
                                        </div>
                                        <div className="text-slate-500 font-medium">Duration:<span className="text-slate-600 "> 40 min</span></div>

                                    </div>

                                    <div className="py-4 ">
                                        <div className="text-slate-600 text-md">The candidate discussed a recent experience involving an emotional outburst from a colleague, which significantly impacted their perception of that person. They expressed that the colleague's inability to handle rejection gracefully diminished their confidence in them. The candidate emphasized the importance of emotional intelligence in....

                                        </div>

                                    </div>


                                </div>
                                <div className=" pt-4 pt-auto mt-auto px-4 py-4">
                                    <div className=" flex justify-between items-center mb-6">

                                        <div className="text-sm text-slate-600">Created: 4/11/2025</div>
                                        <div className="text-sm text-slate-600">Active: 4/11/2025</div>
                                    </div>
                                    <div className="flex justify-between items-center gap-x-4 font-semibold">
                                        <button className="border border-slate-300 w-full py-2 rounded-full ">Download PDF</button>
                                        <button className="border border-slate-300 px-4 py-2 rounded-full ">C</button>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-col bg-white border-2 border-slate-200/80 rounded-xl">
                                <div className="flex justify-between border-b px-4 py-4 border-white gap-x-6 bg-slate-200/50">
                                    <div className="font-bold text-xl ">Q4 Product Strategy Sync</div>
                                    <img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-8 text-white bg-white' />


                                </div>

                                <div className="px-4 py-2      ">
                                    <div className=" border-b pb-4 pt-2 border-gray-200     ">
                                        <div className="flex justify-between items-center">
                                            <div className="flex justify-center items-center gap-x-4">
                                                <img
                                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/fv64nxx8_expires_30_days.png"}
                                                    className="size-12"
                                                />
                                                <div>
                                                    <div className="text-sm text-slate-400">Interviewer</div>
                                                    <div className="font-medium text-purple-500">Facilitator John S</div>
                                                </div>
                                            </div>

                                            <ul className={`text-md list-disc list-inside  bg-purple-500 text-white rounded-full px-2 py-1`} >
                                                <li>Project Planning</li>

                                            </ul>
                                        </div>
                                        <div className="text-slate-500 font-medium">Duration:<span className="text-slate-600 "> 40 min</span></div>

                                    </div>

                                    <div className="py-4 ">
                                        <div className="text-slate-600 text-md">The Q4 OKRs were finalized, and budget approval is pending. The team revised the Q4 OKRs, final The Q4 OKRs were finalized, and budget approval is pending. The team revised the Q4 OKRs, final The Q4 OKRs were finalized, and budget approval is pending. The team revised the Q4 OKRs, final The Q4 OKRs were finalized, and budget approval is...

                                        </div>

                                    </div>


                                </div>
                                <div className=" pt-4 pt-auto mt-auto px-4 py-4">
                                    <div className=" flex justify-between items-center mb-6">

                                        <div className="text-sm text-slate-600">Created: 4/11/2025</div>
                                        <div className="text-sm text-slate-600">Active: 4/11/2025</div>
                                    </div>
                                    <div className="flex justify-between items-center gap-x-4 font-semibold">
                                        <button className="border border-slate-300 w-full py-2 rounded-full ">Download PDF</button>
                                        <button className="border border-slate-300 px-4 py-2 rounded-full ">C</button>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-col bg-white border-2 border-slate-200/80 rounded-xl">
                                <div className="flex justify-between border-b px-4 py-4 border-white gap-x-6 bg-slate-200/50">
                                    <div className="font-bold text-xl ">Client Onboarding Call - Acme Inc.</div>
                                    <img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-8 text-white bg-white' />


                                </div>

                                <div className="px-4 py-2      ">
                                    <div className=" border-b pb-4 pt-2 border-gray-200     ">
                                        <div className="flex justify-between items-center">
                                            <div className="flex justify-center items-center gap-x-4">
                                                <img
                                                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/fv64nxx8_expires_30_days.png"}
                                                    className="size-12"
                                                />
                                                <div>
                                                    <div className="text-sm text-slate-400">Interviewer</div>
                                                    <div className="font-medium text-red-500">Facilitator John S</div>
                                                </div>
                                            </div>

                                            <ul className={`text-md list-disc list-inside  bg-red-500 text-white rounded-full px-2 py-1`} >
                                                <li>HR Screen</li>

                                            </ul>
                                        </div>
                                        <div className="text-slate-500 font-medium">Duration:<span className="text-slate-600 "> 40 min</span></div>

                                    </div>

                                    <div className="py-4 ">
                                        <div className="text-slate-600 text-md">The candidate confirms Speaker A is an experienced individual regarding social issues, particularly topics related to media narratives, surrounding abortion, and the impact of popular culture The candidate confirms Speaker A is an experienced individual regarding social issues, particularly topics related to media narratives, surrounding abortion....

                                        </div>

                                    </div>


                                </div>
                                <div className=" pt-4 pt-auto mt-auto px-4 py-4">
                                    <div className=" flex justify-between items-center mb-6">

                                        <div className="text-sm text-slate-600">Created: 4/11/2025</div>
                                        <div className="text-sm text-slate-600">Active: 4/11/2025</div>
                                    </div>
                                    <div className="flex justify-between items-center gap-x-4 font-semibold">
                                        <button className="border border-slate-300 w-full py-2 rounded-full ">Download PDF</button>
                                        <button className="border border-slate-300 px-4 py-2 rounded-full ">C</button>
                                    </div>
                                </div>

                            </div>

                        </div>




                    </div>
                    {/* <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                        <ModalHeader>Terms of Service</ModalHeader>
                        <ModalBody>
                            <div className="space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                                    companies around the world are updating their terms of service agreements to comply.
                                </p>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                                    to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                                    soon as possible of high-risk data breaches that could personally affect them.
                                </p>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => setOpenModal(false)}>I accept</Button>
                            <Button color="alternative" onClick={() => setOpenModal(false)}>
                                Decline
                            </Button>
                        </ModalFooter>
                    </Modal> */}

                    {openModal && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                            aria-hidden="true"
                        >
                            <div className="relative w-full max-w-6xl h-[90vh] p-4 mx-10 ">
                                <div className="flex flex-col h-full bg-white rounded-lg shadow-lg  ">

                                    {/* Header */}
                                    <div className="flex items-center justify-between border-b  border-slate-200/80">
                                        <h3 className="text-2xl font-bold text-gray-900 p-6 ">
                                            Evaluating Emotional Intelligence Interview
                                        </h3>
                                        <button
                                            onClick={() => setOpenModal(false)}
                                            className="w-9 h-9 flex items-center justify-center rounded border-2 rounded-full mx-12"
                                        >
                                            ✕
                                        </button>

                                    </div>

                                    {/* Body */}
                                    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                                        <p className="text-gray-900 text-2xl font-bold">
                                            Summary
                                        </p>
                                        <p className="text-gray-600 text-xl">
                                            The conversation between the recruiter (Speaker A) and the candidate (Speaker B) is brief and does not provide any substantial information about the candidate. Speaker A attempts to initiate the interview but encounters an issue with the candidate's availability, as Speaker B does not respond affirmatively. Consequently, there are no details regarding the candidate's qualifications, experience, or any other relevant attributes that would typically be included in a summary. The interaction ends without any meaningful insights into the candidate's profile.
                                        </p>
                                        <ol className="list-decimal text-xl px-6 py-4 border-b border-slate-200/80">
                                            <li className="text-gray-900 font-bold">Types of positions interested in:<span className="text-gray-600 font-medium"> Contract and Permanent Position</span></li>
                                            <li className="text-gray-900 font-bold">Contract or Permanent Position preference:<span className="text-gray-600 font-medium"> Interested in both</span></li>
                                            <li className="text-gray-900 font-bold">Salary expectations or Hourly Rate:<span className="text-gray-600 font-medium"> Not mentioned</span></li>
                                            <li className="text-gray-900 font-bold">Notice period or availability:<span className="text-gray-600 font-medium"> Not specified</span></li>
                                            <li className="text-gray-900 font-bold">Citizenship status:<span className="text-gray-600 font-medium "> Not specified</span></li>
                                            <li className="text-gray-900 font-bold">Current location:<span className="text-gray-600 font-medium "> Not specified</span></li>
                                            <li className="text-gray-900 font-bold">Police Check status:<span className="text-gray-600 font-medium "> Not mentioned</span></li>
                                            <li className="text-gray-900 font-bold">Security Clearance status:<span className="text-gray-600 font-medium"> Not mentioned</span></li>
                                        </ol>
                                        <div className="text-gray-900 font-bold text-2xl pb-2">Full Transcript:</div>
                                        <div className="text-gray-900 font-bold text-xl">Recruiter: <span className="text-gray-600 font-medium">Hello. So basically from screening templates, types of position interview, interested in contract and permanent position salary and or.</span></div>
                                        <div className="text-gray-900 font-bold text-xl">Candidate: <span className="text-gray-600 font-medium">Notice period or availability, citizenship candidate, location policy check, security clearance.</span></div>
                                        <div className="text-gray-900 font-bold text-xl">Recruiter: <span className="text-gray-600 font-medium">Can you help me.</span></div>
                                        <div className="text-gray-900 font-bold text-xl border-b border-slate-200/80 pb-8">Candidate: <span className="text-gray-600 font-medium">Out any of the issue or not? Thank you.</span></div>
                                        <div className="text-gray-900 text-2xl font-bold">Select a template to get answer</div>

                                        <div className="grid grid-cols-3 gap-4 px-6 ">

                                            {template_card.map((val, index) => {
                                                return <div className="flex  flex-col px-4 py-4 bg-white border-2 border-slate-200/80 rounded-xl">
                                                    <div className="font-bold text-lg ">{val.title}</div>
                                                    <div className="flex justify-between border-b pb-4 pt-2 border-gray-200 gap-x-6">
                                                        <ul className={`text-md list-disc list-inside ${cat_bg_color[index]} ${cat_text_color[index]} px-2`} >
                                                            <li>Category: {val.category}</li>
                                                        </ul>
                                                        <div className="opacity-70">Last Used: Oct 28,2025</div>

                                                    </div>
                                                    <div className="py-4 ">
                                                        <div className="text-gray-700 ">{val.description}</div>
                                                        <ul className='text-md list-disc list-inside px-2 pt-2 text-gray-500' >

                                                            {val.points.map((pt) => {
                                                                return <li>{pt}</li>
                                                            })}

                                                        </ul>

                                                    </div>

                                                    <div className="flex justify-between items-center pt-4 pt-auto mt-auto">
                                                        <button className=" bg-slate-300/70 rounded rounded-full text-gray-500 px-4 h-12 lg:h-10 font-semibold" onClick={() => handlePreview(val)}>Preview</button>

                                                        <button className=" bg-blue-500 rounded rounded-full text-white px-6 h-8 lg:h-10 text-extrabold">Use Template</button>
                                                    </div>
                                                </div>

                                            })}

                                            {/* {Array.from({length:3}).forEach(()=>{

                                        })} */}
                                        </div>

                                        <div className="grid grid-cols-3 gap-4 px-6 pt-6 ">

                                            {[1, 2, 3].map(() => {
                                                return <div className="flex  flex-col px-4 py-4 bg-slate-200/80  rounded-xl">

                                                    <div className="flex justify-between border-b pb-4 pt-2 border-white gap-x-6">
                                                        <div className="font-bold text-xl ">{second_template_card.title}</div>
                                                        <img src='https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/oxwuxu23_expires_30_days.png' className='size-8 text-white' />


                                                    </div>
                                                    <div className="py-4 text-md font-medium px-2 text-gray-600">

                                                        <ul className='list-disc list-inside py-2 ' >

                                                            {second_template_card.points.map((val, _) => {
                                                                return <li> {val}</li>
                                                            })}

                                                        </ul>
                                                       
                                                    </div>

                                                    <div className="flex justify-between items-center p-2 mt-auto bg-white rounded-full gap-x-4">
                                                        <button className=" bg-white text-blue-500 border border-blue-500 rounded rounded-full py-2 px-4 h-full w-full font-semibold  " onClick={() => handlePreview(second_template_card)}>Preview</button>

                                                        <button className=" bg-blue-500 rounded rounded-full text-white px-6 h-full w-full text-extrabold  ">Use Template</button>
                                                    </div>
                                                </div>
                                            })}





                                        </div>

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

                    {openPreviewModal &&
                        (
                            <div
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                                aria-hidden="true"
                            >
                                <div className="relative w-full max-w-4xl h-[60vh] p-4 mx-10 ">
                                    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg  ">

                                        {/* Header */}
                                        <div className="flex items-center justify-between border-b  border-slate-200/80">
                                            <h3 className="text-2xl font-bold text-gray-900 p-6 ">
                                                Template Answers
                                            </h3>
                                            <button
                                                onClick={() => setOpenPreviewModal(false)}
                                                className="w-9 h-9 flex items-center justify-center rounded border-2 rounded-full mx-12"
                                            >
                                                ✕
                                            </button>

                                        </div>

                                        {/* Body */}
                                        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                                            <p className="text-gray-900 text-2xl font-bold">
                                                {previewData?.title}
                                            </p>
                                            {previewData.category && <div className="text-gray-900 font-bold text-xl">Category: <span className="text-gray-600 font-medium">{previewData.category }</span></div>}
                                            {previewData.time && <div className="text-gray-900 font-bold text-xl">Recruiter: <span className="text-gray-600 font-medium">{previewData?.time}</span></div>}

                                            <div className="text-gray-700 text-lg">{previewData?.description}</div>

                                            <div className="text-gray-700 text-lg font-semibold italic">Points</div>
                                    
                                            <ul className='text-md list-disc list-inside px-2  text-gray-500' ></ul>
                                               {previewData.points.map((val,index)=>{
                                                return <li className="ms-8">{val}</li>
                                               })}
                                            


                                        </div>



                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>

        </>
    )
}