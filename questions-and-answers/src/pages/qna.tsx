import { QuestionProvider } from "@/app/module/QnA/QuestionContext/QuestionContext";
import { QnA } from "@/app/module/QnA/components/QnASection/QnA";
import { questionStore } from "@/app/store/questionStore";
import { Provider } from 'react-redux';



export default function QnAPage(){
  return (
    //  handling global state in redux store
    <Provider store={questionStore}>
      {/*  handling props passing between components via context */}
       <QuestionProvider>
    <QnA />
    </QuestionProvider>
  </Provider>
  
 )
}