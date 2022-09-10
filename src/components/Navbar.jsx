import { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from './Assets/newlogo.svg'

const Navbar = () => {

  const links =  [
    {
      id: 1,
      link: 'Home',
      to: "/"
    },
    {
      id: 2,
      link: 'About us',
      to: "/about"
    },
    {
      id: 3,
      link: 'Doctor',
      to: "/doctor"
    },
    {
      id: 4,
      link: 'Services',
      to: "/service"
    },
    {
      id: 5,
      link: 'FAQ',
      to: "/faq"
    },
  ]



    const [active, setActive] = useState(false);

    const showMenu = () => {
    setActive(!active)
  }

  return (
    <div className='fixed w-full h-[53px] md:h-[71px]  lg:h-[148px] bg-[#f8f8f7] '>
      <div className='max-w-[1240px] flex items-center justify-between mx-auto px-4 h-full'> 
        <div>
          <Link to='/'>
            <img src={Logo} alt="WELIVE Healthcare" className=' w-[100px] h-[52px] md:w-[72px] md:h-[52px] lg:w-[150px] lg:h-[108px]  ' /> 
          </Link>
        </div>
        <nav>
           <ul className='hidden md:flex'>
              {
                 links.map(({ id, link, to }) => (
                  <li key={id} className='px-4 text-xl font-bold hover:text-blue-500 hover:scale-105 duration-200 cursor-pointer'><Link to={to}>{link}</Link></li>
                ))
              }
          </ul>
        </nav>
        <div className='hidden md:flex gap-3 '>
          <p className='px-7 bg-[#ffffff] py-3 rounded-2xl  text-[#0F8AE3] border border-[#0F8AE3] cursor-pointer hover:scale-105 duration-200'><Link to='/register'>Signup</Link></p>
          <p className="bg-[#0F8AE3] py-3 px-7 rounded-2xl text-white cursor-pointer hover:scale-105 duration-200"><Link to='/login'>Login</Link></p>
        </div>

        <div onClick={showMenu} className="md:hidden cursor-pointer z-10 ">
          {active ? <FaTimes className='text-[#0F8AE3]' size={40}/> : <FaBars size={40} className='text-[#0F8AE3]'/>}  
        </div>

        {
          active && (
            <ul className='bg-[#0F8AE3] flex flex-col justify-center items-center absolute left-0 top-[50px] w-full  md:hidden'>
              {
                links.map(({ id, link, to }) => (
                  <li key={id} className='p-4 hover:underline hover:scale-105 duration-200 cursor-pointer py-4 text-2xl text-center text-white'><Link to={to}>{link}</Link></li>
              
                ))
              }
                <div className='flex flex-col gap-[5px] justify-center text-xl p-4 order-first '>
                  <p className='px-7 bg-[#ffffff]  py-3 rounded-xl  text-[#0F8AE3] border border-[#0F8AE3] cursor-pointer hover:scale-105 duration-200'><Link to='/register'>Signup</Link></p>
                   <p className='px-7 bg-[#ffffff]  py-3 rounded-xl  text-[#0F8AE3] border border-[#0F8AE3] cursor-pointer hover:scale-105 duration-200'><Link to='/login'>Login</Link></p>
                </div>
            </ul>
          )
        }
      </div>
    </div>
  )
}

export default Navbar