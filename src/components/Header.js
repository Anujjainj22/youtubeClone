import React from 'react'
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux'
import {toggle} from '../utils/youtubeSlice'

const Header = () => {
    const store = useSelector(data=> data.ytSlice.toggleButton)
    const dispatch1 = useDispatch()
  return (
 
    <div className='p-1  rounded-md w-full bg-white  shadow-md flex flex-row justify-between fixed  z-50'>
    <div className='flex'>
    <img className="w-9 h-8 mt-3 cursor-pointer" onClick={()=>{ dispatch1(toggle())}} src="https://cdn1.iconfinder.com/data/icons/arrows-elements-outline/128/ic_round_hamburger_menu-512.png" alt="hamburger" />
     <img className="w-14 h-14  mx-5  cursor-pointer"   src="https://th.bing.com/th/id/OIP.3rSTYI2unlM-9raJQJW3lwHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Youtube" />
    </div>
        <Search/>
        <img className="w-9 h-9 mt-3 cursor-pointer "   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY4aT6JxU4kE9F6X8YQ30MGiFd89dh10Wj5ozmejxYA&s" alt="Youtube" />
    </div>
  
  )
}

export default Header
