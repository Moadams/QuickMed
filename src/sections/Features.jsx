import React from 'react'
import star from "../assets/star.png"
import cold from '../assets/cold.png'

const Features = () => {
  return (
    <div className='container py-20'>
        <div className="flex items-center justify-center gap-2">
            <img src={star} alt="" />
            <h6 className='text-[18px] font-[500]'>
                Key Features     
            </h6>
        </div>
        <h2 className='text-center text-[40px] font-[700] w-[80%] m-auto mt-4'>
            Experience Personalized Health Care at Your Fingertips.
        </h2>

        <div className='flex'>
            <div className="bg-[#40A2B51A] px-4 py-6 w-[400px] rounded-[12px]">
                <h5 className='font-[700] text-[20px] mb-2'>Quick Access to conditions</h5>
                <p className='text-[14px] text-[#222222]'>Quickly access information about common health issues, symptoms and treatments to make more informed decisions.</p>
                <div className='mt-3 bg-[#0000000F] rounded-[12px] px-2 py-3'>
                    <h6 className='text-[15px] font-[700]'>Quick Access</h6>
                    <div className="grid grid-cols-4 mt-3 gap-4">
                        <div className="bg-white rounded-[6px] px-2 py-3 flex flex-col gap-3 items-center">
                            <img src={cold} alt=""  className='' />
                            <h4 className='text-center text-[10.4px] font-[400]'>Cold and Flu</h4>
                        </div>
                        <div className="bg-white rounded-[6px] px-2 py-3 flex flex-col gap-3 items-center">
                            <img src={cold} alt=""  className='' />
                            <h4 className='text-center text-[10.4px] font-[400]'>Mental Health</h4>
                        </div>
                        <div className="bg-white rounded-[6px] px-2 py-3 flex flex-col gap-3 items-center">
                            <img src={cold} alt=""  className='' />
                            <h4 className='text-center text-[10.4px] font-[400]'>Minor Infections</h4>
                        </div>
                        <div className="bg-white rounded-[6px] px-2 py-3 flex flex-col gap-3 items-center">
                            <img src={cold} alt=""  className='' />
                            <h4 className='text-center text-[10.4px] font-[400]'>Refil Prescript...</h4>
                        </div>
                        <div className="bg-white rounded-[6px] px-2 py-3 flex flex-col gap-3 items-center">
                            <img src={cold} alt=""  className='' />
                            <h4 className='text-center text-[10.4px] font-[400]'>Post-partum c...</h4>
                        </div>
                        <div className="bg-white rounded-[6px] px-2 py-3 flex flex-col gap-3 items-center">
                            <img src={cold} alt=""  className='' />
                            <h4 className='text-center text-[10.4px] font-[400]'>Post Surgical...</h4>
                        </div>
                        <div className="bg-white rounded-[6px] px-2 py-3 flex flex-col gap-3 items-center">
                            <img src={cold} alt=""  className='' />
                            <h4 className='text-center text-[10.4px] font-[400]'>Skin Conditions</h4>
                        </div>
                        <div className="bg-white rounded-[6px] px-2 py-3 flex flex-col gap-3 items-center">
                            <img src={cold} alt=""  className='' />
                            <h4 className='text-center text-[10.4px] font-[400]'>Travel Consult..</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#ACB2B81F] px-4 py-6 w-[400px] rounded-[12px]">
                <h5 className='font-[700] text-[20px] mb-2'>Find Specialists</h5>
                <p className='text-[14px] text-[#222222]'>Easily connect with leading Specialists or healthcare professionals who are tailored to your specific health needs</p>
                <div className="bg-[#0000000A] px-2 py-3">
                    <div className="rounded-[12px] bg-[#E3E3E3]">
                        search
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features