import React from 'react';
import MainLogo from '../Asset/MainLogo.png';

const Signup = (props) => (
    <>
        <div className="flex flex-col justify-center items-center min-h-[45vw]  min-h-full text-xs p-5" >
                <div className="flex items-center justify-center text-[#2e0052] text-xs p-5 gap-2" >    
                        <img className="flex align-baseline w-15 h-15 " src={MainLogo} alt="Musicart Logo" />
                <span className="flex align-baseline text-4xl font-bold">Musicart</span>
                </div>
                <div className="flex-col px-20 py-10 items-center justify-center border-2 border-gray-400 rounded-lg text-[#2e0052] text-xs " >
                        <h2 className="text-4xl py-2 ">Creat Account</h2> 
                        <h4 className="font-bold text-lg text-4xl py-2 ">Your Name</h4>
                        <input className="flex py-2 items-center justify-center  min-w-full min-h-10 border-1 text-4xl  border-gray-500 rounded-lg text-[#2e0052] text-lg p-2 " type="text" placeholder="Your Full Name" />
                        <h4 className="font-bold text-lg text-4xl py-2 ">Mobile Number</h4>
                        <input className="flex py-2 items-center justify-center  min-w-full min-h-10 border-1 text-4xl  border-gray-500 rounded-lg text-[#2e0052] text-lg p-2 " type="number" placeholder="Mobile Number" />
                        <h4 className="font-bold text-lg text-4xl py-2 ">Your Email</h4>
                        <input className="flex py-2 items-center justify-center  min-w-full min-h-10 border-1 text-4xl  border-gray-500 rounded-lg text-[#2e0052] text-lg p-2 " type="email" placeholder="Your Email" />
                        <h4 className="font-bold text-lg py-2">Password</h4>
                        <input className="flex py-2 items-center justify-center  min-w-full min-h-10 border-1 text-4xl  border-gray-500 rounded-lg text-[#2e0052] text-lg p-2 " type="password" placeholder="Password" />
                        <p className="flex text-sm py-2 max-w-[30vw]">By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Musicart. Message and data rates may apply.
</p>
                        <button className="flex py-2 items-center justify-center min-w-full min-h-10 border-1 mt-4 border-gray-500 rounded-lg bg-[#2e0052] text-white text-xl p-2 ">Continue</button>
                        <a className="flex text-sm py-2">By continuing, you agree to <u><> </>Musicart privacy notice and conditions of use.</u></a>
                </div>
                <div className="flex items-center justify-center min-w-full text-[#2e0052] text-xs" >
                        <div className="flex items-center justify-center min-w-full text-[#2e0052] text-xs my-4 gap-2">
                                <hr className="flex-grow border-t border-gray-300 mx-2" />
                                <span className="text- font-bold whitespace-nowrap">Already have an account? </span>
                                <a className="text-lg underline whitespace-nowrap" href="#">Sign in</a>
                                <hr className="flex-grow border-t border-gray-300 mx-2" />
                        </div>
                </div>
        </div>
    </>
);
export { Signup };