import { Question } from "@/app/types/question";
import React, { ReactNode, useState } from "react";

interface QuestionContextValue {
    question: Question | null;
    setSelectedQuestion: React.Dispatch<React.SetStateAction<Question | null>>;
  }
interface QuestionProviderProps {
  children: ReactNode;
}
  
  const QuestionContext = React.createContext<QuestionContextValue 
  | undefined>(undefined);


  export const QuestionProvider: React.FC<QuestionProviderProps> = ({children}) => {
    const [question, setSelectedQuestion] = useState<Question | null>(null);
    return (
      <QuestionContext.Provider value={{question, setSelectedQuestion}}>
        {children}
      </QuestionContext.Provider>
    );
  };

  export const useQuestionContext = () => {
    const questionContext = React.useContext(QuestionContext);
    if (questionContext === undefined) {
      throw new Error('Context should be inside a provider');
    }
    return questionContext;
  };