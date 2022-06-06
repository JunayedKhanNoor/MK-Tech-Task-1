import React from "react";
import { MdRecordVoiceOver } from "react-icons/md";
import { FaTelegram, FaBullhorn } from "react-icons/fa";
const OurService = () => {
  return (
    <div>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider text-secondary text-2xl">AVAILABLE FOR EVERYONE</div>
      </div>
      <h1 className="text-center text-lg">Customer services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mt-6">
        <div className="flex flex-col items-center gap-2">
          <FaBullhorn className="w-28 h-28 p-4 rounded-full bg-white text-blue-600" />
          <p>Support</p>
          <button className="btn btn-secondary rounded-full px-24 text-white">Hello 1</button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <FaTelegram className="w-28 h-28 p-4 rounded-full bg-white text-blue-600" />
          <p>Support</p>
          <button className="btn btn-secondary rounded-full px-24 text-white">Hello 2</button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <MdRecordVoiceOver className="w-28 h-28 p-4 rounded-full bg-white text-blue-600" />
          <p>Support</p>
          <button className="btn btn-secondary rounded-full px-24 text-white">Hello 3</button>
        </div>
      </div>
      <div className="flex justify-center my-16">
      <div class="stats stats-vertical lg:stats-horizontal shadow w-1/2 border-2">
        <div class="stat">
          <div class="stat-title">Downloads</div>
          <div class="stat-value">31K</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div class="stat">
          <div class="stat-title">New Users</div>
          <div class="stat-value">4,200</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div class="stat">
          <div class="stat-title">New Registers</div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OurService;
