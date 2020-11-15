import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatesRedux } from '../../interfaces/redux';
import { setInitialFinal } from '../../store/actions';

// import { Container } from './styles';

const PageBottom: React.FC = () => {
  const dispatch = useDispatch();
  const {
    pagination: { pagination },
  } = useSelector((state: StatesRedux) => state);
  return (
    <>
      {pagination.length !== 0 &&
        pagination.map(([initialPage, finalPage]) => (
          <button
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
    </>
  );
};

export default PageBottom;
