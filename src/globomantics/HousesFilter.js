import {useParams} from "react-router-dom";
import SearchRow from './SearchRow';

const HousesFilter = ({houses}) =>{
	const {country} = useParams()
	const filteredHouses = houses.filter(h=>h.country===country)
	return(
		<div className="mt-2">
			<h4>Results for: {country}</h4>
			<table className="table table-hover table-striped bg-light">
				<tbody>
					{filteredHouses.map((f)=>{
						return <SearchRow key={f.id} house={f}/>
					})}
				</tbody>
			</table>
		</div>
		)
}

export default HousesFilter;