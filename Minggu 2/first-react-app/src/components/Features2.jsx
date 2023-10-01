/* eslint-disable react/prop-types */
import './Features2.css';

function Faetures2(props){
    const {img, title, button} = props;
    
    return <div className="card mb-4 border-0 cardMain">
        <div className="row g-0">
            <div className="col-md-4">
                <div className='card-img2 w-100 h-100'>
                    <img src={img}  className="card-image-top rounded" alt="" />
                </div>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
                <p className="card-text">
                    {props.children}
                </p>
                <a href="#" className="btn btn-primary">{button}</a>
            </div>
        </div>
    </div>
    </div>
    
 



}

export default Faetures2;