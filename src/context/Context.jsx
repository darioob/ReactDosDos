import { createContext, useState, useEffect } from 'react'
const PHOTO_URL = "../public/photos.json"

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const generateData = (array) => {
    setData(array)
  }

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
   
      const response = await fetch(PHOTO_URL);
      const data = await response.json();
      generateData(data.photos);

  }

  return (
    < Context.Provider value={{ data, generateData }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;