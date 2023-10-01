/* eslint-disable react/prop-types */
function Card(props){
    const {img, title, button} = props;
    
    return <div className="card col-md-3 m-2 p-2" >
        <img src={img}  className="card-image-top" alt="" />
        <div className="card-body">
            <h5 className="card-title">
                {title}
            </h5>
            <p className="card-text">
            {props.children}
            </p>
            <a href="#" className="btn btn-primary">{button}</a>
        </div>
    </div>;

}

// let a = 10;
// export {a};
// export let b = 20;

export default Card;