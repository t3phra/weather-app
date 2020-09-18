import { createReducer } from 'typesafe-actions';

import { AsyncStatusReducerState } from './async-status.types';
import { AsyncStatusActionsAll, setLoadingStatus, setErrorMessage } from './async-status.actions';

const InitialState: AsyncStatusReducerState = {
  isLoading: false,
  error: '',
};

const AsyncStatusReducer = createReducer<
AsyncStatusReducerState,
AsyncStatusActionsAll
>(InitialState)
  .handleAction(setLoadingStatus, (state, action) => ({
    ...state,
    isLoading: action.isLoading,
  }))
  .handleAction(setErrorMessage, (state, action) => ({
    ...state,
    error: action.error,
  }));

export default AsyncStatusReducer;
