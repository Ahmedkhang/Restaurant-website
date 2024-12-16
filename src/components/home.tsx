import Image from 'next/image';
import { TiTick } from "react-icons/ti";
import Link from 'next/link';
import image from '@/assets/homeImages/image.png';
import image1 from '@/assets/homeImages/image1.png';
import image2 from '@/assets/homeImages/image2.png';
import image3 from '@/assets/homeImages/image3.png';
import image4 from '@/assets/homeImages/image4.png';
import image5 from '@/assets/homeImages/image5.png';
import image6 from '@/assets/homeImages/image6.png';
import image7 from '@/assets/homeImages/image7.png';
import image8 from '@/assets/homeImages/image8.png';
import image9 from '@/assets/homeImages/image9.png';
import image10 from '@/assets/homeImages/image10.png';
import image11 from '@/assets/homeImages/image11.png';
import image12 from '@/assets/homeImages/image12.png';
import image13 from '@/assets/homeImages/image13.png';
import image14 from '@/assets/homeImages/image14.png';
import image15 from '@/assets/homeImages/image15.png';
import image16 from '@/assets/homeImages/image16.png';
import image17 from '@/assets/homeImages/image17.png';
import image18 from '@/assets/homeImages/image18.png';
import image19 from '@/assets/homeImages/image19.png';
import image20 from '@/assets/homeImages/image20.png';
import image21 from '@/assets/homeImages/image21.png';
import image22 from '@/assets/homeImages/image22.png';
import image23 from '@/assets/homeImages/image23.png';


export default function HomePage() {

    
    return(
        <>
        
        <div className='w-[1920px] h-[950px] bg-[#0D0D0D] text-white'>
            {/* // Navbar */}
            <div className='w-[1320px] h-[87px] flex'>
                      <div className='flex h-10 text-white py-[45px] mx-[300px]'>
                        <ul className='hidden md:flex gap-5'>
                            <li>Home</li>
                            <li>Menu</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Pages</li>
                           <Link href='/about'><li>About</li></Link>
                        </ul>
                      </div>
                      <h1 className='w-[109px] h-[32px] font-bold text-3xl text-white'><span className='text-[#FF9F0D]'>Food</span>tuck</h1>
                      <div className='items-center px-[300px] py-[40px] flex'>
                        <input 
                        placeholder='Search'
                        type='text'
                        className='border-[1px] rounded-2xl border-[#FF9F0D] px-3 w-[310px] h-[54px]'
                        
                        />
                        <Image 
                        src='/search.png'
                        alt=''
                        width={24}
                        height={24}
                        className='ml-2'

                        />
                      </div>
            </div>

              {/* Hero Section */}
              
              

              <div className='w-[1920px] flex'>
                {/* style */}
                <div className='w-[25.92px] h-[492px] mt-[126px] mx-[200px] '>
                    <p className='h-[158px] w-1 bg-white'></p>
                    <p className='h-[158px] w-1 bg-white'></p>
                      

            </div>

                {/* right div */}
                <div className=' w-[472px] mt-[146px] h-[356px]'>

                    <h1 className='text-5xl text-white font-bold leading-[50px]'><span className='text-[#FF9F0D]'>Th</span>e Art Of Speed Food Quality </h1>
                    <p className='mt-10 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius sed pharetra dictum neque massa congue</p>
                     
                   <Link href='/menu'><button className='bg-[#FF9F0D] text-white h-[60px] w-[190px] rounded-lg mt-10'>See Menu</button></Link> 
                </div>
                {/* left div */}
                <div className='w-[877px] h-[670px] ml-10'>
                  <Image src={image} alt='' width={877} height={670}/>

                </div>
              </div>
        </div>
                {/* body section 2 */}
        <div className='w-[1920px] bg-[#0D0D0D]  text-white h-[4500px]'>

          {/* parent section 2 */}
           <div className='w-[1320px] h-[700px] flex mx-[300px] pt-[130px]'>

           
           {/* left side */}

           <div className='w-[562px] h-[562px] '>
                <h1 className='text-5xl font-bold w-[446px] h-[110px]'><span className='text-[#FF9F0D]'>We</span> Create the best foody product</h1>
               <p className='mt-10 w-[526px] h-[130px] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
         
              {/* benefits */}
         
          <div className='mt-8'>

            <div className='flex gap-4 leading-[42px]'>
            <TiTick  className='mt-3'/>
            <p>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            </div>

            <div className='flex gap-4 leading-[42px]'>
            <TiTick className='mt-3'/>
            <p>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            </div>

            <div className='flex gap-4 leading-[42px]'>
            <TiTick className='mt-3'/>
            <p>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            </div>

            <button className='bg-[#FF9F0D] text-white h-[60px] w-[190px] rounded-lg mt-10'>Read more</button>
               
               </div>           
           
           </div>

                {/* right side */}

                <div className='w-[660px] h-[562px]'>
                  <Image src={image1} alt='' width={660} height={330}/>
                  <div className='flex'>
                    <Image src={image2} alt='' width={322} height={194}/>
                    <Image src={image3} alt='' width={322} height={194}/>
                  </div>
                </div>
                </div>


                                  {/* section 3 */}

                <div className='w-[1320px] mx-[300px] pt-[130px] h-[803px]'>
                <h1 className='text-5xl font-bold w-[1320px] h-[110px] text-center'><span className='text-[#FF9F0D]'>Ch</span>oose Food Items</h1>

                <Link href='/menu'> <div className='flex'>
                    <Image src={image4} alt='' width={306} height={329}/>
                    <Image src={image5} alt='' width={306} height={329}/>
                    <Image src={image6} alt='' width={306} height={329}/>
                    <Image src={image7} alt='' width={306} height={329}/>
                  </div></Link> 
                  </div>    

                                  {/* Section 4 */}

                   <div className='w-[1320px] mx-[300px] gap-20 pt-[130px] flex h-[716px]'>
                        
                         {/* left div */}
 
                    <div className='w-[650px] h-[716px]'>
                      <div className='flex'>

                        
                    <Image src={image8} alt='' width={362} height={356}/>
                    <Image src={image9} alt='' width={281} height={231} className='mt-[125px]'/>

                      </div>
                    <div className='flex'> 
                      <div className='flex'>
                        
                    <Image src={image10} alt='' width={244} height={306}/>
                    <Image src={image11} alt='' width={221} height={226} className='mb-[80px]'/>

                    <div>
                    <Image src={image12} alt='' width={161} height={168}/>
                    <Image src={image13} alt='' width={161} height={166} className=''/>
                    </div>
                        </div>
                      </div>
                    </div>
                            {/* Right side */}

                     <div className='w-[660px] '>
                     <h1 className='text-5xl font-bold w-[460px] h-[112px]'><span className='text-[#FF9F0D]'>Ex</span>tra ordinary taste
                     And Experienced </h1>

                     <p className='w-[520px] mt-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

                        <div className='flex gap-10 mt-20'>
                           <div className='bg-[#FF9F0D] items-center justify-center w-[102px] h-[100px]'>
                            <Image src={image14} alt='' width={56} height={56} className='ml-5 mt-5'/>
                           </div>
                           <div className='bg-[#FF9F0D] items-center justify-center  w-[102px] h-[100px]'>
                           <Image src={image15} alt='' width={56} height={56} className='ml-5 mt-5'/>
                           </div>
                           <div className='bg-[#FF9F0D] items-center justify-center w-[102px] h-[100px]'>
                           <Image src={image16} alt='' width={56} height={56} className='ml-5 mt-5'/>
                           </div>
                        </div>

                        <div className='flex w-[374px] h-[93px] bg-white mt-20'>
                           <h1 className='text-[#FF9F0D] text-3xl font-bold px-10 py-7'>30+</h1>
                          
                            <p className='text-center text-black text-xl py-2 px-5'>Years of <br/> <span className='font-bold  text-2xl text-black'>Experienced</span></p>
                            
                           
                        </div>
                    
                      </div>     

                

                    </div>               

                    {/* section menu */}

                    <div className='w-[1320px] pt-[130px] px-[300px]'>
                      <h1 className='w-[1320px] text-center font-bold gap-10 text-5xl'><span className='text-[#FF9F0D]'>Fr</span>om Our Menu</h1>
                 
                 <div className='flex'>
                   {/* left side */}

                   <div className='w-[366px] h-[362px] mt-10'>
                    <Image src={image17} alt='' width={366} height={362}/>
                   </div>

                   {/* right side */}

                   <div className='flex pl-[400px] mt-20'>
                    <div className=''>

                      {/* card menu 1 */}

                      <div className='w-[376px] mt-5 h-[79px] flex'>
                      <Image src={image18} alt='' width={80} height={79}/>
                      <div className='ml-2'>
                        <h1 className='text-xl'>Lettuce Leaf</h1>
                        <p className='w-[376px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                        <p className='text-[#FF9F0D] text-lg'>$12.5</p>
                        </div>
           </div>
                                     {/* card menu 2 */}

                              <div className='w-[376px] mt-5 h-[79px] flex'>
                      <Image src={image18} alt='' width={80} height={79}/>
                      <div className='ml-2'>
                        <h1 className='text-xl'>Lettuce Leaf</h1>
                        <p className='w-[376px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                        <p className='text-[#FF9F0D] text-lg'>$12.5</p>
                        </div>
                      
                      </div>

                       {/* card menu 3 */}

                      <div className='w-[376px] h-[79px] mt-5 flex'>
                      <Image src={image18} alt='' width={80} height={79}/>
                      <div className='ml-2'>
                        <h1 className='text-xl'>Lettuce Leaf</h1>
                        <p className='w-[376px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                        <p className='text-[#FF9F0D] text-lg'>$12.5</p>
                        </div>
                      
                      </div>

                       {/* card menu 4 */}

                      <div className='w-[376px] mt-5 h-[79px] flex'>
                      <Image src={image18} alt='' width={80} height={79}/>
                      <div className='ml-2'>
                        <h1 className='text-xl'>Lettuce Leaf</h1>
                        <p className='w-[376px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                        <p className='text-[#FF9F0D] text-lg'>$12.5</p>
                        </div>

                      </div>

                       </div>

                       {/* Right side */}

                        <div className='w-[376px] ml-20 h-[79px]'>
                            
                            
                       {/* card menu 1*/}

                      <div className='w-[376px] h-[79px] mt-5 flex'>
                      <Image src={image18} alt='' width={80} height={79}/>
                      <div className='ml-2'>
                        <h1 className='text-xl'>Lettuce Leaf</h1>
                        <p className='w-[376px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                        <p className='text-[#FF9F0D] text-lg'>$12.5</p>
                        </div>
                      
                      </div>

                      
                       {/* card menu 2 */}

                       <div className='w-[376px] h-[79px] mt-5 flex'>
                      <Image src={image18} alt='' width={80} height={79}/>
                      <div className='ml-2'>
                        <h1 className='text-xl'>Lettuce Leaf</h1>
                        <p className='w-[376px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                        <p className='text-[#FF9F0D] text-lg'>$12.5</p>
                        </div>
                      
                      </div>

                      
                       {/* card menu 3 */}

                       <div className='w-[376px] h-[79px] mt-5 flex'>
                      <Image src={image18} alt='' width={80} height={79}/>
                      <div className='ml-2'>
                        <h1 className='text-xl'>Lettuce Leaf</h1>
                        <p className='w-[376px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                        <p className='text-[#FF9F0D] text-lg'>$12.5</p>
                        </div>
                      
                      </div>

                      
                       {/* card menu 4 */}

                       <div className='w-[376px] h-[79px] mt-5 flex'>
                      <Image src={image18} alt='' width={80} height={79}/>
                      <div className='ml-2'>
                        <h1 className='text-xl'>Lettuce Leaf</h1>
                        <p className='w-[376px]'>Lacus nisi, et ac dapibus velit in consequat.</p>
                        <p className='text-[#FF9F0D] text-lg'>$12.5</p>
                        </div>
                      
                      </div>


                        </div>
                    
                   </div>


                   </div>
                    </div>

                    <div className='w-[1320px] h-[500px] px-[300px] pt-[130px]'>

                      <h1 className='w-[1320px] font-bold text-center text-5xl'><span className='text-[#FF9F0D]'>Me</span>et Our Chefs</h1>

                      <div className='flex mt-20'>
                        <Image src={image19} alt='' width={312} height={391}/>
                        <Image src={image20} alt='' width={312} height={391}/>
                        <Image src={image19} alt='' width={312} height={391}/>
                        <Image src={image20} alt='' width={312} height={391}/>
                      </div>
                      <Link href='/ourChefs'><button className='w-[155px] h-[50px] border-[1px] rounded-3xl mt-20 ml-[600px] border-[#FF9F0D] text-center'>Read more</button></Link>
                    </div>


                    {/* Client Section */}

                    <div className='w-[1320px] px-[300px] pt-[130px] mt-[200px] h-[600px]'> 
                      <h1 className='text-4xl font-bold'>What Our Client Are Saying</h1>
                  <Image src={image21} alt='' width={132} height={133} className='rounded-6xl ml-[550px] mt-10 justify-center'/>
                  <div className='text-black items-center w-[868px] h-[450px] mb-10  ml-[200px] bg-white'>
                    <p className='w-[696px] h-[103px] text-lg text-center ml-20 py-[150px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    <Image src={image22} alt='' width={151} height={23} className='ml-[350px]'/>
                    <p className='text-2xl font-bold text-center py-5'>Alamin Hasan</p>
                    <p className='text-center'>Food Specialist</p>
                  </div>

                    </div>

        </div>
        
        <div className='w-[1920px] h-[500px] '>
                    <Image src={image23} alt='' width={1920} height={450}/>
                  </div>
        </>
    )
}