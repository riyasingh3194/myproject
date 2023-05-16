import React, { useState } from "react";
import "./App.css"

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  const handleDelete = (index) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.splice(index, 1);
      return updatedUsers;
    });
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    if (newUser.trim() !== "") {
      setUsers((prevUsers) => [...prevUsers, newUser]);
      setNewUser("");
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          value={newUser}
          onChange={(event) => setNewUser(event.target.value)}
          placeholder="Enter a new user"
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default App;
