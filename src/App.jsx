import "./App.css";

import Todo from "./Todo";

import Actor from "./Actor";
import Singer from "./Singer";

function App() {

  const actors = ['raya', 'ra', 'hossain'];


  const singers = [
    {name: 'sabila', age: 5},
    {name: 'eva', age: 6},
    {name: 'nisha', age: 5},
  ]

  return (
    <>
      <h1>Vite + React</h1>
      {/* <Device name="laptp" price="2"></Device>
      <Person></Person>
      <Developer></Developer>
      <Student grade="9" score="8"></Student> */}
      {/* 
      <Todo task="react" 
      isDone={true}>
        
      </Todo>
      <Todo task="html" isDone={false}></Todo>
      <Todo task="css" isDone={false}></Todo> */}
      {/* <Actor name="rayaan"></Actor> */}


      {
        actors.map(actor=> <Actor name={actor} ></Actor>)
      }

      {
        singers.map(singer => <Singer singer={singer} key={singer.name}  ></Singer>)
      }
    </>
  );
}

// function Student({grade, score}) {
//   return (
//     <div>
//       <h2>class: {grade} </h2>
//       <h2>scrore:{score} </h2>
//     </div>
//   );
// }

// function Device(props) {
//   return (
//     <h2>
//       The device: {props.name} price: {props.price}{" "}
//     </h2>
//   );
// }

// function Person() {
//   const name = "rayaan";
//   const age = 9;
//   const money = 10;

//   return (
//     <h3>
//       I am {name}, my age {age} , age+money{age + money}
//     </h3>
//   );
// }

// function Developer() {
//   const developerStyle = {
//     margin: "20px",
//     border: "2px solid black",
//     borderRadius: "20px",
//   };

//   return (
//     <div style={developerStyle}>
//       <h4>rayaan</h4>
//       <p>coding</p>
//     </div>
//   );
// }

export default App;
