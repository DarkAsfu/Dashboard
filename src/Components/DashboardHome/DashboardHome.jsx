import Appoinments from "../Appointments/Appoinments";
import Banner from "../Banner/Banner";
import HealthInfo from "../HealthInfo/HealthInfo";
import Navbar from "../NavBar/Navbar";

const DashboardHome = () => {
    return (
        <div>
            <Navbar/>
            <div className="lg:flex justify-between md:pl-[45px] md:pr-[22px]">
                <div className="xl:w-[px] lg:w-[55%] ">
                    <Banner/>
                    <HealthInfo/>
                </div>
                <div className="xl:w-[490px] lg:w-[40%]">
                    <Appoinments/>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;