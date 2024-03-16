import React, { ReactNode } from "react"
import './Header.css'

interface Props{
    headerText: string;
    children?: ReactNode;
}
export const Header:React.FC<Props>=({headerText,children})=>{

    return(
        <div className="header-container">
          <div aria-label={`Header with text ${headerText}`}>
          {headerText}
          </div>
         {children && <div>
            {children}
          </div>}
        </div>
    )
}