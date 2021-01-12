import { useQuery } from "@apollo/client"
import Button from "components/button"
import { increase } from "apollo/mutations"
import { GET_STATES } from "apollo/queries"

const Home = () => {
  const { data } = useQuery(GET_STATES)
  const { states } = data
  return (
    <div>
      <div>count: {states.count}</div>
      <Button onClick={() => increase()}>Increment</Button>
    </div>
  )
}

export default Home