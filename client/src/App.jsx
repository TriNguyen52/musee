import './Home.css'
// import Notifications from '../components/Noti.jsx'
import Settings from '../components/Settings.jsx'
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import LeftSideBar from '../components/LeftSideBar';
import NewsFeed from '../components/Newsfeed';
import RightSideBar from '../components/RightSideBar';
import 'reactjs-popup/dist/index.css';
import { useAuth0 } from '@auth0/auth0-react';

export default function App() {
    const { isLoading, error } = useAuth0();

    return (
    <div id="container">
        { error && <p>Authentication Error</p>}
        {!error && isLoading && <p>Loading...</p>}
        {!error && !isLoading && (
            <>
                <LoginButton/>
                <LogoutButton/>
                <LeftSideBar/>
                <NewsFeed/>
                <RightSideBar
                    username="Tri Nguyen"
                    song="Ngot - De Quen"
                />
            </>
        )}
    </div>
    )
}

// function UserInfo ({ user, size }) {
//     return (
//         <div>
//             <img 
//                 className='avatar'
//                 src={user.avatar}
//                 alt={user.name}
//                 width={size}
//                 height={size}
//             />
//             <h2>{username}</h2>

//         </div>
//     )
// }



