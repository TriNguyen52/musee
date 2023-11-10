import { useAuth0 } from "@auth0/auth0-react";
import Popup from 'reactjs-popup';

export default function NewsFeed () {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
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
    );
}