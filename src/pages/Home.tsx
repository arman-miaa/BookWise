import Banner from "@/components/Banner"
import Books from "./Books"


const Home = () => {
  return (
      <>
          <Banner />
          <div className="container mx-auto">
              
          <Books/>
          </div>
    </>
  )
}

export default Home