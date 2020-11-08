import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContainerHome } from './styles';
import api from '../../services/api';
import { createPagination } from '../../store/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    api
      .get('/pokemon')
      .then((res) => dispatch(createPagination(res.data.count)));
  }, []);

  return <ContainerHome>My App</ContainerHome>;
}

export default App;
