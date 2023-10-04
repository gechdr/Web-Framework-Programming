/* eslint-disable react/prop-types */
export default function NavBar({brand}) {
  return (
    <>
      <nav className="navbar" style={{ backgroundColor: "#000000" }}>
        <div className="container ms-5">
          <a
            href="#"
            className="navbar-brand"
            style={{ color: "#32db1f", fontSize: "3em" }}
          >
            {brand}
          </a>
        </div>
      </nav>
    </>
  );
}
