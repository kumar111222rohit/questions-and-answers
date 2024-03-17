import React from 'react';
import { useDispatch } from 'react-redux';

import { Header } from '@/app/components/Header/Header';
import { deleteQuestion, editQuestion } from '@/app/store/questionsReducer';
import { QuestionForm } from '@/app/types/question';
import { Button } from '@/app/components/Button/Button';

import './ViewQuestion.css';
import { useQuestionContext } from '../../QuestionContext/QuestionContext';
import { ModifyQuestionForm } from '../Form/ModifyQuestionForm';

export const ViewQuestion: React.FC = () => {
  const dispatch = useDispatch();

  const [editingQuestion, setEditingQuestion] = React.useState(false);
  const { question, setSelectedQuestion } = useQuestionContext();

  const handleEdit = () => {
    setEditingQuestion(true);
  };
  const handleDelete = (questionId: number) => {
    if (question) {
      dispatch(deleteQuestion(questionId));
      setSelectedQuestion(null);
    }
  };

  const handleQuestionEdit = (values: QuestionForm) => {
    if (question) {
      dispatch(
        editQuestion({
          id: question.id,
          question: values.question,
          answer: values.answer,
        })
      );
      setEditingQuestion(false);
    }
  };
  return (
    <>
      <Header
        headerText="View a question"
        tooltipText="Here you can see the question details"
      />
      <div className="view-question-container">
        {question ? (
          <>
            <div className="rowWrapper"></div>
            <ModifyQuestionForm
              onSubmit={handleQuestionEdit}
              readonly={!editingQuestion}
              initialValues={question}
              showSubmit={editingQuestion}
              showCheckBox={false}
            />

            <div className="button-wrapper">
              <Button
                onClick={handleEdit}
                disabled={editingQuestion}
                btnLabel="Edit question"
                customClass="edit-button"
              />
              <Button
                onClick={() => handleDelete(question.id)}
                btnLabel="Delete question"
                customClass="delete-button"
              />
            </div>
            <br />
          </>
        ) : (
          <div> No Questions to be displayed. Please add or select one.</div>
        )}
      </div>
    </>
  );
};
