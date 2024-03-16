import React, { useContext, useState } from 'react';
import './Accordion.css';
import { Question } from '@/app/types/question';
import { useQuestionContext } from '@/app/module/QnA/QuestionContext/QuestionContext';

interface Props {
  question: Question;
}
const Accordion: React.FC<Props> = ({ question }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { setSelectedQuestion, setIsModalOpen } = useQuestionContext();

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    setSelectedQuestion(question);
  };

  const handleOpenQuestion = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="accordion-item"
      data-id={question.id}
      key={question.id}
      aria-label="Accordion"
    >
      <div className="accordion-title" onClick={handleClick}>
        <div aria-label={`Question ${question.question}`}>
          {question.question}
        </div>
        <div className="cta-wrapper">
          <div
            className="mobile-open-button"
            aria-label="Click to open question"
            onClick={handleOpenQuestion}
          >
            Open
          </div>
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
  );
};

export default Accordion;
