import SearchIcon from '@mui/icons-material/Search';
import linkedin_icon from '../assets/linkedin.png'
import './header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react'
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/reducer';
import { auth } from '../firebase/firebase';
import { signOut } from 'firebase/auth';


const Header = () => {
  const dispatch=useDispatch();

  const logoutOfApp=()=>{
      dispatch(logOut());
      signOut(auth).then(()=>console.log('log out successfully')).catch(err=>console.log(err.message));
  }

  return (
    <div className='header'>
        <div className="header_left">
            <img src={linkedin_icon} alt='linkedIn' />

            <div className="header_search">
                <SearchIcon />
                <input type='text' />
            </div>
        </div>

        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='My Network' />
            <HeaderOption Icon={ChatIcon} title='My Network' />
            <HeaderOption Icon={NotificationsIcon} title='My Network' />         
            <HeaderOption avatar={linkedin_icon} title='Me' onClick={logoutOfApp} />         
        </div>
    </div>
  )
}

export default Header