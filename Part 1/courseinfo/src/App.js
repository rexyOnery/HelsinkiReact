import React from "react";

const Header = (props) => {
  return(
    <h1>{props.course.name}</h1>
  )
}

const Part  = (props) => {
  return(    
    <p>
        {props.name} {props.numbers}
    </p>
  )
}

const Content  = (props) => {
 
  return(
    
    <div> 
        <Part name={props.part[0].name} numbers={props.part[0].numbers} />
       
        <Part name={props.part[1].name} numbers={props.part[1].numbers} />
        <Part name={props.part[2].name} numbers={props.part[2].numbers} />
    </div>
  )
}

const Total  = (props) => {
  return(
    <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  console.log(course);
  return (
    <div>
      <Header course={course}/>

      <Content part={course.parts} /> 
      
      <Total total = {course.parts} />
    </div>
  )
}

export default App; 
