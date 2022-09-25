import Header from "./Header";

function Home (){
    return(
        <div className="w-full h-full">
            <div className="w-full h-20 md:h-36 lg:h-1/6 lg:ml-20">
                    
                        <div className="w-full h-20 md:h-36 lg:h-1/6 flex">
                                <div className="w-2/12 h-full md:w-1/12 md:h-36 lg:w-1/12 lg:h-1/6 flex flex-row">

                                            <img src="01lefts.jpeg" className="w-[40%] h-[30%] md:w-[20%] md:h-[20%] m-3"/>
                                            <img src="04searchicon.jpeg" className="w-[30%] h-[30%] m-3 hidden md:block"/>
                                </div>

                                <div className="w-8/12 h-full md:w-9/12 md:h-2/6 flex sm:justify-left md: justify-center">
                                    <img src="palo-bangla.svg" className="w-[60%] h-[60%] md:w-[23%] md:h-[23%] md:mt-5"/>
                                </div>

                                <div class="w-3/12 h-full md:w-[12%] md:h-full flex flex-row-reverse mt-5">
                                    <div class="w-[50%] h-[50%] md:w-[60%] md:h-[90%] md:mt-1 md:ml-8 md:mr-20 "><p className="border text-xl text-center p-1 hidden md:block">Login</p><img src="images.jpeg" className="w-[70%] h-[65%] block md:hidden"/></div>
                                    <div class="w-[50%] h-full mr-5 hidden md:block"><img src="01notifacatioicon.jpeg" className="h-[90%] w-full mt-1"/></div>
                                    <div className="w-[60%] h-[30%]  mr-5 border border-gray-200 rounded text-lg text-red-500 sm:block md:hidden">EN</div>
                                </div>
                        </div>
                        <div className="flex flex-row m-2 hidden md:block">
                                <div className="flex w-6/12">শনিবার, ১০ সেপ্টেম্বর ২০২২</div>
                                <div class="w-5/12 h-full text-md text-right">English Edition</div>
                    

                        </div>
            </div>
            <div className="w-full h-16 bg-yellow-200 hidden md:block"></div>
            <div className="w-full h-32 bg-blue-200">A</div>
            <div className="w-full h-80 bg-yellow-200 md:w-[32%]">B</div>
            <div className="w-full h-48 bg-pink-200 md:w-[32%]"></div>
        </div>
    );
}
export default Home;