/* eslint-disable react/prop-types */
export default function CardActor({ actor, drama, paramDrama }) {
  const currentDrama = drama[paramDrama - 1];

  const altImage =
    "https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg";

  return (
    <>
      <h1 className="text-white ps-3 mb-4">Cast</h1>
      <div className="row row-cols-6 g-4">
        {currentDrama.cast.map((cast, index) => {
          if (typeof cast === "number") {
            const tempActor = actor.filter((act) => act.id == cast);
            const currentActor = tempActor[0];
            console.log(currentActor);
            return (
              <div className="col" key={index}>
                <div className="card h-100">
                  <img
                    src={currentActor.img}
                    className="img-fluid rounded-start w-100 h-100"
                    style={{ maxWidth: "300px", maxHeight: "300px", objectFit: "cover" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{currentActor.name}</h5>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="col" key={index}>
                <div className="card h-100">
                  <img
                    src={altImage}
                    className="img-fluid rounded-start w-100 h-100"
                    style={{ maxWidth: "600px", objectFit: "cover" }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{cast}</h5>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
