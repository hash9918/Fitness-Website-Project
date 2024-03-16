import React from "react";
import image1 from "../../../assets/gallary/img2.jpg"
import image2 from "../../../assets/gallary/img3.jpg"
import image3 from "../../../assets/gallary/image2.png"
import image4 from "../../../assets/gallary/img4.jpg"
import image5 from "../../../assets/gallary/img5.jpg"
function Gallery() {
  return (
    <div className="md:w-[80%] mx-auto my-28">
      <div className=" mb-16 ">
        <h1 className="text-5xl font-bold text-center dark:text-white "> Our Gallery</h1>

      </div>
      {/* image container */}
      <div className="md:grid  grid-cols-2  items-center justify-center rounded-sm gap-4">
        <div className="mb-4 md:mb-0">
            <img className="md:h-[720px] w-full mx-auto rounded-2xl " src={image1}/>
        </div>


        <div className=" gap-4 grid grid-cols-2 items-start ">
            <div className="mb-4 md:mb-0">
            <img className="md:h-[350px]  rounded-lg" src={image2}/>

            </div>
            <div >
            <img className="md:h-[350px]   rounded-lg" src={image3}/>

            </div>
            <div >
            <img className="md:h-[350px] rounded-lg" src={image4}/>

            </div>
            <div >
            <img className="md:h-[350px] rounded-lg" src={image5}/>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
