import { Button } from "./ui/button"
import { Title } from "./ui/title"

const Navbar = () => {
  return (
    <div className="py-3 px-6 flex items-center justify-between border border-t-transparent">
      <Title> 
        Job Listing
      </Title>
      
      <Button size={"sm"} className="shadow-xl" href="/post-job" >Post a Job</Button>
    </div>
  )
}

export default Navbar

