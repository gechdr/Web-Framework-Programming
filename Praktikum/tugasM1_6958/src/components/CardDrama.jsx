import DataDrama from "./DataDrama";

/* eslint-disable react/prop-types */
export default function CardDrama({ drama, paramDrama }) {
  // console.log(drama);
  const currentDrama = drama[paramDrama - 1];
  const listAired = currentDrama.aired_on;
  const listGenres = currentDrama.genre;

  return (
    <>
      <div className="card mb-3 bg-transparent border-0">
        <div className="row g-0">
          <div className="col-md-4 me-0">
            <img
              src={currentDrama.img}
              className="img-fluid rounded-start w-100"
              style={{ maxWidth: "600px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8 ms-0 ps-4 mt-0">
            <div className="card-body h-100">
              <h1 className="card-title text-white" style={{ fontSize: "4em" }}>
                {currentDrama.name}
              </h1>
              <DataDrama
                title="Years of Release"
                data={currentDrama.year_of_release}
              ></DataDrama>
              <br />
              <DataDrama
                title="Original Network"
                data={<u>{currentDrama.original_network}</u>}
              ></DataDrama>
              <br />
              <span className="card-text fs-3 d-flex text-white">
                Aired On:
              </span>
              <ul className="list-group list-group-horizontal ps-3 fs-3 pt-0">
                {listAired.map((aired, index) => {
                  return (
                    <li
                      className="list-group-item rounded-pill border-0 text-white m-2"
                      style={{ backgroundColor: "#078745" }}
                      key={index}
                    >
                      {aired}
                    </li>
                  );
                })}
              </ul>
              <DataDrama
                title="Episode"
                data={currentDrama.number_of_episodes}
              ></DataDrama>
              <br />
              <span className="card-text fs-3 text-white">
                Rating:{" "}
                <span className="card-text fs-3 text-warning">
                  ⭐{currentDrama.rating}
                </span>
              </span>
              <br />
              <DataDrama
                title="Synopsis"
                data={
                  <p className="card-text fs-3 ps-4">{currentDrama.synopsis}</p>
                }
              ></DataDrama>
              <span className="card-text fs-3 d-flex text-white">Genre:</span>
              <ul className="list-group list-group-horizontal ps-3 fs-3 pt-0">
                {listGenres.map((genre, index) => {
                  return (
                    <li
                      className="list-group-item rounded-pill border-0 text-white m-2"
                      style={{ backgroundColor: "#3E454B" }}
                      key={index}
                    >
                      {genre}
                    </li>
                  );
                })}
              </ul>
              <DataDrama
                title="Production Companies"
                data={<u>{currentDrama.production_companies}</u>}
              ></DataDrama>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
