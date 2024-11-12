import React from "react";

const Certifications = () => {
    return (
        <div className="h-screen">
            <div className="flex relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] justify-between items-center px-16 py-16 w-3/4 bg-[#111] text-white ">
                {/* Content Section */}
                <div className="max-w-md">
                    <h1 className="text-5xl mb-6">Cybersecurity Certification Prep</h1>
                    <p className="text-gray-400 mb-6">
                        Whether you are looking to start a new career, earn a certification, or protect your organization against an
                        evolving threat landscape, Cybrary has you covered.
                    </p>
                    <button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white py-3 px-6 rounded-md transition duration-300 hover:from-yellow-400 hover:to-pink-500">
                        Start Learning for Free
                    </button>
                </div>

                {/* Image Section */}
                <div className="flex gap-2 w-1/2">
                    <div className="relative w-full  h-80 rounded-lg overflow-hidden transform perspective-500 rotate-y-10 shadow-lg">
                        <img src="https://i.pinimg.com/originals/9c/7b/e4/9c7be43979a736a8695361a544630b97.jpg" alt="Certification 1" className="w-full h-full object-cover absolute top-0 right-32" />
                        <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-center py-2 opacity-0 hover:opacity-100 transition duration-300">
                            <h2 className="text-lg font-semibold">Penetration Testing and Ethical Hacking</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center bg-[#111] text-white py-16 px-8 mt-72 relative">

                <div className="flex max-w-5xl w-full gap-72">
                    {/* Image Section */}
                    <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 to-orange-400 p-5">
                        <img
                            src="https://i.pinimg.com/originals/9c/7b/e4/9c7be43979a736a8695361a544630b97.jpg"
                            alt="Exam Score Report"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute top-10 left-10 bg-white p-4 rounded-lg shadow-lg text-black w-[220px]">
                            <h2 className="text-xl font-bold">Exam Score Report</h2>
                            <p className="text-4xl font-bold text-green-500 my-2">85%</p>
                            <p className="text-sm text-gray-700">SCORE OF 54 QUESTIONS</p>
                            <table className="w-full mt-4 text-sm">
                                <thead>
                                    <tr>
                                        <th className="text-left">Topics</th>
                                        <th className="text-right">Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>All Questions</td>
                                        <td className="text-right">5</td>
                                    </tr>
                                    <tr>
                                        <td>Security and Risk Management</td>
                                        <td className="text-right">1</td>
                                    </tr>
                                    <tr>
                                        <td>Asset Security</td>
                                        <td className="text-right">0</td>
                                    </tr>
                                    <tr>
                                        <td>Communication and Network Security</td>
                                        <td className="text-right">1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center max-w-md">
                        <h1 className="text-4xl font-bold mb-4">Your Roadmap to Certification Success</h1>
                        <p className="text-gray-400 mb-8">
                            Follow Cybrary’s step-by-step approach to getting exam-ready. Quiz your knowledge to identify key focus
                            areas. Prepare with on-demand courses, then validate and apply what you learned with practice tests and
                            interactive virtual labs for a fraction of what a boot camp costs.
                        </p>
                        <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-3 px-8 rounded-full font-semibold transition duration-300 hover:from-orange-400 hover:to-pink-500">
                            Start Learning for Free
                        </button>
                    </div>
                </div>
            <div className="absolute bottom-0 right-0 bg-slate-300 bg-gradient-to-b from-bg-black to-transparent"></div>
            </div>
        </div>

    );
};

export default Certifications;
