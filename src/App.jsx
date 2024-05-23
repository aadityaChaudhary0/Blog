import "./App.css";
import { Link } from "react-router-dom";
import BlogCard from "./components/BlogCard/BlogCard";

function App() {
  return (
    <>

      <div className="container m-auto">
        <div className="flex justify-between items-center pt-6">
          <h2>Blogs</h2>
          <Link to= "/create" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
            Create
          </Link>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-6 pt-4 pb-4">
            <BlogCard imageSource= "https://images.pexels.com/photos/8921919/pexels-photo-8921919.jpeg?auto=compress&cs=tinysrgb&w=800" />
            <BlogCard imageSource= "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800" />
            <BlogCard imageSource= "https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800" />
            <BlogCard imageSource= "https://images.pexels.com/photos/9661320/pexels-photo-9661320.jpeg?auto=compress&cs=tinysrgb&w=800" />
            <BlogCard imageSource= "https://images.pexels.com/photos/18818907/pexels-photo-18818907/free-photo-of-back-view-of-a-sports-car.jpeg?auto=compress&cs=tinysrgb&w=800" />
            <BlogCard imageSource= "https://images.pexels.com/photos/9266768/pexels-photo-9266768.jpeg?auto=compress&cs=tinysrgb&w=800" />
            <BlogCard imageSource= "https://images.pexels.com/photos/4517064/pexels-photo-4517064.jpeg?auto=compress&cs=tinysrgb&w=800" />

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
