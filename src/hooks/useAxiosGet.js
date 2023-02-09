import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
const useAxiosGet = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);

  const connect = async () => {
    try {
      const response = await axios.get(url);
      setData((data) => [...data, { ...response.data, id: uuid() }]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoaded(true);
    }
  };

  return { data, connect };
};

export default useAxiosGet;
