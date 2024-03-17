import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Header } from '@/app/components/Header/Header';
import { QuestionForm } from '@/app/types/question';
import { addQuestion } from '@/app/store/questionsReducer';
import { debounce } from '@/app/utils/debounce';
import { DELAY_TIME_IN_MILLISECONDS } from '@/app/constants/UrlContants';

import { ModifyQuestionForm } from '../Form/ModifyQuestionForm';
import './AddQuestion.css';

export const AddQuestion: React.FC = () => {
  const { t } = useTranslation();
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
    enableDebounce ? DELAY_TIME_IN_MILLISECONDS : 0
  );

  return (
    <>
      <Header
        headerText={t('createQuestion')}
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
