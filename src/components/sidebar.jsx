import React from "react";
import { LuLaptop } from 'react-icons/lu';
import { BiSolidVideoRecording } from "react-icons/bi";
import { Link } from 'react-router'
export const Sidebar = () => {


    return (
        <>

            <div className="flex min-h-full">
                <aside className="w-[13vw] min-h-screen shadow-lg bg-white">
                    <div className=" w-full py-6 px-6 inline-flex border-b border-gray-200  ">
                        <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/5yhegyb9_expires_30_days.png"}
                            className="image size-10"
                        />
                        <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/040czdgg_expires_30_days.png"}
                            className="image2 size-10"
                        />
                    </div>

                    <div className=" pt3">

                        <div className="  text-blue-500 text-sm  font-bold py-3 px-3 mx-3">MENU</div>

                        <Link to='/'>
                            <div className="border bg-blue-500 font-semibold  text-blue-500 py-3 px-3 mx-3 rounded-lg text-white flex gap-x-2 items-center">
                                <div> <svg
                                    className="fill-current"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                                        fill="currentColor"
                                    />
                                </svg></div>
                                <div>Dashboard</div>
                            </div>
                        </Link>

                        <Link to='/'>
                            <div className="  py-3 px-3 mx-3 rounded-lg flex gap-x-2 items-center">
                                <div>                 <svg
                                    className="fill-current"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M7 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-6-6H7zm7 1.5L18.5 8H14a.5.5 0 0 1-.5-.5V3.5zM8 13h8v1.5H8V13zm0 3h8v1.5H8V16zm0-6h5v1.5H8V10z"
                                    />

                                </svg></div>
                                <div>Templates</div>
                            </div>
                        </Link>

                        <Link to='/'>
                            <div className=" py-3 px-3 mx-3 rounded-lg flex gap-x-2 items-center">
                                <div> <svg
                                    className="w-[22px] h-[22px]"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
                                    />
                                </svg></div>
                                <div>Summaries</div>
                            </div>
                        </Link>

                        <Link to='/'>
                            <div className=" py-3 px-3 mx-3 rounded-lg flex gap-x-2 items-center">
                                <div><LuLaptop className="w-[22px] h-[22px]" /></div>
                                <div>Booking System</div>
                            </div>
                        </Link>

                        <Link to='/'>
                            <div className=" py-3 px-3 mx-3 mx-3rounded-lg flex gap-x-2 items-center">
                                <div><BiSolidVideoRecording className="w-[22px] h-[22px]" /></div>
                                <div>In Person Meeting</div>
                            </div>
                        </Link>

                        <Link to='/'>
                            <div className=" py-3 px-3 mx-3 rounded-lg flex gap-x-2 items-center">
                                <div></div>
                                <div>Analytics</div>
                            </div>
                        </Link>

                        <Link to='/'>
                            <div className=" py-3 px-3 mx-3 rounded-lg flex gap-x-2 items-center">
                                <div></div>
                                <div>Company Branding</div>
                            </div>
                        </Link>

                        <div className="border-b mt-8 border-gray-200 flex gap-x-2 items-center"></div>


                        <div className="  text-blue-500 text-sm  font-bold pt-6 px-3 mx-3  ">SUPPPORT</div>

                        <Link to='/'>
                            <div className=" py-3 px-3 mx-3 rounded-lg flex gap-x-2 items-center">
                                <div></div>
                                <div>Manage Account</div>
                            </div>
                        </Link>

                        <Link to='/'>
                            <div className="  py-3 px-3 mx-3 rounded-lg flex gap-x-2 items-center">
                                <div></div>
                                <div>Settings</div>
                            </div>
                        </Link>

                        <Link to='/'>
                            <div className=" py-3 px-3 mx-3 rounded-lg flex gap-x-2 items-center">
                                <div></div>
                                <div>Notification</div>
                            </div>
                        </Link>

                        <Link to='/'>
                            <div className=" py-3 px-3 mx-3 rounded-lg flex gap-x-2 items-center">
                                <div></div>
                                <div>FAQ</div>
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className=" py-3 px-3 mx-3 mx-3 rounded-lg flex gap-x-2 items-center">
                                <div></div>
                                <div>Logout</div>
                            </div>
                        </Link>

                        <div className="view2 h-30"
                            style={{
                                backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/6841w8nw_expires_30_days.png)',
                            }}
                        >
                            <span className="text6" >
                                {"DOWNLOAD OUR MOBILE APP"}
                            </span>
                            <div className="flex items-end"><img
                                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/5vC3DNNPvT/cpuitbms_expires_30_days.png"}
                                className="absolute-image"
                            /></div>
                        </div>


                    </div>

                </aside>
            </div>
            </>
            )
}