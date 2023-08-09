import {useParams} from "react-router-dom";
import House from './Houses';


const HouseFromQuery = ({houses}) =>{
	const {id} = useParams()
	const house = houses.find(h=>h.id===parseInt(id))
	if(!house){
		return <div>House not found</div>
	}
	return <House house={house}/>
}


export default HouseFromQuery;