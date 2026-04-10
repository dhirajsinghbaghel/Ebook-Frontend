
import { useState } from "react"



const SettingPage=()=>{

const [active,setActive] = useState(0);
const [tabs,setTabs] = useState(
     [
        {
            key:0,
            label:"Genral",
            design:<h1>Welcome To Genral Page</h1>
        },
        {
            key:1,
            label:"Security",
            design:<h1>Welcome To Security Page</h1>
        },
        {
            key:2,
            label:"Profile",
            design:<h1>Welcome To Profile Page</h1>
        }
    ]
)
   
    return(
        <>
        <div className="">
            <div className="bg-gray-400">
                {
            tabs.map((item,index)=>{
                return(
                    <>
                        <button className=" font-bold p-3 rounded-2xl gap-2.5 my-2 mx-4 text-white hover:cursor-pointer hover:bg-blue-500" key={index}  onClick={()=>setActive(item.key)}
                            style={{
                               background: index=== active && "blue"
                            }}
                            >{item.label}</button>
                    </>
                )
            })
        }

            </div>
            <div className="content-area p-3 bg-cyan-50 h-[400px]">
                {tabs.find((tab) => tab.key === active)?.design}
            </div>
        </div>
        
        </>
    )
}

export default SettingPage;