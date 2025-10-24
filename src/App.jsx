import About from "./components/AboutMe"
import Gallery from "./components/Gallery"

function App() {

  return (
    <>
      {/* <h2 className="text-center text-5xl text-red-500">frontend assignment</h2> */}
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-1/2"> first components</div>
          <div className="w-1/2"> 
           <About/>
           <Gallery/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
