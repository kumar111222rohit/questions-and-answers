import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteAllQuestions } from '@/app/store/questionsReducer';
import { useQuestionContext } from '@/app/module/QnA/QuestionContext/QuestionContext';

export const DeleteIcon: React.FC=()=>{
const dispatch = useDispatch();
const { setSelectedQuestion} = useQuestionContext();

const handleDeleteAll= React.useCallback(()=>{
    alert('Are you sure you want to delete all questions?');
    // for the alert we can also add Yes/NO capabilty later.
    dispatch(deleteAllQuestions());
    setSelectedQuestion(null)
},[])
return(
    <div onClick={handleDeleteAll} aria-label='Delete all questions'>
        Delete All
    </div>
);
}