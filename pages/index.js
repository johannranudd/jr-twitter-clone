import { StyledMain } from '../styles/index.styles';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (user.name.length >= 6 && user.email.includes('noroff.no')) {
      const res = await fetch('/api/newUser', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      });
    }
  }

  async function getData() {
    const res = await fetch('/api/getUsers');
    const newData = await res.json();
    setData(newData);
    // console.log(data[0].data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledMain>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' onChange={handleChange} />
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' name='email' onChange={handleChange} />
        <button type='submit'>submit</button>
      </form>
      <h2>Users</h2>
      <ul>
        {data &&
          data.map((user) => {
            const { name, email } = user.data;
            return (
              <li key={user.ts}>
                <p>{name}</p>
                <p>{email}</p>
              </li>
            );
          })}
      </ul>
    </StyledMain>
  );
}
