import React from 'react';
import { Form, Field } from 'react-final-form';

import { qnaFormValidation } from '../helper/validateForm';
import { QuestionForm } from '@/app/types/question';
import { Input } from '@/app/components/Input/Input';

interface AddQuestionFormProps {
  onSubmit: (values: QuestionForm) => void;
  initialValues?: Partial<QuestionForm>;
  readonly?:boolean;
  showSubmit?:boolean;
}

export const ModifyQuestionForm: React.FC<AddQuestionFormProps> = ({ onSubmit,readonly,initialValues,showSubmit=true }) => {
  return (
    <Form
      onSubmit={onSubmit} 
      validate={qnaFormValidation}
      initialValues={initialValues}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="question" component={Input} label="Question" readonly={readonly} />
          </div>
          <div>
            <Field name="answer" component={Input} label="Answer" readonly={readonly} />
          </div>
         {showSubmit && <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
          </div>}
        </form>
      )}
    />
  );
};
