import { ReduxState } from '../store.types';

export const selectIsLoading = (state: ReduxState) => state.asyncStatus.isLoading;
