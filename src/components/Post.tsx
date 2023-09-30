import React,{forwardRef} from 'react'
import './post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';



type PropsType={
    name:string,
    description:string,
    message:string,
    photoUrl?:string
}
const Post = forwardRef(({name,description,message,photoUrl}:PropsType,ref:any) => {
  return (
    <div ref={ref} className="post">
        <div className="post_header">
            <Avatar />
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post_body">
            <p>{message}</p>
        </div>

        <div className="post_button">
            <InputOption Icon={ThumbUpIcon} title='Like' color='gray' />
            <InputOption Icon={CommentIcon} title='Comment' color='gray' />
            <InputOption Icon={ShareIcon} title='Share' color='gray' />
            <InputOption Icon={SendIcon} title='Send' color='gray' />
        </div>
    </div>
  )
})

export default Post