/* eslint-disable react/prop-types */
import './Container.css'

function Container(props){
    const {title} = props;
    
    return <div className="header">
    <span>{title}</span>
    <hr />
  </div>;

}

export default Container;