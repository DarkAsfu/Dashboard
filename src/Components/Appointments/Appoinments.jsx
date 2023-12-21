import './Appointments.css'
const Appoinments = () => {
    return (
        <div className="bg-[#fff] p-4 rounded-md" style={{ border: "0.769px solid #EDEBEB" }}>
            <h1 className='title'>Upcoming Appointments</h1>
            <div className='relative'>
                <ul className="timeline timeline-vertical right-44 md:right-52 mt-6">
                    <li>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                <circle cx="5" cy="5.95679" r="5" fill="#FF9898" />
                            </svg>
                        </div>
                        <div className="timeline-end">
                            <div className='flex min-w-max pl-3'>
                                <div className='p-3 rounded-2xl text-center z-10 bg-white' style={{ border: '0.769px solid #EDEBEB' }}>
                                    <p className='text-[#646F75] text-[10px] md:text-[13px] font-semibold'>2022</p>
                                    <p className='text-[#384449] text-[15px] md:text-[20px] font-semibold'>13</p>
                                    <p className='text-[#646F75] text-[15px] md:text-[20px] font-semibold'>Sep</p>
                                </div>
                                <div className='bg-[#FFF5F5] p-3 rounded-2xl -ml-2' style={{ border: '0.769px solid #FDDAD6' }}>
                                    <h1 className='text-[#384449] text-[16px] md:text-[20px] font-semibold'>Dr. Muhammad Abdul Hussein</h1>
                                    <p className='text-[#2E1619] text-[10px] md:text-[16px] '>Cardiologist</p>
                                    <div className='flex gap-3'>
                                        <p className='bg-[#fff] p-[6px] md:p-2 rounded-xl ' style={{ border: '1px solid #F5F5F5' }}><span className='mr-2 text-[14px] text-[#8A8686] ' style={{ fontWeight: '600' }}>Slot</span>Morning</p>
                                        <p className='bg-[#fff] p-[6px] md:p-2 rounded-xl ' style={{ border: '1px solid #F5F5F5' }}><span className='mr-2 text-[14px] text-[#8A8686] font-semibold'>Time</span> 10.00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                <circle cx="5" cy="5.95679" r="5" fill="#FFF598" />
                            </svg>
                        </div>
                        <div className="timeline-end">
                            <div className='flex min-w-max pl-3'>
                                <div className='p-3 rounded-2xl text-center z-10 bg-white' style={{ border: '0.769px solid #EDEBEB' }}>
                                    <p className='text-[#646F75] text-[10px] md:text-[13px] font-semibold'>2022</p>
                                    <p className='text-[#384449] text-[15px] md:text-[20px] font-semibold'>13</p>
                                    <p className='text-[#646F75] text-[15px] md:text-[20px] font-semibold'>Sep</p>
                                </div>
                                <div className='bg-[#FFF5F5] p-3 rounded-2xl -ml-2' style={{ border: '0.769px solid #FDDAD6' }}>
                                    <h1 className='text-[#384449] text-[16px] md:text-[20px] font-semibold'>Dr. Muhammad Abdul Hussein</h1>
                                    <p className='text-[#2E1619] text-[10px] md:text-[16px] '>Cardiologist</p>
                                    <div className='flex gap-3'>
                                        <p className='bg-[#fff] p-[6px] md:p-2 rounded-xl ' style={{ border: '1px solid #F5F5F5' }}><span className='mr-2 text-[14px] text-[#8A8686] ' style={{ fontWeight: '600' }}>Slot</span>Morning</p>
                                        <p className='bg-[#fff] p-[6px] md:p-2 rounded-xl ' style={{ border: '1px solid #F5F5F5' }}><span className='mr-2 text-[14px] text-[#8A8686] font-semibold'>Time</span> 10.00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                <circle cx="5" cy="5.95679" r="5" fill="#98FFC1" />
                            </svg>
                        </div>
                        <div className="timeline-end">
                            <div className='flex min-w-max pl-3'>
                                <div className='p-3 rounded-2xl text-center z-10 bg-white' style={{ border: '0.769px solid #EDEBEB' }}>
                                    <p className='text-[#646F75] text-[10px] md:text-[13px] font-semibold'>2022</p>
                                    <p className='text-[#384449] text-[15px] md:text-[20px] font-semibold'>13</p>
                                    <p className='text-[#646F75] text-[15px] md:text-[20px] font-semibold'>Sep</p>
                                </div>
                                <div className='bg-[#FFF5F5] p-3 rounded-2xl -ml-2' style={{ border: '0.769px solid #FDDAD6' }}>
                                    <h1 className='text-[#384449] text-[16px] md:text-[20px] font-semibold'>Dr. Muhammad Abdul Hussein</h1>
                                    <p className='text-[#2E1619] text-[10px] md:text-[16px] '>Cardiologist</p>
                                    <div className='flex gap-3'>
                                        <p className='bg-[#fff] p-[6px] md:p-2 rounded-xl ' style={{ border: '1px solid #F5F5F5' }}><span className='mr-2 text-[14px] text-[#8A8686] ' style={{ fontWeight: '600' }}>Slot</span>Morning</p>
                                        <p className='bg-[#fff] p-[6px] md:p-2 rounded-xl ' style={{ border: '1px solid #F5F5F5' }}><span className='mr-2 text-[14px] text-[#8A8686] font-semibold'>Time</span> 10.00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                <circle cx="5" cy="5.95679" r="5" fill="#98C7FF" />
                            </svg>
                        </div>
                        <div className="timeline-end">
                            <div className='flex min-w-max pl-3'>
                                <div className='p-3 rounded-2xl text-center z-10 bg-white' style={{ border: '0.769px solid #EDEBEB' }}>
                                    <p className='text-[#646F75] text-[10px] md:text-[13px] font-semibold'>2022</p>
                                    <p className='text-[#384449] text-[15px] md:text-[20px] font-semibold'>13</p>
                                    <p className='text-[#646F75] text-[15px] md:text-[20px] font-semibold'>Sep</p>
                                </div>
                                <div className='bg-[#FFF5F5] p-3 rounded-2xl -ml-2' style={{ border: '0.769px solid #FDDAD6' }}>
                                    <h1 className='text-[#384449] text-[16px] md:text-[20px] font-semibold'>Dr. Muhammad Abdul Hussein</h1>
                                    <p className='text-[#2E1619] text-[10px] md:text-[16px] '>Cardiologist</p>
                                    <div className='flex gap-3'>
                                        <p className='bg-[#fff] p-[6px] md:p-2 rounded-xl ' style={{ border: '1px solid #F5F5F5' }}><span className='mr-2 text-[14px] text-[#8A8686] ' style={{ fontWeight: '600' }}>Slot</span>Morning</p>
                                        <p className='bg-[#fff] p-[6px] md:p-2 rounded-xl ' style={{ border: '1px solid #F5F5F5' }}><span className='mr-2 text-[14px] text-[#8A8686] font-semibold'>Time</span> 10.00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Appoinments;