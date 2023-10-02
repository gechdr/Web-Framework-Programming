import CatalogSection from "./components/CatalogSection.jsx";

function App() {
  const itemList = [
    { id: 1, name: "Baju", price: 120000, stock: 12 },
    { id: 2, name: "Celana", price: 80000, stock: 8 },
    { id: 3, name: "Jaket", price: 250000, stock: 9 },
    { id: 4, name: "Sweater", price: 220000, stock: 3 },
  ];

  return (
    <>
      <nav className="navbar bg-light text-white">
        <div className="container">
          <a href="#" className="navbar-brand">
            ECommerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" aria-current="page" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Catalog
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <CatalogSection items={itemList} />
      </div>
    </>
  );
}

export default App;
