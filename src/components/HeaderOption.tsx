import React from 'react'
import './headerOption.css'
import Avatar from '@mui/material/Avatar'

type PropsType={
    Icon?:React.ElementType,
    avatar?:string,
    title:string,
}

const HeaderOption = ({Icon,title,avatar}:PropsType) => {
  return (
    <div className="headerOption">
        {Icon && <Icon className="headerOption_icon" />}
        {avatar && <Avatar className="headerOption_avatar" src={avatar} />}
        <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption