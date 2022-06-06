import React from "react";
import {GrShare} from 'react-icons/gr';
const Native = () => {
  return (
    <div>
      <div class="hero mt-6">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left md:mx-24">
            <h1 class="text-3xl font-bold text-primary">NATIVE</h1>
            <p class="py-6">
              Ad format with the image and the title, that perfectly fits into the content of the
              site. Native ads are placed in the most visible areas of the page and, thus, this
              format shows good results and the level of interaction.
            </p>
            <div className="flex items-center mt-12">
            <p role='button' className="text-secondary mr-3">Learn more</p>
            <GrShare/>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
              <img
                src="https://api.lorem.space/image/movie?w=260&h=400"
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

export default Native;
