import SearchIcon from '@mui/icons-material/Search';
import linkedin_icon from '../assets/linkedin.png'
import './header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Header = () => {
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
            <HeaderOption avatar={linkedin_icon} title='Me' />         
        </div>
    </div>
  )
}

export default Header