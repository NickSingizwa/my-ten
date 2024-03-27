import Breadcrump from "@/components/Breadcrump/Breadcrump";
import HeadingAndParagraphs from "@/components/HeadingAndParagraphs/HeadingAndParagraphs";
import Landing from "@/components/Landing/Landing";
import React from "react";
import Image from "next/image";

const TenaquipFoundation = () => {
  return (
    <div className="relative mb-8">
      <Landing title="THE TENAQUIP FOUNDATION" imageUrl="https://www.tenaquip.com/tenaquip/images/banner/pages/tenaquip-foundation.jpg"/>
      <div className="px-16 w-[80vw] mt-16">
        <HeadingAndParagraphs title="A word from The Reed Family" paragraph="TENAQUIP prides itself on giving back to the communities we are involved in!" buttonTitle="Visit the TENAQUIP Foundation Website" buttonLink="http://thetenaquipfoundation.ca/"/>
      </div>
      <div className="border border-gray-200 px-16 w-[91vw] mx-auto mt-5 mb-3"></div>
      <div className="flex px-16">
        <video controls className="w-[50vw] h-[50vh]">
          <source src="https://www.tenaquip.com/tenaquip/videos/corporate/50th_anniversary_video_eng.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col w-[50vw]">
          <div className="px-5 py-6">
            <HeadingAndParagraphs title="Madagascar school project" 
            paragraph="The Tenaquip Foundation has been a major supporter of The Madagascar School Project for many years. We are extremely pleased that the foundation has been able to help them create an amazing school program (The Tenaquip School) for over 800 students."
            />
            <div className="relative w-full h-[20vh]">
              <Image
                src="https://www.tenaquip.com/tenaquip/images/pages/the-tenaquip-foundation/the-tenaquip-foundation-logo-eng.jpg"
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenaquipFoundation;
