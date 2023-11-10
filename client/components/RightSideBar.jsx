import { useAuth0 } from "@auth0/auth0-react";

export default function RightSideBar ({ username, song }) {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <div>
            <div id="right-sidebar">
                <h2>{username}</h2>
                <h3>Pinned songs</h3>
                <ul className="friend-list">
                    <li className="friend-expanded">{username}
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
    );
}