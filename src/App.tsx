import Card from "./components/Card"

const App = () => {
  return(
    <section className="h-full min-h-screen w-screen items-center flex flex-col font-Roboto bg-[url(./src/assets/bg.jpg)] bg-center bg-[length:400px_300px] sm:bg-cover">
      <h1 className="text-4xl text-white mt-5 h-20 titleRes:h-10 font-medium w-screen text-center bg-backgroundButton">BANDERAS DEL MUNDO</h1>

      <div className="sm:w-[600px] flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
        <p className="w-36 h-full text-white text-2xl border-2 text-center border-white bg-backgroundButton mt-5">PUNTOS: 0</p>

        <Card />
      </div>
      
    </section>
  )
}

export default App