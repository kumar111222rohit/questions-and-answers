// import accordionData from '../../public/QnA.json';
import { getAllQuestions } from "./services/getAllQuestions";

export default async function Home() {
  // console.log(accordionData)
  const data= await getAllQuestions()
  console.log("data is ",data)

  return (
  <div>hi</div>
 
  );
}
