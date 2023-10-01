import './App.css'

function Hello(){
  return <h1>Hello World!</h1>
}

function Hello2(){
  const target = "Dunia";
  return <h1>Hello {target}!</h1>
}

function PropsComponent(props) {
  console.log(props);
  const { prop1, prop2 } = props;
  return (
    <table>
      <tbody>
        <tr>
          <td>prop1</td>
          <td>:</td>
          <td>{prop1}</td>
        </tr>
        <tr>
          <td>prop2</td>
          <td>:</td>
          <td>{prop2}</td>
        </tr>
      </tbody>
    </table>
  );
}
function Paragraph(props) {
  console.log(props.children);
  return <p>{props.children}</p>;
}

function ElementStyle({ children }) {
  return (
    <marquee><p style={{ color: "red", fontSize: "24pt" }} className="logo">
      {children}
    </p></marquee>
  );
}

function ConditionalComponent({condition}){
  let x = "";
  if (condition=="true") {
    x = <h1 style={{ color: "green", fontSize: "24pt" }} className="iftrue">TRUE</h1>;
  }
  else {
    x = <h1 style={{ color: "red", fontSize: "24pt" }} className="iffalse">TIDAK TRUE</h1>
  }

  return x;
}

function ListItem(){
  const products = [
    {name: "a", id:1},
    {name: "b", id:2},
    {name: "c", id:3}
  ];
  const list = [];
  for (let i = 0; i < products.length; i++) {
    list.push(<li key={products[i].id}>{products[i].name}</li>)
  }
  return <ol>{list}</ol>;
}

function ListHello({n}){
  const items = [];
  for (let i = 0; i < n; i++) {
    items.push(<Hello key={i} />)
  }
  return <ul>{items}</ul>;
}

function App() {

  return <>
  <Hello />
  <Hello2 />
  <PropsComponent prop1="aaa" prop2="bbb" />
  <Paragraph>Halo, nama saya <em>Geo</em> wkwkwk.</Paragraph>
  <ElementStyle>Hahahahahahaha</ElementStyle>
  <ConditionalComponent condition="false" />
  <ListItem />
  <ListHello n="1000"/>
  </>;
}

export default App
