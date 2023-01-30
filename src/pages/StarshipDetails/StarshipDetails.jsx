import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/api-calls';
import { Link } from 'react-router-dom';
import './StarshipDetails.css'

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])


  return (  
    <>
      <h2>Starship Details</h2>
        <div id='shipcard'>
          <div id='deets'>
            <h3>NAME: {starshipDetails.name}</h3>
            <h3>MODEL: {starshipDetails.model}</h3>
            <Link to='/' id='link'>RETURN</Link>
          </div>

        </div>
    </>
  );
}

        
           
        






 
export default StarshipDetails;
