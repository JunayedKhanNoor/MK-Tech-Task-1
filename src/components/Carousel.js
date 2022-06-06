import React from "react";

const Carousel = () => {
  return (
    <div>
      <div class="carousel w-full md:w-3/5 mx-auto my-12 shadow-lg">
        <div id="item1" class="carousel-item w-full">
          <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" class="carousel-item w-full">
          <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src="https://api.lorem.space/image/album?hash=47449" alt="Album" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
        <div id="item3" class="carousel-item w-full">
          <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src="https://api.lorem.space/image/album?hash=4744" alt="Album" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
        <div id="item4" class="carousel-item w-full">
          <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src="https://api.lorem.space/image/album?hash=474" alt="Album" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">
          1
        </a>
        <a href="#item2" class="btn btn-xs">
          2
        </a>
        <a href="#item3" class="btn btn-xs">
          3
        </a>
        <a href="#item4" class="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Carousel;
