import { useState } from 'react'
import './Home.css'
import Notifications from './Noti.jsx'
import Settings from './Settings.jsx'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Home() {

    return (
    <div id="container">
        <LeftSideBar/>
        <NewsFeed/>
        <RightSideBar
            username="Tri Nguyen"
            song="Ngot - De Quen"
        />
    </div>
    )
}

function LeftSideBar () {
    return (
        <div id='sidebar'>
            <ul>
                <li><a href="#">Home</a></li>
                {/* <li><Settings /></li> */}
                <li>Search User</li>
                <li>Friends</li>
                <li><Notifications /></li>
            </ul>
        </div>
    )
}

function NewsFeed () {
    return (
        <div id="content">
            <div id="post-area">
                <h3>Wanna send a song?</h3>
                <br></br>
                <div>
                    <Popup trigger=
                        {<button> Start here! </button>} 
                        modal nested>
                        {
                            close => (
                                <div className='modal'>
                                    <div className='contentSettings'>
                                        <h4>Send a song</h4>
                                        <form action="/action_page.php">
                                            {/* <label for="fname">Search music:</label><br></br> */}
                                            <input type="text" id="fname" name="fname" value="Search music"></input><br></br>
                                            {/* <label for="lname">Last name:</label><br></br> */}
                                            <input type="text" id="lname" name="lname" value="Search user"></input><br></br>
                                            <input type="text" id="lname" name="lname" value="Message"></input><br></br>
                                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"></input>
                                            <label for="vehicle3">Anonymous</label><br></br>
                                            <input type="submit" value="Submit"></input><br></br>
                                        </form> 
                                    </div>
                                    {/* <div>
                                        <button onClick={() => close()}>Close</button>
                                    </div> */}
                                </div>
                            )
                        }
                    </Popup>
                </div>
            </div>
            {/* <div class="actions">
            <button onclick="toggleLike('post-1')">Like</button>
            <button onclick="deletePost('post-1')">Delete</button>
            </div> */}
        </div>
    )
}

function RightSideBar ({ username, song }) {
    return (
        <div>
            <div id="right-sidebar">
                <h2>{username}</h2>
                <h3>Pinned songs</h3>
                <ul class="friend-list">
                    <li class="friend-expanded">{username}
                        <ul>
                            <li>{song}</li>
                        </ul>
                    </li>
                    <li>Friend 2</li>
                    <li>Friend 3</li>
                </ul>
                </div>
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



