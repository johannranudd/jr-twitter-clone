import { StyledMain } from '../styles/index.styles';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

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
      {/* <button onClick={getUser}>getUser</button> */}
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
