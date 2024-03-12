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
            <Header />
            <div>
            <Sidebar />
            <div>
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