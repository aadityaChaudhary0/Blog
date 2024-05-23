import { Link } from "react-router-dom"
import { useState } from "react";
import Editor from 'react-simple-wysiwyg';

function CreateBlog() {

      const [html, setHtml] = useState('');
  
      function onChange(e) {
            setHtml(e.target.value);
      }


  return (
    <>
      <div className="container m-auto"> 
            <div className="flex justify-between items-center pt-6">
                  <h2>Create Blog</h2>
                  <Link to= "/" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
                        Back
                  </Link>
            </div>

            <div className="border rounded-lg p-3 mt-4 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                        <label htmlFor="title">Title</label>
                        <input
                              className="border pl-3 py-2 rounded-lg"
                              type="text" id="title" placeholder="Enter the title"
                        />
                  </div>

                  <div className="flex flex-col gap-1">
                        <label htmlFor="description">Description</label>
                        {/* <textarea className="border pl-3 py-2 rounded-lg" name="" id="description" rows= "8"></textarea> */}
                        <Editor value={html}  onChange={onChange} 
                              containerProps={{ style: { resize: 'vertical', height: '200px' } }}
                        />
                  </div>

                  <div className="flex flex-col gap-1">
                        <p>Image</p>
                        <div className="flex items-center gap-2">
                              <input type="file" />
                        </div>
                  </div>

                  <div className="flex flex-col gap-1">
                        <label htmlFor="author">Author</label>
                        <input className="border pl-3 py-2 rounded-lg" type="text" id="author" placeholder="Enter author" />
                  </div>
                  
                  <div className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 self-start">
                        <button>Create</button>
                  </div>
            </div>
      </div>
    </>
  )
}

export default CreateBlog