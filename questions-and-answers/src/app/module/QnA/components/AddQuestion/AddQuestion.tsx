import React from "react"
import './AddQuestion.css'
import { Header } from "@/app/components/Header/Header"
import { ModifyQuestionForm } from "../Form/ModifyQuestionForm"
import { useDispatch } from "react-redux"
import { QuestionForm } from "@/app/types/question"
import { addQuestion } from "@/app/store/questionsReducer"

export const AddQuestion:React.FC=()=>{
  const dispatch = useDispatch();

  const handleFormSubmit = (values: QuestionForm) => {
    dispatch(addQuestion({
      id: Date.now(),
      question: values.question,
      answer: values.answer,
    }));
  };


    return(
        <>
          <Header headerText="Create a new question" />
        <div className="add-question-container">
            
        <ModifyQuestionForm onSubmit={handleFormSubmit}/ >          
        </div>
        </>
    )
}