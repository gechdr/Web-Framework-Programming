// 1

// import Card from './components/Card';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

// import { a as aaa,b } from './components/Card';

// function App() {
//   return <div className='row m-auto'>
//   <Card img={reactLogo} title="React" button="React">Lorem ipsum dolor sit amet.</Card>
//   <Card img={viteLogo} title="Vite" button="Vite">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aspernatur?</Card>
//   <Card img={"https://picsum.photos/200"} title="Picsum" button="Picsum">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero eum iste nisi repellendus! Odit modi sed impedit labore voluptates facilis?</Card>
//   </div>
// }

// 2

import Faetures1 from "./components/Features1";
import Faetures2 from "./components/Features2";
import Container from "./components/Container";
import './App.css'

function App() {
  return <>
    <Container title={"Columns with icons"} />

    <div className="row">
      <Faetures1 img={"https://picsum.photos/200"} title={"Featured title"} button={"Call to action"} buttonUrl={"#"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero eum iste nisi repellendus! Odit modi sed impedit labore voluptates facilis?</Faetures1>
      <Faetures1 img={"https://picsum.photos/200"} title={"Featured title"} button={"Call to action"} buttonUrl={"#"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero eum iste nisi repellendus! Odit modi sed impedit labore voluptates facilis?</Faetures1>
      <Faetures1 img={"https://picsum.photos/200"} title={"Featured title"} button={"Call to action"} buttonUrl={"#"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero eum iste nisi repellendus! Odit modi sed impedit labore voluptates facilis?</Faetures1>
    </div>

    {/* <div className="btn btn-warning w-90 h-10 ms-3 me-3"></div> */}

    <Container title={"Hanging icons"} />

    <div className="row">
      <Faetures2 img={"https://picsum.photos/200"} title={"Featured title"} button={"Call to action"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero eum iste nisi repellendus! Odit modi sed impedit labore voluptates facilis?</Faetures2>
      <Faetures2 img={"https://picsum.photos/200"} title={"Featured title"} button={"Call to action"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero eum iste nisi repellendus! Odit modi sed impedit labore voluptates facilis?</Faetures2>
      <Faetures2 img={"https://picsum.photos/200"} title={"Featured title"} button={"Call to action"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero eum iste nisi repellendus! Odit modi sed impedit labore voluptates facilis?</Faetures2>
    </div>
  </>
}

export default App;
