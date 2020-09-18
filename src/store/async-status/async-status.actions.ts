import { createCustomAction, ActionType } from 'typesafe-actions';

export const setLoadingStatus = createCustomAction('Set loading status', (isLoading: boolean) => ({ isLoading }));

export const setErrorMessage = createCustomAction('Set error message', (error: string) => ({ error }));

export type AsyncStatusActionsAll = ActionType<typeof setLoadingStatus | typeof setErrorMessage>;
