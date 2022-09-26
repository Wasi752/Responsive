import Header from "./Header";
import Navbar2 from "./Navbar2";
import Advertise from "./Advertise";

function Home (){
    return(
        <div className="w-full h-full">
            <div className="w-full h-20 md:h-36 lg:h-1/6 lg:ml-20">
                    
                <Header/>
            </div>
            <div className="w-full h-16 bg-yellow-200 hidden md:block">
                <Navbar2/>
            </div>
            <div className="hidden md:block w-full h-32 bg-blue-200">
                <Advertise clip = "cityGrup.jpeg"/>
            </div>
            <div className="w-full h-80 bg-yellow-200 md:w-[32%]">B</div>
            <div className="w-full h-48 bg-pink-200 md:w-[32%]"></div>
        </div>
    );
}
export default Home;