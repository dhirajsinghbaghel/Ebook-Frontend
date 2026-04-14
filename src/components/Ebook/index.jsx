import { RiAddCircleLine,RiFilter2Fill,RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import 'animate.css';



const EbookPage=()=>{
  const [open,setOpen] = useState(false);
  const [formData,setFormdata] = useState({
    title:"",
    description:"",
    price:"",
    image:""
  });

  var totaltext = 50;
  const handleFormData=(e)=>{
    const {target} = e;
    const {name,value}=target ;
    if (name=="description"){
      
      var totaltext = Number(totaltext)-1;
      console.log(totaltext)
    }
    if(name!=="image"){
       setFormdata({
      ...formData,
      [name]:value
    })
    } 
  }
  const saveEbook=(e)=>{
    e.preventDefault();
    console.log(formData)
  }

    return(
        <>
        <div className="flex justify-between bg-gray-50 p-3 mb-3">
            <button onClick={()=> setOpen(true)} className="btn bg-rose-200 rounded-2xl text-rose-900 p-3 flex text-center gap-2 hover:cursor-pointer"> < RiAddCircleLine   /> New Ebook</button>
            
            <button className="btn bg-gray-300 rounded-2xl text-blue p-3 flex text-center gap-2 hover:cursor-pointer"> < RiFilter2Fill  />Filter</button>
        </div>

        {/* list of ebook cards */}


        <div className="grid grid-cols-4 gap-3">
  {Array(20).fill('dhiraj').map((item, index) => {
    return (
      <div key={index} className=" rounded-b-sm p-2 shadow-2xl hover:border-indigo-700 hover:border hover:mt-1">
        <div>
          {/* random parameter use karne se har baar alag image milegi */}
          <img 
            src={`https://picsum.photos/200/300?random=${index}`} 
            className="w-full h-[200px] object-cover" 
            alt="Random Placeholder" 
          />
        </div>
        <div className="p-2">
          <h1 className="text-2xl"> Lorem Ipsum</h1>
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="flex gap-3 bg-gray-150 p-3 flex-wrap">
          <button className="btn-small bg-gray-200 px-2 rounded-2xl hover:cursor-pointer  hover:bg-gray-500">Price : ₹ {index*45}</button>
          <button className="btn-small bg-blue-200 px-2 rounded-2xl hover:cursor-pointer  hover:bg-blue-500">Edit</button>
          <button className="btn-small bg-rose-200 px-2 rounded-2xl hover:cursor-pointer hover:bg-rose-500">Delete</button>
          <button className="btn-small bg-indigo-500 px-2 text-white rounded-2xl  hover:cursor-pointer hover:bg-indigo-800">More</button>
        </div>
      </div>
    );
  })}
</div>

{/* model coding start */}


{
  open &&
  <div className="bg-black/60 fixed top-0 left-0 w-full min-h-screen animate__animated animate__fadeIn">
      <div className="bg-white w-[400px] h-full absolute right-0 top-0 p-3 animate__animated animate__slideInRight">
          <div className="mb-10">
            <span onClick={()=>setOpen(false)} className="flex float-end hover:cursor-pointer hover:bg-gray-100  p-2 rounded-2xl "><RiCloseLine /> Close</span>
          </div>
          <div className="p-2">
            <h1 className="text-2xl  bg-rose-200 rounded p-3 text-indigo-500 font-bold">Add New Book</h1>
            <form  className="p-3 w-full" onSubmit={(e)=>saveEbook(e)}>
              
              <div className="mb-2">
                <label >Title</label>
                <input onChange={(e)=>handleFormData(e)} name="title" value={formData.title} type="text" className="w-full bg-gray-100 p-3  rounded focus:outline-hidden"  placeholder="Enter Title" required />
              </div>
              <div className="mb-2">
                <div className="flex justify-between">
                  <label >Desciption</label>
                  <small>0/500</small>
                </div>
                
                <textarea onChange={(e)=>handleFormData(e)} name="description" value={formData.description} className="w-full bg-gray-100 p-3  rounded focus:outline-hidden"></textarea>
              </div>
              <div>
                <label >Price</label>
                <input onChange={(e)=>handleFormData(e)} name="price" value={formData.price} type="number" className="w-full bg-gray-100 p-3  rounded focus:outline-hidden"  placeholder="Price  40 ₹" required />
              </div>
              <div>
                <label >Image</label>
                <input onChange={(e)=>handleFormData(e)} name="image" type="file" className="w-full bg-gray-100 p-3  rounded focus:outline-hidden"  placeholder="Enter Title" required />
              </div>
              <div className="mt-3">
                <button className="bg-rose-500 text-rose-200 rounded p-2 px-4 hover:cursor-pointer">
                  Save
                </button>
              </div>
            </form>
          </div>
        
      </div>
  </div>
}



{/* model coding end */}

        </>
    )
}

export default EbookPage;