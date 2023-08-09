import {useNavigate} from "react-router-dom";



const SearchRow = ({ house }) =>{
	const history = useNavigate()
	const setActive = () =>{
		history(`/house/${house.id}`)
	}
	return(
		<tr onClick={setActive}>
			<td>{house.country}</td>
			<td>{house.address}</td>
			<td>{house.price}</td>
		</tr>
		)
}

export default SearchRow;