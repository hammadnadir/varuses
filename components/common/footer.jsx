import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      <div className=' bg-[#E0F3FF]  mt-[70px]'>
        <div className='container'>
          <div className='flex'>
            <div className='pb-[27px] pt-[27px]'>
              <div className='grid gap-[35px] grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mt-[40px]'>

                <div>
                  <div>
                    <img className='' src="/images/Verisyslogo.png" alt="" />
                  </div>
                  <p className='text-[18px] font-normal pt-[15px] pb-[15px]'>Verisys QR Code Generator lets you to create memorable marketing campaigns with trackable QR Codes with the authentication of products designed by you.</p>
                  <a className='text-[#008BBF] font-normal text-[17px]' target="_blank" href="support@verisys.us">support@verisys.us</a>
                </div>

                <div>
                  <div className='pb-[85px]'>
                    <div>
                      <h1 className='text-[#3C9E48] font-bold text-[20px]'>Quick Links</h1>
                    </div>
                    <div className='flex flex-col'>
                      <Link className='font-semibold text-[16px] pt-6' href='/'>About QR code</Link>
                      <Link className='font-semibold text-[16px] pt-2' href='/'>Homepage</Link>
                      <Link className='font-semibold text-[16px] pt-2' href='/'>Pricing</Link>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h1 className='text-[#3C9E48] font-bold text-[20px]'>Company</h1>
                    </div>
                    <div className='flex flex-col'>
                      <Link className='font-semibold text-[16px] pt-6' href='/'>Our Team</Link>
                      <Link className='font-semibold text-[16px] pt-2' href='/'>Events</Link>
                      <Link className='font-semibold text-[16px] pt-2' href='/'>Career</Link>
                      <Link className='font-semibold text-[16px] pt-2' href='/'>About Us</Link>
                      <Link className='font-semibold text-[16px] pt-2' href='/'>News And Press</Link>
                    </div>
                  </div>
                </div>

                <div>
                  <div className='pb-[43px]'>
                    <div>
                      <h1 className='text-[#3C9E48] font-bold text-[20px]'>Location</h1>
                    </div>
                    <p className='font-semibold text-[16px] pt-6'>4355 Excel Parkway, Ste. 100, Addison, TX 75001, USA</p>
                    <p className='font-semibold text-[16px] pt-2'>1385 S. Colorado Blvd Building A Suite 322 Denver, CO 80222, Pakistan</p>
                  </div>
                  <div>
                    <div>
                      <h1 className='text-[#3C9E48] font-bold text-[20px]'>News</h1>
                    </div>
                    <div className='flex flex-col'>
                      <Link className='font-semibold text-[16px] pt-6' href='/'>Our Team</Link>
                      <Link className='font-semibold text-[16px] pt-2' href='/'>Events</Link>
                      <Link className='font-semibold text-[16px] pt-2' href='/'>Career</Link>
                      <Link className='font-semibold text-[16px] pt-2' href='/'>About Us</Link>
                      <Link className='font-semibold text-[16px] pt-2' href='/'>News And Press</Link>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <div>
                      <h1 className='text-[#3C9E48] font-bold text-[20px]'>Contact Information</h1>
                    </div>
                    <div className='flex flex-col'>
                     <p className='font-semibold text-[16px] pt-6'>USA : <span className='font-semibold text-[16px] pt-6'>+1 (516) 274-8700</span></p>
                     <p className='font-semibold text-[16px] pt-2'>PAK : <span className='font-semibold text-[16px] pt-2'>+92 3012364728</span></p>
                     <p className='font-semibold text-[16px] pt-2'>Email : <Link className='font-semibold text-[16px] text-[#008BBF] pt-2' href="info@verisys.us">info@verisys.us</Link></p>
                      
                    </div>
                  </div>

                  <div>
                    <div className='flex pt-14 gap-2'>
                      <img className='cursor-pointer' src="/images/FB.png" alt="" />
                      <img className='cursor-pointer' src="/images/insta.png" alt="" />
                      <img className='cursor-pointer' src="/images/twitter.png" alt="" />
                      <img className='cursor-pointer' src="/images/youtube.png" alt="" />
                      <img className='cursor-pointer' src="/images/whatsapp.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#0F7CC0] flex m-auto'>
        <div className='items-center p-[7px] text-center flex gap-4 m-auto'>
        {/* <div> */}
          <img src="/images/copyright.png" alt="" />
        {/* </div> */}
        <h1 className='text-[#FFFFFF]'>Copyright 2023 verisys.us  Private Limited. All rights Reserved</h1>
      </div>
      </div>
    </div>
  )
}

export default Footer