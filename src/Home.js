
function Home (){
    return(
        <div className="w-full h-full text-3xl">
            <div className="w-full h-20 md:h-36 bg-green-200"></div>
            <div className="w-full h-16 bg-yellow-200 hidden md:block"></div>
            <div className="w-full h-32 bg-blue-200">A</div>
            <div className="w-full h-80 bg-yellow-200 md:w-[32%]">B</div>
            <div className="w-full h-48 bg-pink-200 md:w-[32%]"></div>
        </div>
    );
}
export default Home;