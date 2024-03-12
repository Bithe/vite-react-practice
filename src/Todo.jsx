// export default function Todo( {task, isDone} ) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   }
//   else{
//     return <li>work on: {task}</li>;

//   }
// }


// export default function Todo( {task, isDone}){

//    return(
//     <li>{isDone ? 'Finished' : 'work on'} : {task} </li>
//    )
// }


// export default function Todo( {task, isDone}){

//     return(
//      <li>{task} {isDone && ':Done'} </li>
//     )
//  }
 

//  export default function Todo( {task, isDone}){

//     return(
//      <li>{task} {isDone || ':Not Done'} </li>
//     )
//  }


 
export default function Todo( {task, isDone} ) {
    let listItem;

  if (isDone) {
    listItem = <li>Finished: {task}</li>;
  }
  else{
    listItem = <li>work on: {task}</li>;

  }
  return listItem;
}

