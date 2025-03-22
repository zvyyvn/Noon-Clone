import React from 'react'
import Btn from "./Btn"

const Ramadan = () => {
    const link = [
        "http://f.nooncdn.com/mpcms/EN0002/assets/e51a27f7-6528-4f45-b80c-51cd49a1e94a.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/8d26aab4-cfff-4769-9091-ebc8fd7c39d7.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/55b1226c-0eb2-4caf-866d-c54b5e50a052.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/d211f603-54ab-4ef2-b482-7c220a9146db.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/7ca559bb-edae-4a13-b92c-f3c9bfc3756c.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/b261883d-fb5a-4a20-93af-ead7e949ca68.png",
        "https://f.nooncdn.com/mpcms/EN0001/assets/9dc36e4c-ccc8-43c2-a60d-c94f9a327305.png"
    ]
  return (
    <div className='mt-3 mb-4 p-3 bg-[#feead5] rounded-2xl container mx-auto px-4'>
       <div className="flex justify-between items-center  px-3 ">
        <p className="font-res font-bold text-3xl flex gap-1  text-black  p-2">
          RAMADAN's
          <span className="font-res font-bold text-3xl text-red-500">
             ESSENTIAL
          </span>
        </p>
        <Btn title="View All" color="black" textColor="white" class="btn-res" />
      </div>

      <div className='mother flex justify-center gap-4 mt-3  '>
       {
            link.map((item,index) => {
                return (
                    <div  key={index}>
                        <img src={item}  className='h-full w-full'   alt="img" />
                    </div>
                )
            })
       }
       </div>

    </div>
  )
}

export default Ramadan
