import { useState } from "react";



const Inquiry = () =>{
	const [inquiryDetails, setInquiryDetails] = useState({
		name:"",
		email:"",
		remarks:""
	})

	const inputChange = (e) =>{
		setInquiryDetails({...inquiryDetails, [e.target.id]:e.target.value})
	}

	function formSubmit(e){
		e.preventDefault()
		console.log(inquiryDetails)
	}

	return(
		<div className="container inquiry-wrapper">
				<form className="p-1">
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input type="text" className="form-control" onChange={inputChange} placeholder="Name" id="name" value={inquiryDetails.name}/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" className="form-control" onChange={inputChange} placeholder="Email" id="email" value={inquiryDetails.email}/>
					</div>
					<div className="form-group">
						<label htmlFor="remarks">remarks</label>
						<input type="text" className="form-control" onChange={inputChange} placeholder="Remarks" id="remarks" value={inquiryDetails.remarks}/>
					</div>
					<div className="button-group">
						<button onClick={formSubmit} className="btn btn-primary mt-2" disabled={!inquiryDetails.name || !inquiryDetails.email}>Send remark</button>
					</div>
				</form>
		</div>
	)
}

export default Inquiry;