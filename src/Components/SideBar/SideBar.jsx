import { useState } from "react";
import { Outlet } from "react-router-dom";

const SideBar = () => {
    const [hideText, setHideText] = useState('')
    const [sidebarWidth, setSidebarWidth] = useState('')
    const [changeLogo, setChangeLogo] = useState(true)
    const removeSideBar = () => {
        setHideText('hidden')
        setSidebarWidth('w-[96px]')
        setChangeLogo(false)
    }
    const showSideBar = () => {
        setHideText('');
        setSidebarWidth('w-[264px]');
        setChangeLogo(true)
    }
    return (
        <div className="drawer md:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-[#F9F9F9]">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="md:hidden">
                <img onClick={showSideBar} className={`w-12 m-2`} src="https://i.ibb.co/FszfVvn/Icon-Menu.png" alt="" />
                </label>
                <Outlet/>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className={`menu ${sidebarWidth} w-[264px] min-h-full bg-[#fff] text-base-content`}>
                    <div className="flex justify-between gap-8 mx-auto">
                        {changeLogo ?
                            <div className="flex items-center gap-4 text-[24px] font-bold">
                                <img src="https://i.ibb.co/HPMMyfh/Icon-Vector.png" className="w-10" alt="jf" />
                                <h1 className="text-[#384449]">Medi<span className="text-[#FF7594]">Doc</span></h1>
                            </div> :
                            <img onClick={showSideBar} className={`w-12 mx-auto`} src="https://i.ibb.co/FszfVvn/Icon-Menu.png" alt="" />
                        }
                        <img onClick={removeSideBar} className={`w-[40px] ${hideText}`} src="https://i.ibb.co/sm3WYmD/Icon-Side-Arrow-round.png" alt="" />
                    </div>
                    {/* Sidebar content here */}
                    <li className={`text-[16px] mt-[107px] font-mono ${changeLogo ? '' : 'mx-auto'}`}><a><img className="w-8" src="https://i.ibb.co/fYjhfBf/Icon-home.png" alt="" /><span className={`${hideText}`}>Home</span></a></li>
                    <li className={`text-[16px] mt-5 font-mono ${changeLogo ? '' : 'mx-auto'}`}><a><img className="w-8" src="https://i.ibb.co/4Z3dm3h/Icon-Patient-Profile.png" alt="" /><span className={`${hideText}`}>Patient Profile </span></a></li>
                    <li className={`text-[16px] mt-5 font-mono ${changeLogo ? '' : 'mx-auto'}`}><a><img className="w-8" src="https://i.ibb.co/0mPtGsz/Icon-Appointment.png" alt="" /><span className={`${hideText}`}>Appointments</span></a></li>
                    <li className={`text-[16px] mt-5 font-mono ${changeLogo ? '' : 'mx-auto'}`}><a><img className="w-8" src="https://i.ibb.co/vkDys3Z/Icon-medical-history.png" alt="" /><span className={`${hideText}`}>Medical History</span></a></li>
                    <li className={`text-[16px] mt-5 font-mono ${changeLogo ? '' : 'mx-auto'}`}><a><img className="w-8" src="https://i.ibb.co/nnB8tcp/Icon-Settings.png" alt="" /><span className={`${hideText}`}>Settings</span></a></li>
                    {/* <li><a>Sidebar Item 2 <span className={`${hideText}`}>Home</span></a></li> */}
                    <li className={`text-[16px] mt-5 font-mono ${changeLogo ? '' : 'mx-auto'} mt-[80px]`}><a><img className={`w-10 ${changeLogo ? 'hidden' : ' '}`} src="https://i.ibb.co/QXHnDhZ/round.png" alt="" /><span style={{background: 'linear-gradient(101deg, #FF7594 -6.58%, #FF7C65 102.46%)'}} className={`${hideText} text-white p-3 rounded-sm`}>New Appointment</span></a></li>
                    {/* <button style={{background: 'linear-gradient(101deg, #FF7594 -6.58%, #FF7C65 102.46%)'}} className="">New appointment</button> */}
                </ul>

            </div>
        </div>
    );
};

export default SideBar;