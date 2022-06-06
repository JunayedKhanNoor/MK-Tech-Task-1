import React from "react";
import { GrShare } from "react-icons/gr";
const BannerAd = () => {
  return (
    <div>
      <div class="hero mt-6">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left md:mx-24">
            <h1 class="text-3xl font-bold text-primary">BANNER AD</h1>
            <p class="py-6">
              Choose between the available banner formats. Highly effective ad for visibility. Ad
              format with the image and the title, that perfectly fits into the content of the site.
            </p>
            <div className="flex items-center mt-12">
              <p role="button" className="text-secondary mr-3">
                Learn more
              </p>
              <GrShare />
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
              <img
                src="https://api.lorem.space/image/movie?hash=47"
                class="max-w-md rounded-lg shadow-2xl max-h-72"
                alt="images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAd;
