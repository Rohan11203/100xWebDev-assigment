import { useState, useEffect } from "react";
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  async function getTask(){
    const response = await fetch(url);
    const jsonData = await response.json();
    setData(jsonData);
  }
  useEffect(() => {
    getTask();
  }, [url]);

  return data;
}