import React, { useState } from "react";
import BannerAd from "./BannerAd";
import Native from "./Native";
import Pop from "./Pop";
import Skim from "./Skim";

const AddFormats = () => {
  const [page, setPage] = useState("pop");
  const handleState = a =>{
    setPage(a);
  }
  return (
    <div>
      <div className="flex flex-col w-full border-opacity-50 my-16">
        <div className="divider text-secondary text-2xl">VERSATILE AD FORMATS</div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
        <button
        onClick={()=>handleState('pop')}
          class={`btn w-56 rounded-3xl border-0 shadow-lg text-black ${
            page === "pop" ? "btn-primary" : "bg-white"
          }`}
        >
          Pop-Under
        </button>
        <button
        onClick={()=>handleState('banner')}
          class={`btn w-56 rounded-3xl border-0 shadow-lg text-black  ${
            page === "banner" ? "btn-primary" : "bg-white"
          }`}
        >
          BANNER AD
        </button>
        <button
        onClick={()=>handleState('native')}
          class={`btn w-56 rounded-3xl border-0 shadow-lg text-black  ${
            page === "native" ? "btn-primary" : "bg-white"
          }`}
        >
          Native
        </button>
        <button
        onClick={()=>handleState('skim')}
          class={`btn w-56 rounded-3xl bg-white border-0 shadow-lg text-black  ${
            page === "skim" ? "btn-primary" : "bg-white"
          }`}
        >
          Skim
        </button>
      </div>
     {
         page === 'pop' &&  <Pop></Pop>
     }
     {
         page === 'banner' &&  <BannerAd></BannerAd>
     }
     {
         page === 'native' &&  <Native></Native>
     }
     {
         page === 'skim' &&  <Skim></Skim>
     }
    </div>
  );
};

export default AddFormats;
