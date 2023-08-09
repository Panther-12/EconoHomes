import Inquiry from './Inquiry';
import { useState } from "react";
import inquiry from './images/react-meta.png';

const House = ({ house }) =>{
    const[inquiryShown, setInquiryShown] = useState(false);

    const priceStyles = {
        color:"rgb(255, 190, 166)",
        fontWeight:"bold"
    }
    const imageStyles={
        width:"500px",
        height:"250px"
    }

    const toogleInquiry = () =>{
        setInquiryShown(!inquiryShown)
    }

    const inquiryStyles ={
        width:"50px",
        height:"50px"
    }
    return(
        <div className="container mt-5">
            <div className="row mt-2">
                <h5 className="col-md-12">{house.country}</h5>
            </div>
            <div className="row mt-2">
                <h3 className="col-md-12">{house.address}</h3>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src={`/images/${house.photo}.png`} style={imageStyles}/>
                </div>
                <div className="col-md-5">
                    <h5 className="price" style={priceStyles}>$ {house.price}.00</h5>
                    <p>{house.description}</p>
                    <div className="image-wrapper mt-2">
                        <img src={inquiry} style={inquiryStyles} alt="inquiry" onClick={toogleInquiry}/>
                    </div>
                    {inquiryShown && <Inquiry/>}
                </div>
            </div>
        </div>
    )
}

export default House;