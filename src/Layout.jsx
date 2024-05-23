import { Route, Routes } from "react-router-dom"
import App from "./App"
import CreateBlog from "./components/CreateBlog/CreateBlog"

function Layout() {
  return (
    <>
      <div className="bg-black text-center py-2">
        <h1 className="text-white">Blog App</h1>
      </div>

      <Routes>
            <Route path="/" element = {<App/>} />
            <Route path="/create" element = {<CreateBlog/>} />
      </Routes>
    </>
  )
}

export default Layout