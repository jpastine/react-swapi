import { useEffect, useState } from "react"
import { getStarshipList } from "../../services/api-calls"
import { Link } from "react-router-dom"
import './StarshipList.css'

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])
  return (
  <>
    <h2>Starship List</h2>
      {starshipList.length ?
        <>
            <div id="starships">
          {starshipList.map(starship => 
              <div key={starship.name}>
                <Link to='/starship' state={{starship}}>
                  <div className="starship">{starship.name}</div>
                  </Link>
              </div>
              )}
              </div>
            </>
            :
            <>
              <h4>Loading spaceships...</h4>
        </>
      }
  </>
  )
}

export default StarshipList
  
  
  
  
  
  