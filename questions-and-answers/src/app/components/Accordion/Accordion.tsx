import React, { useState } from 'react';

interface Props{
  title: string;
  content: string;
  id?:number;
}
const Accordion :React.FC<Props>= ({ title, content,id }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="accordion-item" data-id={id}>
      <div className="accordion-title" onClick={() => setIsExpanded(!isExpanded)}>
        <div>{title}</div>
        <div>{isExpanded ? '-' : '+'}</div>
      </div>
      {isExpanded && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;