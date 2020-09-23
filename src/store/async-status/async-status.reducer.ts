import { createReducer } from 'typesafe-actions';

import { AsyncStatusReducerState } from './async-status.types';
import { AsyncStatusActionsAll, setErrorMessage, setLoadingStatus } from './async-status.actions';

const initialState: AsyncStatusReducerState = {
  isLoading: false,
  error: '',
};

const AsyncStatusReducer = createReducer<
AsyncStatusReducerState,
AsyncStatusActionsAll
>(initialState)
  .handleAction(setLoadingStatus, (state, action) => ({
    ...state,
    isLoading: action.isLoading,
  }))
  .handleAction(setErrorMessage, (state, action) => ({
    ...state,
    error: action.error,
  }));

export default AsyncStatusReducer;
