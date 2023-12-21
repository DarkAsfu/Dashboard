import './Covid19Update.css'
const Covid19Update = () => {
    const data = [
        {
            "name": "Infection Number",
            "number": "500"
        },
        {
            "name": "Total Infection",
            "number": "500000"
        },
        {
            "name": "Infection Rate",
            "number": "10%"
        },
        {
            "name": "Infection Rate",
            "number": "20"
        }
    ]
    return (
        <div className="bg-[#fff] p-4 my-4 rounded-lg" style={{border: '1px solid #EDEBEB'}} >
            <div className='flex justify-between'>
                <h1 className='covid-title'>Covid-19 Updates</h1>
                <div>
                    <p className='covid-title'>10 September 2022</p>
                    <p className='second-title'>Thursday  10:00:00 AM</p>
                </div>
            </div>
            <div className='md:flex justify-between items-center mt-2'>
                <img src="https://i.ibb.co/sqfgnmW/Svg-sample2.png" className='w-[228px] md:w-[210px] mx-auto' alt="" />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 pr-3 py-2 text-center w-[200px] md:w-[100%] mx-auto rounded-lg' style={{background: 'linear-gradient(101deg, #FF7594 -6.58%, #FF7C65 102.46%)'}}>
                    {
                        data.map(d => (
                            <div key={d.name} className='mt-4'>
                                <h1 className='text-[14px] text-[#fff]'>{d.name}</h1>
                                <p className='text-[24px] text-white font-bold'>{d.number}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Covid19Update;