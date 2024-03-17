import React from 'react';
import { Form, Field } from 'react-final-form';

import { QuestionForm } from '@/app/types/question';
import { Input } from '@/app/components/Input/Input';
import { Button } from '@/app/components/Button/Button';

import './ModifyQuestionForm.css';
import { qnaFormValidation } from '../helper/validateForm';
import { useTranslation } from 'react-i18next';

interface AddQuestionFormProps {
  onSubmit: (values: QuestionForm) => void;
  initialValues?: Partial<QuestionForm>;
  readonly?: boolean;
  showSubmit?: boolean;
  handleCheckBoxState?: VoidFunction;
  showCheckBox?: boolean;
}

export const ModifyQuestionForm: React.FC<AddQuestionFormProps> = ({
  onSubmit,
  readonly,
  initialValues,
  showSubmit = true,
  handleCheckBoxState,
  showCheckBox = true,
}) => {
  const { t } = useTranslation();
  return (
    <Form
      onSubmit={onSubmit}
      validate={qnaFormValidation}
      initialValues={initialValues}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div  >
            <Field
              name="question"
              component={Input}
              label={t('question')}
              readonly={readonly}
              dataTestId='question'
             
            />
          </div>
          <div >
            <Field
              name="answer"
              component={Input}
              label={t('answer')}
              readonly={readonly}
              dataTestId='answer'
            />
          </div>

          {showSubmit && (
            <>
              <div className="btn-wrapper">
                {showCheckBox && (
                  <label className="checkbox">
                    <input type="checkbox" onChange={handleCheckBoxState} />
                    <span>{t('simulateApiCall')}</span>
                  </label>
                )}
                <span >
                  <Button
                    btnLabel={t('submit')}
                    type="submit"
                    disabled={submitting || pristine}
                    dataTestId='submit'
                  />
                </span>
              </div>
            </>
          )}
        </form>
      )}
    />
  );
};
