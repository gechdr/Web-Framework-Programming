/* eslint-disable react/prop-types */
export default function Footer({ copyright, brand }) {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#000000" }}>
      <div className="d-flex flex-wrap justify-content-between align-items-center py-3 px-5">
        <p className="col-md-4 mb-0 text-white">&copy; {copyright}</p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        ></a>

        <h1
          className="col-md-1 justify-content-end"
          style={{ color: "#32db1f" }}
        >
          {brand}
        </h1>
      </div>
    </div>
  );
}
