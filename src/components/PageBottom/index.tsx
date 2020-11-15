import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatesRedux } from '../../interfaces/redux';
import { setInitialFinal } from '../../store/actions';

import { Container, ContainerPagination } from './styles';

const PageBottom: React.FC = () => {
  const dispatch = useDispatch();
  const {
    pagination: { pagination, initialFinal },
  } = useSelector((state: StatesRedux) => state);
  const [init] = initialFinal ?? [1, 10];
  return (
    <Container>
      <ContainerPagination
        style={{ width: `${(pagination.length / 10) * 100}%` }}
      >
        {pagination.length !== 0 &&
          pagination.map(([initialPage, finalPage]) => (
            <button
              className={initialPage === init ? 'active' : ''}
              key={initialPage + finalPage}
              type="button"
              onClick={() => {
                dispatch(setInitialFinal([initialPage, finalPage]));
              }}
            >
              <p>
                {initialPage}-{finalPage}
              </p>
            </button>
          ))}
      </ContainerPagination>
    </Container>
  );
};

export default PageBottom;
