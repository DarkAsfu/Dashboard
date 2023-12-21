const Banner = () => {
    return (
        <div className='md:rounded-lg' style={{background: 'linear-gradient(92deg, #FF7594 19.86%, #FF797B 84.16%, #FF7C65 139.72%)'}}>
            <div className='md:flex justify-between items-center gap-10 '>
                <div className='flex justify-center md:justify-start'>
                    <img className='w-[230px]' src="https://i.ibb.co/gRzStH8/Svg-sample1.png" alt="" />
                </div>
                <div className='pr-8 leading-[34px] pl-[32px] pb-[69px] md:pl-[0] md:pb-[0]'>
                    <h1 className='text-[#fff] text-[24px] font-semibold tracking-wider '>Hello, Mary Jane!</h1>
                    <p className='text-[#fff] text-[16px] font-medium tracking-[0.16px]'>Stay Up-to-Date with your appointments.</p>
                    <p className='text-[#fff] text-[16px] font-medium tracking-[0.16px]'>You Have No pending Reports</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;