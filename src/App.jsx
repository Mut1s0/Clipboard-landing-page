import { Hero, Business, Clipboard, Workflow, Clients, CTA, Footer } from "./components";

function App() {

  return(

    <div className="w-full overflow-hidden font-baiJamjuree">

      <div>

        <div>

          <Hero />

        </div>

      </div>

      <div>

        <div>

          <Business />

          <Clipboard />

          <Workflow />

          <Clients />

          <CTA />

          <Footer />

        </div>

      </div>

    </div>

  )

}

export default App;