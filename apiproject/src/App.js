import React, { useState } from 'react';
import "./App.css"
function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <p>{user.email}</p>
    </div>
  );
}

function App() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const response = await fetch('https://reqres.in/api/users/');
    const data = await response.json();
    setUsers(data.data);
  }

  return (
    <div className="App">
      <button onClick={fetchUsers}>Get Users</button>
      <div className="user-cards">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
