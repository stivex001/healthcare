import {Link} from 'react-router-dom'
import Hero from './Assets/hero.svg'
import Service from './Assets/service1.svg'
import Service2 from './Assets/service2.svg'
// import Effect from './Assets/effect.png'
import Navbar from './Navbar'
import {Data} from "./ServiceData"
// import Left from "./Assets/left.svg"
// import Right from "./Assets/right.svg"
// import Dot from "./Assets/dot.svg"
// import Customer from "./Assets/customer.svg"
import Logo from './Assets/newlogo.svg'
import { BsTelephone } from "react-icons/bs"
import { AiOutlineMail, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin } from "react-icons/ai"
// import { useState } from 'react'
// import Testimonial from './Testimonial'

const Home = () => {

  // const [currentSlide, setCurrentSlide] = useState(0)
  
  
  
  // const goToPrevious = () => {
  //   const firstSlide = currentSlide === 0;
  //   const newSlide = firstSlide ? Data.length - 1 : currentSlide -1;
  //   setCurrentSlide(newSlide)
  //   console.log("clicked")
  // }

  // const goToNext = () => {
  //   const lastSlide = currentSlide === Data.length - 1;
  //   const newSlide = lastSlide ? 0 : currentSlide + 1;
  //   setCurrentSlide(newSlide)
  // }



  return (
    <div className="">
      <Navbar/>
        {/* ====HERO SECTION bg-[url("data:image/jpeg;base64,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")] 
                bg-cover bg-center ====== */}
        <div className="h-[70vh] lg:h-[80vh] md:h-[70] w-[450px] md:w-[830px] lg:w-full  ">
          <div className='w-full h-[570px] md:h-[400px]  flex flex-col md:flex-row lg:w-full lg:h-[630px] lg:flex-row items-center justify-center 
                bg-[url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEg8REhIREhEPERERDw8PDxEPDw8PGBQZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGBISGjEhGCExNDQxMTE0NDExMTQxMTExMTE0MTQ0MTExMTQ0NDQ0NDQ0NDQ0NDQxNDQ0ND80ND80NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EADYQAAICAQMDAgMHAgUFAAAAAAABAhEDBBIhBTFBUWEGEyIUMkJxgZGhcrEjM1KS0RUWYpPB/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EACURAQADAAICAQQDAQEAAAAAAAABAhEDEiExUQQTQWEiMpGhgf/aAAwDAQACEQMRAD8A+nbSUW7QOIRVRKGcSUAlEoagUAtCtD0SgFQUBoiYU9AXBEMQFBYqGQBQWh8cG3SNC0/uUZEQ1ZMNK0ZmgFQQBIJXIrnzQwaCg0GgEAjCkAZANCFukXLTe6LNPClfr/YuKjN9m9/4Ms402vQ258m1Uu7/AIMMmArFoJGRQZXIZlUuQJaATaQI6FEoJDSEcQOI9EArcQOJa0Bogp2gaLWhGgK6A4j0SgK0xkyOIqIqwKYqYQNGGe13+5vTs5cWXwztKv7lG1owZFTa9Cx6h+xS5W22ArCRhRArByEYKRBCiMAINgIBrjqFS4ZHql4RkZCoacm22ythbEbIotiMLYrCA3ZEg0Ytf1PHi4buT7JdwN1ABhnujGXqrINGuc0gQyKRVm7sXS9yjUAYBUBgYQAKwNDgogrolDuJHECtoVoscRWgKxkyNECmQyZXFjIgMp13DGV8ojVl+HA2r4SAqIizLica9ysoLIAjIChQkQBHtGjHgjStWxdRGKXan4GLrLJ2KwtitgBitgciJBEYmXJGCuTSS9TJ1HqcMKrvN9oLmTf5HJho8+rkpZG8eP8A0L7zXuND63q88jePTxcn23Lsh9B8PuTU8z3T714R3ND0/HiiowikbUiYuqI4opJehDTRDSMuohyWYIJclk4phiqCIQICgAk6CJl7EBTQSpjRYFiQUiJBKA4iSiWiyiQZ5IVoucAbAKSRkPOBU0FWpmjDn28d1/YxxZYgjRmzXSops149PFpO279zNmgotpdgpWwNkJYEbI2SzZiUNqvbfm6uwM61Eu1lc5t9+SzO439K/bsUtgK2K2PRn1WWUF9MXKT4SGB8mWMFcmkgaTOsq3JOr4vyZcHTZTanmd+VD8K/5OvDGoqkqQGBdOh8x5HG5Py/BtjCh6IkBEhkiIJRTJu2Qaa5YSocgCEBAyEAgmXsMLk7EkVSY+PwU54WXY1VIp+VyGQqGQEYm4dlClzRFO2RIWUeUWIqFlEzvGbGVtAZY4/qNPyUSMKkmWyl6AJGNBeOwuRNwUFh9gPB7FkZtElkbAr+WgOAXIFkA+WFYyNseM2BTKAqgX0IioaMQtCyyJPlpILmvUCNEFcvQw6+cl9V0kra9Sa1nlteSK7skcydteDnaLJHJFSfnsrs3bFFOuAkrPnezIZPtIB2j4n/ACV6/ttICyWVkbICwbgCJlfAJZYrhtL9SOS/QCmXPaSLcb9WjJHqOBz+Wpx3rvFPlM2xglyQWhsWyJlDtlORx3Ku/kdsrUOSTC6tChLCmVFjK/I1iNgWSXFh06TVt/oUZs8YwcpOopW2cDQ9X+dnUIT+Xjjb3NffXorEwa9VPGn5oqjHvymZ57J/VuuuzT4Z5rTddi9TPEnxHhIk+lh6/JBV35KdRGo3F8rx6mSWpbRmc5c3JkzV10Y5bjcuK8Fenk/vX+jMkE5K1JlWohLZLbNp1wy553U7RmY6GfK7T/sbFni4rb3VWvQ89HLKGOO9213ZVousQlKag1J/i57MkVmZ2PRe9a+J9u3n1LdpImLJwl+5g+df6l+FVzfdidWJhy+vqVqpNc9k+Dr6acW0vO1Wcjrj7P3KJddhhUFLHJ5JNRW1XabNSxWP5S9TR574g1VKcLqldnXlObSapOuzPHa7TZcuompTjTVL2Rx5Jtn8YamZiPHs/wANdSjGO6eRUpVV9uT1Os12NY92+NNep5zpvw3pYQk8lW39T3OMX/JdPo/TZ95RdcV850v0s1Tt6lqeKYjY8x+oluj1bA0v8SH+5EOPP4Y6W2/u/wDtf/JDp2lOsfH/AB7SyWVwyKXZ2SWRLu0isnbEkzPk1uNd5L9ymfUIJpbl9XbkZKbDy/xJpcstVGfzJxhCK2xTajd8/wDw9Lo8v+HHc/w8tmicI5Et0U0cvr+GSx1jddk68IxmTMzLpP8AWIiPLFoIYlmlGNXvcnJ+rd9z1cZHzyEnGWxPdKu67pnf0fUsuytr+njnixxxvpOW2Zv4el3AWReq/c8FqtXrMynDHJQkm1b8L2OZo+m6/Hki56qT3cO+V+x2+3MPNXnrL6i8i9UK88fVHkqyQS35HKu9B1ORKLlGTbfiy/bZn6jN8PTy1cF+JfuGOrg/J5mOqxqEZ9n+JPuUZOswXEefyRft6zP1OeZx7LFqYS7OyvVZLhJRfNNX6HB6HPbkcp3tmrV9kzVr9TNzmsauDj3S/Ec7VzxDvx37Rs+HM+LdTPFonG23NKDafLvyeX+ENVKWohjySTjODik/XwatdPJKfydTc/MF45fBy+ldOyQ1u2K5gt6/pM+odPcw+hT1zx5Ps0cdx2/RJSVJeh5PpulzQ1+SU4JQdtNO+Wzp/Yc+TPjyRbUYyW/l9k+Uel1OkjaaX1USs+YkvE5MfDJqdV8uDl6I4UvieN00zta3STnBx290eYydAy26xr+DvtYeSIv+3RxfEse1UdTTa75kNyPNr4fzf6Eeg6Nop44uM48UZvNZicdOOLRaNJ1TUzWNyUbS4XuY+iQW1uMKnN3J+7OzrYOeOUMceVwcz4fwZseScMipJ3F+GcO3WrvNO19+Xo82JLHHsqq2PglFLumlycH4k6jPFGLq4N0wdI1cM2OM48eq9xN469m4pO46XUsTyJUvuuzjzzQc4JJOakuKujtfaHVcGHL8vHLe4q75dGI5aa19u3mXS1WC1F7pLjw6OdLpONty+rc+7t2a8XUceZNY3eziXsxzne09vbdI8ORqejRknHdOn3W50zLD4UweU7/NnoGUT1W104y/NK0Zjvb03MxHtx/+1NP7/wC5kOp9vh7/ALMJrOX9ptfmGLpepyQk7X0tC5ZZMk5vdxdRV9gfNM3TMyeo+XN1GTtH1Osbr4febRFP2sz6DJkVcFek6Mt0VOc+H9NNqj2kNHjrjn9Tm9QhGM4JV7mY5N/i62+n6fz3yu02PhQbdeJeTJ1XG8aXNxfqbtPwqfb1MnW8n+BOldJtexmJiLOtomaT8vC63qL0+anFOM3al5TPRY+pQlBcpWj578Q6qUpQdOk+/hG3Tb5RjUklS8nSlI2Yh5ObntFaWn4z/Ho82rWOe+LVdpL1KdZ1mLi67nNWiclzNfudTS9Fg1bar1s6ZEe3mi9reKx7Y/8Aq85wpRb4H0Mc89vdfmdjFo4QrbFTXt4NeTJGC8Rrsl3MTesO9ODltky5Uejzk38yXd/kjXg0kMcuYxfuDLmnOtqf59hsOlnka9f1OM80+oeqv0tYnZdPT5FLxSXZHSxu1xHuU6Dpmzmbt+ng6W3wjlNpl6q0iPTz3UtJKU1JQUuKvyjk6Hp+WGfLk+XK3FRh2quT2yxjxgrMtuZ0XSzhFb29ztteFydWSTLIxFrkBJQKNjNtEoqMfy2MsZpohBkjg23Xkq2cm3bYkoU7JMa1HtxOt6FZsM4PvXD9GeK6XmyaRzjL7tn0jVY7hKu9HltT0tuPNNyfocstXxmw34nzuSqh8RYuPvP+mLZrz6qOTG5RT/VGLQ9JcMjjUafsdSellGE1S4RztSZnxXHSLRHuzn/C0Hu1DcaW5U/Xg9G4nH+Hpr6oejt/qdsvJ/aUp/WFTRdiqqdCMkUKW6ytq6PyV6L9iEAdfvR8Of2pfOsvXPQyw6qo5MeRv7slu/p8mf7Faprn2LcfR9yXfk+xavh+W4+XbbuzD6/o80Z44zg1tnFNNduUcbqH+ZSlde/Jj6Bv0+mWLdaSe3dy4r0M2TTTcnJSq/LPLSuWny+1zc3bjiIidnPDt9MzKbnCT5XZGDqOXY5Y3ct9pJcnJyap4Z7nLdfD29zVj1s8n3IP+uZmaVi3bWa8trU6xXyxQ6SttSitvuaMXS8MUnJR/IzdUyZoqt3L8LweTza3WrJFQjKUYv6nK6a9EW3M51+l9a9ln0OCXaNV+LscvMljyLbkcsfmN2rLdPDLLbN3yluj6Mth0xN8RZxtyb5eunDEeF2LqMqqEUo/ya8M5zf3U3+Vmzp3RVxujS/k7+n0sMfZIxuuuY5+k0k3Tkkl+R0cWCMOyVl9BWMBYqyzYNGNBARrgEUWNASCnQtD0SgBQHEJGULRGhgECpAkMIgM+fHaaXBz8umnuXPCOzKIjggrhPTTU4yT7F+ojNppfiVM6TgguKIOF07QvG5N935OgaZY0yieOjjyVnddazGYQMAMMDnDY0QNkLg8VLTuPKUX7PgXF1KEbUo7ZLsvU6GLo85c5Mley4LXHS4u6UpLy+WfTvzx6h8Xi+in3PhjhqsuT/Lg69Wh3pZyVzm1/wCPYsy9ZjVQil+hz9Rq8k/+DlPLMvVHBWv7bIywY/w75/vyR6zI/uw2xOXiWW7pGj5mTt/YzvxLrn4dPBJSlc4Npo245Ylx8v8Ag5ujx5p8KL/N9juaTQyVOfLM+/y1/wCBCEJ0owdetUdHBpIQXC/ceHCpIZTfoMNWRiMkIpv0HjL2GGnjEdIrUxtxUWAF3k3gMShdyDaAYjDFoEmgAQFksgJEgDQYVGhKLZlYAFaGkBBVcolUkzVQs4kGRIkVdplsolHNsegmTGVxNCyeos8afYzakT6ai8wpsAdjAc/t2b+5Dyb1Usl7p0vRMyT0qbdSuzm4oT8s24d3g79JcO0L4aJ33NkNC/ANNgyS7Js7ej6dJU5v9CdViYc/B06cvB19L0aKpy59vB0YUl2LN4xdDHiUVSSRaolayIdZEVNOojKAIyQ6kgJtJQbRLAlBoFhAlA2oJABtRNqCEBoUJNLwEDKhNpNoxAF2jQiQKYBmipxZaACpxYNrLQBcIkwNMsCTTGeUWUTxyN7FaBjlT3LwJHNJHTyYzLlxDcXFfz0Qrog1Mea0/S93odrR9EiuZV+SAQbJkfDrYtNCK4VFuwhC9pTrCLGD5ZCDtJ1gyxDxxkIXTDbSUQhUSiUQgxNSiAIMXRJbIQmESlsvw0+5CEU+RKmZnIhABvJvIQKm4beQhBZBWSSoJAEbF3EICEslkIFGyEIAGVTiEgGf5ZCEMq//2Q==")] 
                bg-cover bg-center'
          >
            <div className="flex flex-col max-w-[1240px]  px-[27px] lg:p-[120px] mt-[20px] ">
              <h1 className='w-[374px] text-center md:w-[230px] lg:w-[480px] h-[74px] md:h-[80px] lg:h-[94px] mt-[48px] lg:mt-[150px] font-bold text-[31px] md:text-[19px] lg:text-[40px] leading-[37px] lg:leading-[47px] text-[#2A2A2A]  '>For Private clinics and medical centers</h1>
              <p className="w-[300px] text-center md:w-[230px] lg:w-[480px] h-[44px] md:h-[28px] lg:h-[56px] font-semibold text-[18px] lg:text-[24px] md:text-[11px] leading-[22px] md:leading-[14px] lg:leading-[28px] mt-5 md:mt-[19px] lg:mt-[40px] ">Good health is a state of mental,physical and social well being.</p>
              <button className='w-[236px] mx-auto md:w-[250px] md:h-[50px] lg:[301px] h-[40px] lg:h-[60px] bg-[#0F8AE3] rounded-[8px] md:rounded-2xl py-[8px] md:py-[16px]  px-[20px] md:px-[32px]  text-white cursor-pointer hover:scale-105 duration-200 mt-[20px] md:mt-[19px] lg:mt-[40px]'><Link to="/appointment">Book An Appointment</Link></button>
            </div>
            <div className='mx-auto '>
              <img className='w-[300px] h-[300px] mt-[10px] lg:w-[480px] lg:h-[480px] md:mt-[100px] lg:mt-[150px] ' src={Hero} alt="Doctor Stephen" />
            </div>
        </div> 
        {/* ==== Services Section ===== */}

        <div className="mt-[60px] lg:mt-[100px] ">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className='w-[150px] lg:w-[280px] h-[25px] lg:h-[47px] font-bold text-[21px] lg:text-[40px] leading-[25px] lg:leading-[47px] text-[#2A2A2A]'>Our Services</h1>
            <p className='w-[322px] md:w-[581px] lg:w-[984px] h-[45px] md:h-[34px] lg:h-[56px] font-medium text-[12px] md:text-[14px] lg:text-[24px] leading-[15px] md:leading-[17px] lg:leading-[28px] text-[#4E4E4E] mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum eligendi odio harum ab tempore nobis?</p>
          </div>
        <div className='flex flex-col md:flex-row items-center md:justify-center gap-[5px] md:gap-[35px] lg:gap-[80px] mt-[12px] md:mt-[23px] lg:mt-[40px] lg:mx-[216px]'>
          <div className='bg-[#CFE8F9] hover:scale-105 duration-200 cursor-pointer w-[380px] lg:w-[608px] h-[175px] lg:h-[280px] p-[25px] lg:p-[40px] rounded-md flex'>
            <div className='flex flex-col items-center gap-[5px] '>
              <h2 className='w-[175px] lg:w-[280px] h-[24px] lg:h-[38px] font-medium text-[20px] lg:text-[32px] leading-[24px] lg:leading-[38px] text-gray-500'>Consultancy</h2>
              <p className='w-[175px] lg:w-[280px] h-[45px] lg:h-[72px] text-[12px] lg:text-[20px] leading-[15px] lg:leading-[24px] text-gray-500 '>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              <p className="bg-[#0F8AE3] rounded-md w-[126px] lg:w-[168px] h-[40px] lg:h-[60px] mr-[50px] lg:mr-[100px] py-2 px-5 lg:py-4 lg:px-8 hover:scale-105 duration-200 "><Link className=' text-[20px] leading-6 text-white' to="/service">More Info</Link></p>
            </div>
            
              <div className=''>
                <img className='w-[150px] lg:w-[240px] h-[125px] lg:h-[200px] rounded-sm' src={Service} alt="" />
              </div>
          </div>
          <div className='bg-[#CFE8F9] hover:scale-105 duration-200 cursor-pointer w-[380px] lg:w-[608px] h-[175px] lg:h-[280px] p-[25px] lg:p-[40px] rounded-md flex'>
            <div className='flex flex-col items-center gap-3 '>
              <h2 className='w-[175px] lg:w-[280px] h-[24px] lg:h-[38px] font-medium text-[20px] lg:text-[32px] leading-[24px] g:leading-[38px] text-gray-500'>Ear,Nose & Throat</h2>
              <p className='w-[175px] lg:w-[280px] h-[45px] lg:h-[72px] text-[12px] lg:text-[20px] leading-[15px] lg:leading-[24px] text-gray-500 '>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
              <p className="bg-[#0F8AE3] rounded-md w-[126px] lg:w-[168px] h-[40px] lg:h-[60px] mr-[50px] lg:mr-[100px] py-2 px-5 lg:py-4 lg:px-8 hover:scale-105 duration-200 "><Link className=' text-[20px] leading-6 text-white' to="/service">More Info</Link></p>
            </div>
            
              <div>
                <img src={Service2} alt="" />
              </div>
          </div>
        </div>
        </div>

        {/* ==== Articles Sections ===== */}
        
        <div className="w-[428] lg:w-full  h-[408px] md:h-[635px] bg-[#0F8AE3] mt-[60px] lg:mt-[100px] ">
        
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className='w-[215px]  md:w-[390px] h-[28px] md:h-[47px] font-bold text-[23px] md:text-[40px] leading-[20px] md:leading-[47px] text-white mt-[25px] lg:mt-[40px]'>Our Latest Articles</h1>
            <p className='w-[217px] md:w-[643px] lg:w-[984px] h-[56px] md:h-[72px] lg:h-[48px] text-[11px] md:text-[20px] leading-[14px] md:leading-[24px] text-white mt-[11px] md:mt-[20px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum eligendi odio harum ab tempore nobis?</p>
          </div>
      
          <div  className="flex gap-[24px] lg:gap-[40px] mt-[20px] lg:mt-[40px] items-center justify-center ">
          {Data.map(({img, text, id, date}) => (
            <div key={id} className=' rounded-md mt-[38px] lg:mt-0 hover:scale-105 duration-200 cursor-pointer'>
              <img className='w-[178px] md:w-[360px] h-[104px] md:h-[211px]' src={img} alt="" />
            <div className='w-[178px] md:w-[360px] h-[73px] md:h-[149px] py-[11px] md:py-[20px] px-[6px] md:px-[12px] bg-[#CFE8F9] flex flex-col gap-[11px] '>
              <p className='w-[164px] md:w-[296px] h-[32px] md:h-[56px] font-medium text-[16px] md:text-[24px] leading-[20px] md:leading-[28px] text-[#2A2A2A] '>{text}</p>
              <p className='w-[164px] md:w-[200px] h-[13px] md:h-[24px] font-normal text-[12px] md:text-[20px] leading-[12px] md:leading-[24px] text-[#2A2A2A] '>{date}</p>
            </div>
            </div>
                 
              ))}   
          </div>
          {/* <div className='hidden mt-[330px]  lg:flex gap-[70px] items-center cursor-pointer mx-[50px] ' >
              <img onClick={goToPrevious} className='hover:scale-105 duration-200' src={Left} alt="" />
              <img onClick={goToNext} className='hover:scale-105 duration-200' src={Right} alt="" />
          </div>  */}
          {/* <div className='mt-[26px] flex gap-[8px] items-center cursor-pointer justify-center lg:hidden ' >
            <img onClick={goToPrevious} className='hover:scale-105 duration-200' src={Dot} alt="" />
            <img onClick={goToNext} className='hover:scale-105 duration-200' src={Dot} alt="" />
            <img onClick={goToNext} className='hover:scale-105 duration-200' src={Dot} alt="" />
          </div>    */}
        </div>


        {/* ====== Customers Section */}
        {/* <div className="w-[428px] lg:w-full h-[300px] md:h-[635px]  mt-[60px] lg:mt-[140px] "> */}
          
          {/* <div className="flex flex-col items-center justify-center">
            <h1 className='w-[235px] lg:w-[630px] text-center h-[56px] lg:h-[47px] font-medium lg:font-bold text-[24px] lg:text-[40px] leading-[28px] lg:leading-[47px] text-[#2A2A2A]'>What Our Customer Are Saying</h1>
          </div> */}
          {/* <div className='flex gap-[16px] lg:gap-[40px] mt-[28px]  lg:mt-[40px] mx-[15px] '>
            <div className=' w-[176px] lg:w-[480px] h-full bg-[#cfe8f9] hover:bg-sky-500 duration-200 p-6 lg:mx-[120px]'>
              <div className='flex items-center justify-center gap-[9px] '>
                <img className='w-[48px] lg:w-[100px] h-[48px] lg:h-[100px]' src={Customer} alt="" />
                <div className='flex flex-col gap-[1px]'>
                <h1 className='w-[85px] lg:w-[178px] h-[14px] lg:h-[28px] font-medium text-[11px] lg:text-[24px] leading-[14px] lg:leading-[28px] text-[#2A2A2A]'>Taiwo Odusoro</h1>
                <p className='w-[103px] lg:w-[215px] h-[9px] lg:h-[19px] font-normal text-[7px] lg:text-[16px] leading-[9px] lg:leading-[19px] text-[#717171]'>Product Designer</p>
              </div>
            </div>
            <p className='w-[176px] flex mx-auto lg:w-[366px] h-[44px] lg:h-[96px] font-normal text-[9px] lg:text-[20px] leading-[11px] lg:leading-[24px] text-[#2A2A2A] mt-[9px] lg:mt-[30px]'>Had the best hospitality experience with Welive Health Care hospital. Thank you for that!</p>
           </div>
           <div className=' w-[176px] lg:w-[366px] h-[57px] lg:h-[96px] bg-[#F5F5F5] p-2'>
              <div className='flex items-center gap-[9px]'>
                <img className='w-[48px] lg:w-[100px] h-[48px] lg:h-[100px]' src={Customer} alt="" />
                <div className='flex flex-col gap-[1px]'>
                <h1 className='w-[85px] lg:w-[178px] h-[14px] lg:h-[28px] font-medium text-[11px] lg:text-[24px] leading-[14px] lg:leading-[28px] text-[#2A2A2A]'>Taiwo Odusoro</h1>
                <p className='w-[103px] lg:w-[215px] h-[9px] lg:h-[19px] font-normal text-[7px] lg:text-[16px] leading-[9px] lg:leading-[19px] text-[#717171]'>Product Designer</p>
              </div>
            </div>
            <p className='w-[176px] lg:w-[366px] h-[44px] lg:h-[96px] font-normal text-[9px] lg:text-[20px] leading-[11px] lg:leading-[24px] text-[#2A2A2A] mt-[9px] lg:mt-[44px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ad, excepturi aliquam praesentium cupiditate laborum.</p>
           </div>

          </div> */}
          {/* <div className='mt-[28px] lg:mt-[180px] flex gap-[30px]  lg:mx-[500px] items-center cursor-pointer lg:m ' >
              <img onClick={goToPrevious} className=' border border-[#0F8AE3] rounded-[180px] w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] text-blue-500 p-3 hover:scale-105 duration-200' src={Right} alt="" />
              <img onClick={goToNext} className='hover:scale-105 duration-200 w-[30px] lg:w-[60px] h-[30px] lg:h-[60px] bg-[#0F8AE3] rounded-[180px] p-3' src={Right} alt="" />
          </div> */}
        {/* </div> */}


        {/* ==== CTA Section ==== */}
        <div className='w-full  h-[192px] md:h-[300px] lg:h-[211px] bg-[#0F8AE3] mt-[60px]'>
          <div className='flex flex-col  lg:flex-row items-center justify-between px-[42px] py-[24px] lg:py-[40px] lg:px-[120px] '>
            <div className=" justify-center text-center ">
              <h1 className='w-[344px]  md:w-[619px] h-[28px] md:h-[51px] font-semibold lg:font-bold text-[24px] lg:text-[40px] leading-[28px] lg:leading-[47px] text-[#ffffff]'>Get in Touch</h1>
              <p className='w-[344px] md:mx-auto lg:w-[504px] h-[76px] lg:h-[72px] font-normal text-[16px] lg:text-[20px] leading-[19px] lg:leading-[24px] text-gray-300 mt-[4px] lg:mt-[12px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil exercitationem consequatur laboriosam autem quis nulla?</p>
            </div>
            <div className='flex items-center md:mr-0'>
              <input className='w-[213px] md:w-[384px] md:h-[57px] lg:w-[430px] h-[31px] lg:h-[64px] py-[9px] lg:py-[20px] px-[7px] lg:px-[16px] focus:outline-none' type="text" placeholder='Your Email' />
              <button className='w-[70px] md:w-[127px] md:h-[57px] lg:w-[143px] h-[31px] lg:h-[64px] bg-[#CFE8F9] py-[9px] lg:py-[20px] px-[7px] lg:px-[16px] text-[#2A2A2A] font-bold hover:text-blue-500 text-[12px] leading-[14px] md:text-[21px] md:leading-[25px]'>Subscribe</button>
            </div>
          </div>
        </div>

        {/* ====Footer Section===== */}
        <div className='w-full h-[341px] border border-[#2A2A2A]  mt-[60px] lg:mt-[140px]'>
          <div className='grid grid-cols-2 lg:flex lg:justify-between mt-[32px] lg:mt-[40px] mx-[5px] lg:mx-[150px] p-3 lg:gap-[62px] '>
            <img className='w-[104px] h-[80px]' src={Logo} alt="" />
            <div className='flex flex-col  gap-[9px]'>
              <h1 className="w-[149px] lg:w-[220px] h-[28px] lg:h-[38px] font-medium text-[23px] leading-[28px] lg:leading-[38px] lg:text-[32px] text-[#2A2A2A] ">Company Info</h1>
              <p className='w-[233px] lg:w-[320px] h-[85px] lg:h-[120px] font-normal text-[14px] lg:text-[20px] leading-[17px] lg:leading-[24px] text-[#2A2A2A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium nostrum magni ipsa incidunt consectetur.</p>
            </div>
            <div className='flex flex-col gap-[9px] lg:gap-[12px]'>
              <h1 className='w-[97px] lg:w-[156px] h-[24px] lg:h-[38px] font-medium text-[19px] lg:text-[32px] leading-[24px] lg:leading-[38px] text-[#2A2A2A]'>Resources</h1>
              <p className='w-[199px] lg:w-[320px h-[75px] lg:h-[120px] font-normal text-[12px] lg:text-[20px] leading-[15px] lg:leading-[24px] text-[#2A2A2A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium nostrum magni ipsa incidunt consectetur.</p>
            </div>
            <div className='flex flex-col gap-[9px] lg:gap-[12px]'>
              <h1 className="w-[74px] lg:w-[119px] h-[24px] lg:h-[38px] font-medium text-[19px] lg:text-[32px] leading-[24px] lg:leading-[38px] text-[#2A2A2A]">Contact</h1>
              <div className='flex items-center gap-[12px] lg:gap-[23px]'>
                <BsTelephone/>
                <p className='w-[88px] lg:w-[140px] h-[18px] lg:h-[28px] text-[14px] lg:text-[24px] leading-[18px] lg:leading-[28px] text-[#4E4E4E] font-medium'>+2348162174754</p>
              </div>
              <div className='flex items-center gap-[12px] lg:gap-[23px]'>
                <AiOutlineMail />
                <p className='w-[115px] lg:w-[184px] h-[12px] lg:h-[19px] text-[9px] lg:text-[16px] leading-[2px] lg:leading-[19px] font-normal text-[#2A2A2A]'>welivehealth@gmail.com</p>
              </div>
              <div className='flex gap-[15px] lg:gap-[44px]'>
              <AiFillFacebook size={25} />
              <AiFillInstagram size={25}/>
              <AiFillTwitterSquare size={25}/>
              <AiFillLinkedin size={25}/>
            </div>
            </div>
            
          </div>
        </div>
        <p className='w-[235px] h-[15px] m-auto py-[20px] font-normal text-[12px] leading-[15px] text-[#2A2A2A]'>&copy; 2022 Welive Health. All rights reserved</p>
      </div>
    
    </div>
  )
}

export default Home