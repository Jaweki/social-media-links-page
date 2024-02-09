import Button from "./components/Button"

function App() {
  const buttonText= ["Github", "Frontend Mentor", "LinkedIn","Twitter", "Instagram"]

  return (
    <main className="w-screen h-screen bg-neutral-off-black flex justify-center items-center">
      <div className="h-[65%] w-[320px] bg-neutral-dark-grey rounded-lg flex flex-col items-center justify-center space-y-7 p-6" >

        <img src={"./images/avatar-jessica.jpeg"} className="rounded-full h-20 w-20"/>
        <p>
          <h1 className="text-xl font-bold text-white">Jessica Randall</h1>
          <span className="text-xs font-bold text-primary-green">
          London, United Kingdom
          </span>
        </p>

        <p className="text-xs text-white"> "Front-end developer and avid reader."</p>
        <div className="flex flex-col w-full space-y-3">

          { buttonText.map((text) => <Button text={text} />)
          }
        </div>
      </div>
    </main>
  )
}

export default App
