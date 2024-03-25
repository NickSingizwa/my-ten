import Breadcrump from "@/components/Breadcrump/Breadcrump";
import Landing from "@/components/Landing/Landing";
import React from "react";

const SatisfactionGuarantee = () => {
  return (
    <div className="relative">
      <Landing title="THE TENAQUIP WAY" imageUrl="https://www.tenaquip.com/tenaquip/images/pages/company/thetenaquipway/banner.jpg"/>

      <div className="mt-16 px-16 w-[90vw] bg-gray-100 mx-auto py-4 mb-12">
        <p className="text-black mb-3 text-center">
        Tenaquip has always strived to differentiate itself from other companies. We believe that these 29 carefully crafted fundamentals perfectly encapsulate the essence of our unique culture. These fundamentals act as a roadmap, guiding all members of the Tenaquip family towards the goal of exceeding our customers’ expectations. They provide insight into the standard we set – a standard built on strengthening customer relationships, fostering a positive and engaging work environment, and empowering both employees and partners to achieve the best results. We call it, the Tenaquip Way.
        </p>
      </div>
      
    </div>
  );
};

export default SatisfactionGuarantee;
