import React from "react";
import {GrShare} from 'react-icons/gr';
const Pop = () => {
  return (
    <div>
      <div class="hero mt-6">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left md:mx-24">
            <h1 class="text-3xl font-bold text-primary">POP-UNDER</h1>
            <p class="py-6">
              This is one of the most popular ads. After user's click, this ad opens landing page in
              behind. So, the user experience is not hampered much.
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

export default Pop;
