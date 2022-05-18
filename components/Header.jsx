

const Header = () => {
  return (
    <header className="container flex flex-col-reverse sm:flex-row py-24 mx-auto max-w-screen-lg">
      <div className="w-full sm:w-1/2 px-6 py-8">
        <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-tr from-rose-300 via-indigo-100 to-red-300">
          Understand User Flow.

          <span className="sm:block">
            Increase Conversion.
          </span>
        </h1>
        <p className="text-gray-700 mt-3">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
        </p>
        <button className="mt-8 px-6 py-2 bg-blue-900 rounded text-white font-bold tracking-wide shadow-xl hover:bg-blue-800 hover:shadow-md">
          Button
        </button>
        <button className="mt-8 ml-4 px-6 py-2 bg-gray-200 rounded text-gray-600 font-bold tracking-wide hover:bg-gray-300 shadow">
          Button
        </button>
      </div>
      <div className="w-64 mx-auto sm:w-1/2 flex items-center sm:px-5">
        <img src="https://avocode.com/static/images/tutorials/banner-img@2x.png" alt="" className="max-h-full" />
      </div>
    </header>

  )
}

export default Header