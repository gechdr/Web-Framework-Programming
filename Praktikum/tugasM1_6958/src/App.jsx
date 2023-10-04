import { actor, drama } from "./assets/drakor.json";
import NavBar from "./components/NavBar";
import CardDrama from "./components/CardDrama";
import CardActor from "./components/CardActor";
import Footer from "./components/Footer";

// console.log(actor);
// console.log(drama);

function App() {
  const paramDrama = 14;

  const exist = drama.filter((dra) => dra.id == paramDrama);

  return (
    <>
      <NavBar brand="Drakorku"></NavBar>
      {exist.length > 0 ? (
        <div className="container-fluid bg-dark p-5">
          <CardDrama drama={drama} paramDrama={paramDrama}></CardDrama>
          <hr className="mt-5 text-white w-100" />
          <CardActor
            drama={drama}
            actor={actor}
            paramDrama={paramDrama}
          ></CardActor>
        </div>
      ) : (
        <div className="container-fluid bg-dark">
          <img
            className="img-fluid w-100 h-100"
            src="https://media.licdn.com/dms/image/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/0/1581099611064?e=1701907200&v=beta&t=Lg5fpA1ixZPHlGbh8EATdeIQjh6CN25qdOyIpRvuRIU"
            alt=""
          />
        </div>
      )}

      <Footer
        copyright="2023 221116958-GeovannChandra"
        brand="Drakorku"
      ></Footer>
    </>
  );
}

export default App;
