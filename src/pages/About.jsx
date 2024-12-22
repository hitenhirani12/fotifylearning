import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-black items-center justify-center text-white">
            <div className="max-w-4xl mx-auto mt-24 w-full px-6">
                {/* Left Section */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl font-bold mb-4">Meet the Team Behind Cybrary</h1>
                        <p className="text-lg mb-6">
                            Cybrary is a growing community where people, companies, and training come together
                            to give everyone the ability to collaborate in an open-source way that is
                            revolutionizing the cybersecurity educational experience.
                        </p>
                        <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg">
                            Start Learning for Free
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1 bg-white text-black p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">
                            Create a free account to start exploring the platform.
                        </h2>
                        <form>
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-pink-600"
                            />
                            <button
                                type="submit"
                                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold"
                            >
                                Create a Free Account
                            </button>
                        </form>
                        <p className="text-center my-4 text-gray-500">or sign up with</p>
                        <div className="flex justify-center gap-4 mb-4">
                            <button className="p-3 border border-gray-300 rounded-lg">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                                    alt="Google"
                                    className="w-6"
                                />
                            </button>
                            <button className="p-3 border border-gray-300 rounded-lg">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
                                    alt="Apple"
                                    className="w-6"
                                />
                            </button>
                            <button className="p-3 border border-gray-300 rounded-lg">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                                    alt="Microsoft"
                                    className="w-6"
                                />
                            </button>
                        </div>
                        <div className="text-center">
                            <a href="#" className="text-pink-600 font-semibold">
                                View all SSO options
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-black text-white py-10">
                <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

                    <div>
                        <p class="text-4xl font-bold text-gradient">2.5M+</p>
                        <p class="mt-2 text-sm uppercase text-gray-400">Registered Users</p>
                    </div>

                    <div>
                        <p class="text-4xl font-bold text-gradient">96%</p>
                        <p class="mt-2 text-sm uppercase text-gray-400">Of Fortune 1000 Use Cybrary</p>
                    </div>

                    <div>
                        <p class="text-4xl font-bold text-gradient">1000+</p>
                        <p class="mt-2 text-sm uppercase text-gray-400">Expert Contributors</p>
                    </div>

                    <div>
                        <p class="text-4xl font-bold text-gradient">500M+</p>
                        <p class="mt-2 text-sm uppercase text-gray-400">Learning Minutes Delivered</p>
                    </div>
                </div>
            </div>

            <div class="bg-black text-white py-10">
                <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    <div>
                        <h2 class="text-3xl md:text-4xl font-bold mb-4">
                            Making the industry more accessible
                        </h2>
                        <ul class="space-y-4">
                            <li class="flex items-start">
                                <span class="flex-shrink-0 w-6 h-6 mr-3 text-gray-400">

                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.5V11a6 6 0 10-12 0v3.5c0 .39-.1.757-.293 1.095L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9" />
                                    </svg> */}
                                </span>
                                <p>
                                    Cybrary is a platform for learning about cybersecurity and IT. It offers online courses and tools that allow people to learn from anywhere at any time.
                                </p>
                            </li>
                            <li class="flex items-start">
                                <span class="flex-shrink-0 w-6 h-6 mr-3 text-gray-400">

                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l-4-4m0 0l4-4m-4 4h16" />
                                    </svg> */}
                                </span>
                                <p>
                                    Cybrary has received industry recognition since its 2015 founding, often being named as an innovator and pioneer in cyber and IT development.
                                </p>
                            </li>
                            <li class="flex items-start">
                                <span class="flex-shrink-0 w-6 h-6 mr-3 text-gray-400">

                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 6c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
                                    </svg> */}
                                </span>
                                <p>
                                    Since January 2015, Cybrary has grown its user base to over 2 million and has 96% of Fortune 1000 companies learning on their platform.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div class="relative">
                        <div class="rounded-lg overflow-hidden border border-gray-700 p-1" style="background: linear-gradient(135deg, #ff7eb3, #ff758c);">
                            <img
                                src="path-to-image.jpg"
                                alt="Team working"
                                class="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default About;