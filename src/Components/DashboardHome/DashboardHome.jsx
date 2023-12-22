import Appoinments from "../Appointments/Appoinments";
import Banner from "../Banner/Banner";
import Covid19Update from "../Covid19Update/Covid19Update";
import HealthInfo from "../HealthInfo/HealthInfo";
import Navbar from "../NavBar/Navbar";
import Todo from "../ToDo/ToDo";

const DashboardHome = () => {
    return (
        <div className="">
            <Navbar/>
            <div className="lg:flex justify-between md:pl-[45px] md:pr-[22px]">
                <div className="xl:w-[px] lg:w-[55%] mb-4">
                    <Banner/>
                    <HealthInfo/>
                    <div className="hidden lg:block">
                    <Todo/>
                    </div>
                    <div className="md:hidden">
                    <Appoinments/>
                    </div>
                </div>
                <div className="xl:w-[490px] lg:w-[40%]">
                    <div className="hidden md:block">
                    <Appoinments/>
                    </div>
                    <div className="mt-4 block lg:hidden">
                    <Todo/>
                    </div>
                    <Covid19Update/>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;