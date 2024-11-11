import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../../store/signupPopupSlice';
import SignupPopup from '../../loginSystem/SignupPopup';


function SignupComponent() {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center justify-between w-4/5  text-white ">
            <div className='w-2/5'>
                <h2 className='text-5xl'>Start Salesforce Training for <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-pink-700 to-pink-700'>Free </span> Today</h2>
                <p className='text-xl text-gray-400 mt-4'>Join thousands of professionals and leading companies enhancing their Salesforce skills and
                    capabilities with SkillAdvance. Begin your journey with our free introductory courses and
                    experience the benefits of world-class Salesforce training.</p>
            </div>
            <div className="bg-white text-black p-12 rounded-3xl shadow-lg w-1/2 h-[400px] ">
                <h2 className="text-4xl mb-12">Create a free account</h2>
                <div className="w-full flex px-3 py-2 mb-8 rounded-3xl border border-gray-600 text-black focus-within:ring-2 focus-within:ring-pink-500">
                    <input
                        type="email"
                        placeholder="name@email.com"
                        className="w-full p-1 rounded text-xl placeholder-gray-400 focus:outline-none"
                    />
                        <button onClick={() => dispatch(togglePopup())}
                        className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl text-white font-semibold hover:shadow-[0px_0px_10px_purple,0px_0px_10px_#FF4D6D] duration-500">
                            Create a Free Account
                        </button>
    
                    <SignupPopup/>
                </div>

                <div className="flex justify-around items-center mt-8">
                    <span className='text-gray-600'>or sign up with</span>
                    <span className='flex gap-12'>
                        <button
                            onClick={() => window.location.href = 'https://google.com'}
                            className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center cursor-pointer "
                            aria-label="Sign up with Google"
                        >
                            {/* Replace with a Google icon SVG or image */}
                            <img src="https://lh3.googleusercontent.com/qnaJEbFIpvsWJm2KrRI_GIvz1yZdXntgEsCZxy-1pVZi244bCk1RFwdk0ZBRmmvdHiUl6sIa_tsmskL5WLKiigp2AMsIIxinOJNf39qCmacViRGXIOY" alt="" />
                        </button>
                        <button
                            onClick={() => window.location.href = 'https://apple.com'}
                            className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center cursor-pointer "
                            aria-label="Sign up with Apple"
                        >
                            {/* Replace with an Apple icon SVG or image */}
                            <img src="https://static.vecteezy.com/system/resources/previews/019/136/322/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg" alt="" />
                        </button>
                        <button
                            onClick={() => window.location.href = 'https://microsoft.com'}
                            className="w-12 h-12 border border-black p-1 rounded flex items-center justify-center cursor-pointer "
                            aria-label="Sign up with Microsoft"
                        >
                            {/* Replace with a Microsoft icon SVG or image */}
                            <img src="https://static-00.iconduck.com/assets.00/microsoft-icon-1024x1024-5w26drb6.png" alt="" />
                        </button>
                    </span>
                </div>

                <div className="w-full flex justify-between text-lg  p-6 mt-8 border-t">
                    <NavLink to="/signup" className="hover:underline">Sign in</NavLink>
                    <NavLink to="/sso-options" className="hover:underline">View all SSO options</NavLink>
                </div>
            </div>
        </div>
    );
}

export default SignupComponent;
