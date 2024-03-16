import React from "react"
import './QnA.css'
import { Header } from "@/app/components/Header/Header"
import { Footer } from "@/app/components/Footer/Footer"
import { Sidebar } from "@/app/components/Sidebar/Sidebar"
import { AddQuestion } from "../AddQuestion/AddQuestion"
import { ViewQuestion } from "../ViewQuestion/ViewQuestion"

export const QnA:React.FC=()=>{

    return(
        <div className="qna-container">
          <Header headerText="QnA dashboard" />
            <div className="main-content-container">
            <Sidebar />
            <div className="section-wrapper">
            <ViewQuestion/>
            <AddQuestion />
            </div>
            </div>
            <div className=""></div>
            <div className=""></div>
            <Footer />
        </div>
    )
}
