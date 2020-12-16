import { Link } from "next"
import Button from "components/button"

const Home = () => {
  return (
    <div>
      <Button/>
      <Link hre="blog">To Blog</Link>
    </div>
  )
}

export default Home