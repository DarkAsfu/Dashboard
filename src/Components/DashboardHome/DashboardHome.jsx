import Banner from "../Banner/Banner";
import Navbar from "../NavBar/Navbar";

const DashboardHome = () => {
    return (
        <div>
            <Navbar/>
            <div className="lg:flex justify-between md:pl-[45px] md:pr-[22px]">
                <div className="xl:w-[660px] lg:w-[60%] ">
                    <Banner/>
                </div>
                <div className="xl:w-[436px] lg:w-[40%]  border">2</div>
            </div>
        </div>
    );
};

export default DashboardHome;