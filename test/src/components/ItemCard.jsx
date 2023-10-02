/* eslint-disable react/prop-types */
import reactLogo from "../assets/react.svg";

function ItemCard(props) {
  return (
    <div className="col-4">
      <div className="card shadow my-3">
        <img src={reactLogo} alt="React Logo" className="card-img-top p-2" />
        <div className="card-body">
          <h2 className="card-title">{props.item.name}</h2>
          <h4 className="card-text">Rp. {props.item.price}</h4>
          <p className="card-text">Stock: {props.item.stock}</p>
          {props.item.stock < 5 ? (
            <div className="alert alert-danger">Stock hampir habis!</div>
          ) : (
            <div className="alert alert-success">Stock banyak!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
