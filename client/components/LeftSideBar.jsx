import { useAuth0 } from "@auth0/auth0-react";

export default function LeftSideBar () {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <div id='sidebar'>
            <ul>
                <li><a href="#">Home</a></li>
                {/* <li><Settings /></li> */}
                <li>Search User</li>
                <li>Friends</li>
                {/* <li><Notifications /></li> */}
            </ul>
        </div>
        )
    );
}