import './App.css'
import Navbar from './components/Navbar/Navbar'
import Novedades from './components/Novedades';


export function Titulo(){
  return(
    <div>PapaBear Supply</div>
  )
}

function App() {

  return (  
        <>

          <Navbar />

          <Novedades />

        </>
  );

}

export default App
