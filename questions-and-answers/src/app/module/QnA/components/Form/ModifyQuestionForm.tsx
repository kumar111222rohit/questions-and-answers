import React from 'react';
import { Form, Field } from 'react-final-form';
import './ModifyQuestionForm.css';

import { qnaFormValidation } from '../helper/validateForm';
import { QuestionForm } from '@/app/types/question';
import { Input } from '@/app/components/Input/Input';
import { Button } from '@/app/components/Button/Button';

interface AddQuestionFormProps {
  onSubmit: (values: QuestionForm) => void;
  initialValues?: Partial<QuestionForm>;
  readonly?: boolean;
  showSubmit?: boolean;
  handleCheckBoxState?: VoidFunction;
}

export const ModifyQuestionForm: React.FC<AddQuestionFormProps> = ({
  onSubmit,
  readonly,
  initialValues,
  showSubmit = true,
  handleCheckBoxState,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={qnaFormValidation}
      initialValues={initialValues}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="question"
              component={Input}
              label="Question"
              readonly={readonly}
            />
          </div>
          <div>
            <Field
              name="answer"
              component={Input}
              label="Answer"
              readonly={readonly}
            />
          </div>

          {showSubmit && (
            <>
              <div className="btn-wrapper">
                <label className="checkbox">
                  <input type="checkbox" onChange={handleCheckBoxState} />
                  <span>Check to Simulate API call</span>
                </label>
                <span>
                  <Button
                    btnLabel="Submit"
                    type="submit"
                    disabled={submitting || pristine}
                  />
                </span>
              </div>
            </>

            // <div className="buttons">
            //   <button type="submit" disabled={submitting || pristine}>
            //     Submit
            //   </button>
            // </div>
          )}
        </form>
      )}
    />
  );
};
