import React, {useState} from "react";
import UsersList from "../../components/usersList/UsersList";

function MainPage(props) {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    };
    return (
        <div>
            <button onClick={getUsers}>
                Get users
            </button>
            <UsersList users={users} />
        </div>
    );
}

export default MainPage;
