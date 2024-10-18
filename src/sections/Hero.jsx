import React from 'react'
import phone from "../assets/phone.png"
import star from "../assets/star.png"
import apple from "../assets/apple.png"
import googleplay from "../assets/googleplay.png"

const Hero = () => {
  return (
    <div className='bg-hero-pattern bg-cover bg-no-repeat pt-10'>
        <div className='container items-center grid grid-cols-2'>
            <div>
                <div className='flex gap-4 items-center mb-2'>
                    <img src={star} alt="star" />
                    <p className='text-[20px] font-[500]'>Your Health, Our Priority.</p>
                </div>
                <h3 className='font-[800] text-[56px]'>Quality Healthcare, Anytime, Anywhere.</h3>
                <p className='font-[400] text-[#333333] w-[80%] mb-4'>Connect with top doctors, manage appointments, and access personalized healthcare - all in one app</p>
                <div className='flex gap-4'>
                    <button className='bg-black rounded-lg text-white px-4 flex items-center gap-3 py-2'>
                        <div>
                            <img src={apple} alt="" />
                        </div>
                        <div className='flex flex-col items-start leading-5'>
                            <p className='text-[12px]'> Download on the</p>
                            <h6 className='text-[20px]'>App Store</h6>
                        </div>
                    </button>
                    <button className='bg-black rounded-lg text-white px-4 flex items-center gap-3 py-2'>
                        <div>
                            <img src={googleplay} alt="" className='h-10'/>
                        </div>
                        <div className='flex flex-col items-start leading-5'>
                            <p className='text-[12px]'> GET IT ON</p>
                            <h6 className='text-[20px]'>Google Play</h6>
                        </div>
                    </button>
                </div>

                <div className="flex items-center mt-10">
                    <div className='pr-7 border-r border-[#555] leading-8 py-1'>
                        <p className='text-[#555] text-[20px]'>Active users</p>
                        <h5 className='text-[32px] font-[700]'>600k+</h5>
                    </div>
                    <div className='px-7 border-r border-[#555] leading-8 py-1'>
                        <p className='text-[#555] text-[20px]'>Downloads</p>
                        <h5 className='text-[32px] font-[700]'>30.5k+</h5>
                    </div>
                    <div className='px-7  border-[#555] leading-8 py-1'>
                        <p className='text-[#555] text-[20px]'>Reviews</p>
                        <h5 className='text-[32px] font-[700]'>1500+</h5>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
            
                <img src={phone} alt="" className='h-[724px] object-cover' />
            </div>
        </div>
    </div>
  )
}

export default Hero