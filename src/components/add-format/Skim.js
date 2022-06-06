import React from "react";
import {GrShare} from 'react-icons/gr';
const Skim = () => {
  return (
    <div>
      <div class="hero mt-6">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left md:mx-24">
            <h1 class="text-3xl font-bold text-primary">SKIM</h1>
            <p class="py-6">
              SKIM" is a link that a publisher inserts on a specific site element, and after
              clicking on it, an advertisement appears to the user. SKIM gives 100% control of your
              sold traffic amount, higher CR to advertisers and CPM rates to publishers.
            </p>
            <div className="flex items-center mt-12">
            <p role='button' className="text-secondary mr-3">Learn more</p>
            <GrShare/>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
              <img
                src="https://api.lorem.space/image/movie?hash=4744"
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

export default Skim;
