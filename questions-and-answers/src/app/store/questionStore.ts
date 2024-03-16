import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './questionsReducer';

export const questionStore = configureStore({
    reducer: {
        questions: questionsReducer,
    },
});
export type RootState = ReturnType<typeof questionStore.getState>;
