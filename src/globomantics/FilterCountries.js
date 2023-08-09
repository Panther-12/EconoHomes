import {useNavigate} from "react-router-dom";


const FilterCountries = ({houses}) =>{
	const history = useNavigate()

	const countries = houses?Array.from(new Set(houses.map(house=>house.country))):[]
	countries.unshift(null) // creates an empty input as the first item

	const optionStyles={
		height:"fit-content"
	}
	const onSearchChange = (e) =>{
		const country = e.target.value
		history(`/searchresults/${country}`)
	}
	return(
		<div className="row-md-7 d-flex mt-5">
			<div className="col-md-4 offset-md-2">
				Look for your dreamhouse in country:
			</div>
			<div className="col-md-4" style={optionStyles}>
				<select className="form-select" onChange={onSearchChange}>
					{countries.map((c)=>{
						return <option key={c} value={c}>{c}</option>
					})}
				</select>
			</div>
		</div>
		)
}

export default FilterCountries;