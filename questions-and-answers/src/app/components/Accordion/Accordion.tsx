import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Question } from '@/app/types/question';
import { useQuestionContext } from '@/app/module/QnA/QuestionContext/QuestionContext';

import './Accordion.css';
import { Button } from '../Button/Button';

interface Props {
  question: Question;
}
const Accordion: React.FC<Props> = ({ question }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { setSelectedQuestion, setIsModalOpen } = useQuestionContext();
  const { t } = useTranslation();

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    setSelectedQuestion(question);
  };

  const handleOpenQuestion = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="accordion-container" onClick={handleClick}>
      <div
        className="accordion-item"
        data-id={question.id}
        key={question.id}
        aria-label="Accordion"
      >
        <div className="accordion-title">
          <div aria-label={`Question ${question.question}`}>
            {question.question}
          </div>
          <div className="cta-wrapper">
            <Button
              customClass="mobile-open-button"
              aria-label="Click to open question"
              onClick={handleOpenQuestion}
              btnLabel={t('open')}
            />
            <div aria-label="Click to see answer">{isExpanded ? '-' : '+'}</div>
          </div>
        </div>
        {isExpanded && (
          <div
            className="accordion-content"
            aria-label={`Answer ${question.answer}`}
          >
            {question.answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
