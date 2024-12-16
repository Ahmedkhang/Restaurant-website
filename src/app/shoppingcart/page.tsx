import Image from 'next/image';
import img3 from '@/assets/shoppingcart/img3.png';
import img4 from '@/assets/shoppingcart/img4.png'
import img5 from '@/assets/shoppingcart/img5.png';

import Navbar from '@/components/Navbar/Navbar';
export default function ShoppingCart() {
    return(
        <>

        <Navbar />

        
                  {/* Header Section */}
                  <div className="w-full relative text-center">
                    <Image src="/bg-image.png" alt="" width={1920} height={410} layout="responsive" />
                    <div className="w-full text-white absolute top-1/2 transform -translate-y-1/2">
                      <h1 className="text-4xl md:text-5xl font-bold">Shopping Cart</h1>
                      <h5 className="py-3 text-base md:text-lg">
                        Home &gt; <span className="text-[#FF9F0D]">Shopping Cart</span>
                      </h5>
                    </div>
                  </div>

        <div className='w-[1920px] h-[1500px] bg-white'>
            <div className='w-[1320px] mx-[300px] pt-[130px]'>
              <Image src={img3} alt='' width={1320} height={600} layout='responsive' />
            </div>

            <div className='w-[1320px] mx-[300px] pt-[130px] h-[400px] flex'>
                <div className='w-[648px] h-[252px]'>
                    <Image src={img5} alt='' width={648} height={252} />
                </div>
                <div className='w-[648px] h-[337px]'>
                <Image src={img4} alt='' width={648} height={337} />
                </div>
            </div>

        </div>
        </>
    )
}