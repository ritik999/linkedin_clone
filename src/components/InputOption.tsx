import React from 'react'
import './inputOption.css';

type PropsType={
    Icon:React.ElementType,
    title:string,
    color?:string
}

const InputOption = ({Icon,title,color}:PropsType) => {
  return (
    <div className="inputOption">
        <Icon style={{color:color}} />
        <h4>{title}</h4>
    </div>
  )
}

export default InputOption