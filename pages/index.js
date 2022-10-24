import { StyledMain } from '../styles/index.styles';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await fetch('/api/getCustomers');
    const newData = await res.json();
    setData(newData);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return <StyledMain>test 3</StyledMain>;
}
