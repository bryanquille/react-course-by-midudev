import Link from "../Link"
import "./Page404.css"

function Page404() {
  return (
    <main className="bl_page404">
      <h1 className="title-1">Error 404. The page does not exist</h1>
      <p className="text">Sorry! The page you are looking for can not be found. Perhaps the page you requested was moved or deleted. It is also possible that you made a small typo when entering the address. Go to the main page.
      </p>
      <div className="bl_page404__wrapper">
        <img src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/cloud_warmcasino.png?raw=true" alt="cloud_warmcasino.png" />
        <div className="bl_page404__el1"></div>
        <div className="bl_page404__el2"></div>
        <div className="bl_page404__el3"></div>
        <Link className="bl_page404__link" pathTo="/">
          Go to HomePage
        </Link>
      </div>
    </main>
  )
}

export default Page404