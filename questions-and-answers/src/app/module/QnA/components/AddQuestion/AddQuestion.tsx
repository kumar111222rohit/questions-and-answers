import React, { useEffect, useState } from 'react';
import './AddQuestion.css';
import { Header } from '@/app/components/Header/Header';
import { ModifyQuestionForm } from '../Form/ModifyQuestionForm';
import { useDispatch } from 'react-redux';
import { QuestionForm } from '@/app/types/question';
import { addQuestion } from '@/app/store/questionsReducer';
import { debounce } from '@/app/utils/debounce';

export const AddQuestion: React.FC = () => {
  const dispatch = useDispatch();
  const [enableDebounce, setIsEnableDebounce] = useState<boolean>(false);

  const handleCheckBoxState = () => {
    setIsEnableDebounce(!enableDebounce);
  };

  const debouncedHandleFormSubmit = debounce(
    (values: QuestionForm) => {
      dispatch(
        addQuestion({
          id: Date.now(),
          question: values.question,
          answer: values.answer,
        })
      );
    },
    enableDebounce ? 5000 : 0
  );

  return (
    <>
      <Header
        headerText="Create a new question"
        tooltipText="Here you can add a question"
      />
      <div className="add-question-container">
        <ModifyQuestionForm
          onSubmit={debouncedHandleFormSubmit}
          handleCheckBoxState={handleCheckBoxState}
        />
      </div>
    </>
  );
};
