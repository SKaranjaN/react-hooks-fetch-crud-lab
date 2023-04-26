import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";


function QuestionList() {

  const [questions, setQuestions] = useState([]);
console.log(questions)
  useEffect(
    ()=>{
      fetch("http://localhost:3000/questions")
      .then((r)=>r.json())
      .then((question)=>setQuestions(question))
    },
  []);
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */
      questions.map((quiz)=>(
        <QuestionItem key={quiz} question={quiz}/>
      ))}</ul>
    </section>
  );
}

export default QuestionList;
