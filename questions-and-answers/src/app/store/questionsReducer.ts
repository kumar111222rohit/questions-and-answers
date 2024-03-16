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
      if (Array.isArray(action.payload)) {
        // If the payload is an array, from API call, add all questions
        state.questions.push(...action.payload);
      } else {
        // If the payload is a single question, from form, add it
        state.questions.push(action.payload);
      }
    },
    editQuestion: (state, action: PayloadAction<Question>) => {
      const index = state.questions.findIndex(
        question => question.id === action.payload.id
      );
      if (index !== -1) {
        state.questions[index] = action.payload;
      }
    },
    deleteQuestion: (state, action: PayloadAction<number>) => {
      state.questions = state.questions.filter(
        question => question.id !== action.payload
      );
    },
    deleteAllQuestions: state => {
      state.questions = [];
    },
    sortQuestions: state => {
      const sortedQuestions = [...state.questions].sort((a, b) => {
        const ascSortOrder = a.question.localeCompare(b.question);
        return state.isSortedAscending ? ascSortOrder : -ascSortOrder;
      });
      state.questions = sortedQuestions;
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
