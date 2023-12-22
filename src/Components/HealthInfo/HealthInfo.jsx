const HealthInfo = () => {
    const infos = [
        {
            "icon": "https://i.ibb.co/sgCPHgv/Frame-2846.png",
            "name": "Pulse Count",
            "range": "60 bpm",
            "status": "Normal"
        },
        {
            "icon": "https://i.ibb.co/V2n58YM/Frame-2846-1.png",
            "name": "Blood Pressure",
            "range": "110/70 mmHg",
            "status": "Slightly higher"
        },
        {
            "icon": "https://i.ibb.co/zGsTTDK/Frame-2846-2.png",
            "name": "Oxygen Saturation",
            "range": "97 %",
            "status": "Slightly higher"
        },
        {
            "icon": "https://i.ibb.co/sgCPHgv/Frame-2846.png",
            "name": "Glucose Count",
            "range": "100 mm/dL",
            "status": "Normal"
        }
    ]
    console.log(infos);
    return (
        <div className="px-4 md:px-0 py-8">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
                {
                    infos.map((info)=> <div style={{boxShadow: '0px 3.29px 4.113px 0px rgba(0, 0, 0, 0.20)'
                    , 

                }} className="border p-3 rounded-md border-[#EDEBEB] bg-white dark:bg-[#2c2221] dark:border-[#2c2221] dark:text-white" key={info.name}>
                        <img src={info.icon} alt="" />
                        <h3 className="text-[#2E1619] dark:text-[#D1D5DB] text-[12.5px] font-semibold tracking-wide mt-1 mb-2">{info.name}</h3>
                        <h1 className="text-[#4A3D3F] dark:text-[#D1D5DB] text-[15px] font-semibold">{info.range}</h1>
                        <p className="text-[#03922B] dark:text-[#D1D5DB] text-[11.5px] font-extrabold">{info.status}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HealthInfo;