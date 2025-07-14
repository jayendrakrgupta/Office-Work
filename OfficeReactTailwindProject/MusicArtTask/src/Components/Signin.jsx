import React from 'react';
import MainLogo from '../Asset/MainLogo.png';

const Signin = (props) => (
    <>
        <div className="flex flex-col justify-center items-center min-h-[40vw]  min-w-[50vw] text-xs p-5" >
                <div className="flex items-center justify-center text-[#2e0052] text-xs p-5 gap-2" >
                        <img className="flex align-baseline w-10 h-10 " src={MainLogo} alt="Musicart Logo" />
                <span className="flex align-baseline text-2xl font-bold">Musicart</span>
                </div>
                <div className="flex-col px-20 py-10 items-center justify-center border-2 border-gray-400 rounded-lg min-w-full  text-[#2e0052] text-xs " >
                        <h2 className="text-4xl py-2 ">Sign in</h2> 
                        <h4 className="font-bold text-lg text-4xl py-2 ">Enter your email or mobile number</h4>
                        <input className="flex py-2 items-center justify-center  min-w-full min-h-10 border-1 text-4xl  border-gray-500 rounded-lg text-[#2e0052] text-lg p-2 " type="text" placeholder="Email or Mobile Number" />
                        <h4 className="font-bold text-lg py-2">Password</h4>
                        <input className="flex py-2 items-center justify-center  min-w-full min-h-10 border-1 text-4xl  border-gray-500 rounded-lg text-[#2e0052] text-lg p-2 " type="password" placeholder="Password" />
                        <button className="flex py-2 items-center justify-center min-w-full min-h-10 border-1 mt-4 border-gray-500 rounded-lg bg-[#2e0052] text-white text-xl p-2 ">Continue</button>
                        <a className="flex text-sm py-2">By continuing, you agree to Musicart privacy notice and conditions of use.</a>
                </div>
                <div className="flex items-center justify-center min-w-full text-[#2e0052] text-xs" >
                        <div className="flex items-center justify-center min-w-full text-[#2e0052] text-xs my-4">
                                <hr className="flex-grow border-t border-gray-300 mx-4" />
                                <span className="text-xl font-bold whitespace-nowrap">New to Musicart?</span>
                                <hr className="flex-grow border-t border-gray-300 mx-4" />
                        </div>
                </div>
                <div className="flex-col  items-center justify-center  min-w-full border-1 border-gray-300 rounded-lg text-[#2e0052]" >
                        <button className="flex-col py-3 items-center justify-center  min-w-full min-h-10 border-1 border-gray-500 rounded-lg text-[#2e0052] text-xl ">Create your Musicart account</button>
                </div>
        </div>
    </>
);

export { Signin};