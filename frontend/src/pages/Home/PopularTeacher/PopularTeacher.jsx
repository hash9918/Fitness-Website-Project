import React, { useEffect, useState } from "react";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import img from "../../../assets/home/girl.jpg";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { Footer } from "flowbite-react";

function PopularTeacher() {
  const [instructors, setInstructors] = useState([]);
  const axiosFetch = useAxiosFetch();
  useEffect(() => {
    axiosFetch
      .get("http://localhost:5000/users")
      .then((data) => {
        setInstructors(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(instructors);
  return (
    <div className=" md:w-[80%] mx-auto my-36 ">
      <div>
        <h1 className="text-5xl font-bold text-center dark:text-white ">
          {" "}
          our <span className="text-secondary "> Best </span> Instructors
        </h1>
        <div className="w-[40%] text-center mx-auto my-4">
          <p className=" text-gray-500 ">
            Explore our popular classes. Here is some popular classes based on
            how many student enrolled
          </p>
        </div>
      </div>

      
        {
            instructors ?  <>
                <div className="grid mb-28 md:grid-cols-2 lg:grid-cols-4 w-[90%] gap-4 mx-auto">
                    {
                        instructors ?.map((ins,i)=>
                        (
                            <div className=" flex  dark:text-white  hover:-translate-y-2 duration-200 cursor-pointer flex-col shadow-2xl py-8 px-10 md:px-8 rounded-md" key={i} >
                                <div className=" flex-col flex gap-6 md:gap-8 " >
                                    <img className="rounded-full border-4 border-gray-300 h-24 w-24 mx-auto" src={ins?.photoUrl || `${img}`} />
                                    <div className="flex flex-col text-center">
                                    <p className="font-medium text-lg dark:text-white text-gray-800">{ins?.name}</p>
                                    <p className="text-gray-500 whitespace-nowrap ">
                                        Instructor 
                                    </p>
                                    <div className="flex justify-evenly pt-4">
                                        
                                    <TiSocialFacebook size={25}/>
                                    <TiSocialLinkedin size={25}/>
                                    <SlSocialInstagram size={22}/>
                                    
                                    </div>

                                    </div>
                                </div>
                            </div>
                        
                        ))
                    }
                </div>
            </> : <> loading</>
        }
      
     
    </div>
   
  );
}

export default PopularTeacher;
