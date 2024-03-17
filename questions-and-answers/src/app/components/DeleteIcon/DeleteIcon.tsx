import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAllQuestions } from '@/app/store/questionsReducer';
import { useQuestionContext } from '@/app/module/QnA/QuestionContext/QuestionContext';
import { Button } from '../Button/Button';

export const DeleteIcon: React.FC = () => {
  const dispatch = useDispatch();
  const { setSelectedQuestion } = useQuestionContext();

  const handleDeleteAll = React.useCallback(() => {
    // for the alert we can also add Yes/NO capabilty later as per product request.
    alert('Are you sure you want to delete all questions?');

    dispatch(deleteAllQuestions());
    setSelectedQuestion(null);
  }, []);
  return (
    <Button
      onClick={handleDeleteAll}
      ariaLabel="Delete all questions"
      btnLabel="Delete All"
      customClass="delete-all-btn"
    />
  );
};
