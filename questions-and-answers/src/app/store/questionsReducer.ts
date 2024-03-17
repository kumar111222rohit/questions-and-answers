import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from '../types/question';

type QuestionsState = {
  questions: Question[];
  isSortedAscending: boolean;
};

const initialState: QuestionsState = {
  questions: [],
  isSortedAscending: true,
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<Question | Question[]>) => {
      // adding capability here to either add a single question or multiple questions from API call
      if (Array.isArray(action.payload)) {
        state.questions.push(...action.payload);
      } else {
        state.questions.push(action.payload);
      }
    },
    editQuestion: (state, action: PayloadAction<Question>) => {
      // to edit a single question
      const index = state.questions.findIndex(
        question => question.id === action.payload.id
      );
      if (index !== -1) {
        state.questions[index] = action.payload;
      }
    },
    deleteQuestion: (state, action: PayloadAction<number>) => {
      // to delete a single question
      state.questions = state.questions.filter(
        question => question.id !== action.payload
      );
    },
    deleteAllQuestions: state => {
      // delete all questions
      state.questions = [];
    },
    sortQuestions: state => {
      // sorting can be done in asc or desc order alternatively
      // not mutating the original state while performing sort
      const sortedQuestions = [...state.questions].sort((a, b) => {
        const ascSortOrder = a.question.localeCompare(b.question);
        return state.isSortedAscending ? ascSortOrder : -ascSortOrder;
      });
      state.questions = sortedQuestions;
      // here alternating between asc and desc order
      state.isSortedAscending = !state.isSortedAscending;
    },
  },
});

export const {
  addQuestion,
  editQuestion,
  deleteQuestion,
  deleteAllQuestions,
  sortQuestions,
} = questionsSlice.actions;

export default questionsSlice.reducer;
