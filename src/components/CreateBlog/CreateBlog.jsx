import { Link } from "react-router-dom";
import { Form, useForm } from "react-hook-form";
import { useState } from "react";
import Editor from 'react-simple-wysiwyg';
import { ToastContainer, toast } from 'react-toastify';


function CreateBlog() {
      
      const [html, setHtml] = useState('');
      const [image, setImage] = useState(null);

  
      function onChange(e) {
            setHtml(e.target.value);
      }
      const {
            register,
            handleSubmit,
            formState : {errors},
      } = useForm();

      function handleImageChange(e) {
            setImage(e.target.files[0]);
        }
      const formSubmit = async (data) => {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('author', data.author);
            formData.append('description', html);
            if (image) {
                formData.append('image', image);
            }
    
            const res = await fetch('http://localhost:8000/api/blogs', {
                method: 'POST',
                body: formData,
            });
    
            if (res.ok) {
                const result = await res.json();
                toast.success(result.message, {
                });
                
            } else {
                alert('Error:');
            }
        };


  return (
    <>
            <ToastContainer />

      <div className="container m-auto"> 
            <div className="flex justify-between items-center pt-6">
                  <h2>Create Blog</h2>
                  <Link to= "/" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
                        Back
                  </Link>
            </div>
            <form onSubmit={handleSubmit(formSubmit)}>
            <div className="border rounded-lg p-3 mt-4 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                        <label htmlFor="title">Title</label>
                        <input { ...register("title", {required: true})}
                        className="border pl-3 py-2 rounded-lg"
                              type="text" id="title" name="title" placeholder="Enter the title"
                        />
                            {errors.title && <p className="text-red-500">Title is required</p>}

                  </div>
                  <div className="flex flex-col gap-1">
                        <label htmlFor="author">Author</label>
                        <input { ...register("author", {required: true})}
                        className="border pl-3 py-2 rounded-lg" type="text" id="author" name="author" placeholder="Enter author" />
                            {errors.author && <p className="text-red-500">Author Name is required</p>}

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
                        <input type="file" name="image" onChange={handleImageChange} />
                        </div>
                  </div>

                 
                  
                  <div type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 self-start">
                        <button>Create</button>
                  </div>
            </div>
            </form>
      </div>
    </>
  )
}

export default CreateBlog