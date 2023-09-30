import React from 'react'
import './headerOption.css'
import Avatar from '@mui/material/Avatar'
import { logOut } from '../redux/reducer'
import { useSelector } from 'react-redux'

type PropsType={
    Icon?:React.ElementType,
    avatar?:string,
    title:string,
    onClick?:()=>void,
}

const HeaderOption = ({Icon,title,avatar,onClick}:PropsType) => {

  const {user}=useSelector((state:any)=>state.custom);

  return (
    <div className="headerOption">
        {Icon && <Icon className="headerOption_icon" />}
        {avatar && <Avatar    className="headerOption_avatar" onClick={onClick} >{user?.email[0]}</Avatar>}
        <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption