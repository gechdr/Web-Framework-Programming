/* eslint-disable react/prop-types */
import './Features1.css'

function Faetures1(props){
    const {img, title, button, buttonUrl} = props;
    
    return <div className="card col-md-4 p-2 border-0 d-flex justify-content-center" >
        <div className='card-img'>
            <img src={img}  className="card-image-top rounded" alt="" />
        </div>
        <div className="card-body">
            <h5 className="card-title">
                {title}
            </h5>
            <p className="card-text">
            {props.children}
            </p>
            <a href={buttonUrl} className=""><u>{button}</u> &#62;</a>
        </div>
    </div>;

}

export default Faetures1;