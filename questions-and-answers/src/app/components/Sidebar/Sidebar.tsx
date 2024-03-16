"use client"
import React, { useEffect, useState } from "react"
import './Sidebar.css'
import { Header } from "../Header/Header"
// import { getAllQuestions } from "@/app/services/getAllQuestions"
import Accordion from "../Accordion/Accordion"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/app/store/questionStore"
import { DeleteIcon } from "../DeleteIcon/DeleteIcon"
import { sortQuestions } from "@/app/store/questionsReducer"

export const Sidebar:React.FC=()=>{
    const questions = useSelector((state:RootState) => state.questions.questions);
    const dispatch= useDispatch()

    // console.log("questions",questions)

    // const [allQuestions, setAllQuestions]= React.useState([])
    // useEffect(() => {
    //     const fetchQuestions = async () => {
    //         const data = await getAllQuestions();
    //         setAllQuestions(data); 
    //     };
    //     fetchQuestions();
    // }, []);

    // console.log(allQuestions)

    const handleSort=()=>{
        dispatch(sortQuestions())
    }

    const HeaderActions: React.FC=()=>{
        return <>
            <div className="header-action-container">
                <div className="sort-action" onClick={handleSort}>sort</div>
                <DeleteIcon />
            </div>
        </>
    }
    return(
        <>
       
        <div className="sidebar-container">
          <Header headerText="Sidebar" children={<HeaderActions/>} />
         {questions.map(question=><Accordion question={question} key={question.id} />)}
        </div>
        </>
    )
}