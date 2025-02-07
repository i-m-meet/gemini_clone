import React from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-60 bg-[#f0f4f9] p-6 flex flex-col justify-between shadow-lg">
      {/* Top Section (Menu Icon and New Chat) */}
      <div className="flex flex-col gap-8">
        {/* Menu Icon */}
        <img
          src={assets.menu_icon}
          alt="Menu Icon"
          className="w-8 h-8 cursor-pointer"
        />

        {/* New Chat Button */}
        <div className="mt-10 w-full flex items-center justify-center gap-4 py-4 px-4 bg-[#e6eaf1] rounded-3xl text-gray-900 text-md hover:bg-[#d0d8e2] cursor-pointer transition-all duration-300">
          <img src={assets.plus_icon} alt="Plus Icon" className="w-6 h-8" />
          <p className="font-extralight text-gray-500 hover:text-gray-900 hover:font-semibold">
            New Chat
          </p>
        </div>

        {/* Recent Section */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-gray-700">Recent</p>
          <div className="flex items-center gap-2 p-3 pr-10 rounded-3xl text-[#282828] hover:bg-[#e2e6eb] cursor-pointer transition-all duration-300">
            <img src={assets.message_icon} alt="Message Icon" className="w-8 h-8" />
            <p>What is react...</p>
          </div>
        </div>
      </div>

      {/* Bottom Section (Help, History, Settings) */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 text-xl hover:bg-[#e2e6eb] cursor-pointer rounded-3xl p-3 transition-all duration-300">
          <img src={assets.question_icon} alt="Help Icon" className="w-8 h-8" />
          <p>Help</p>
        </div>
        <div className="flex items-center gap-4 text-xl hover:bg-[#e2e6eb] cursor-pointer rounded-3xl p-3 transition-all duration-300">
          <img src={assets.history_icon} alt="History Icon" className="w-8 h-8" />
          <p>History</p>
        </div>
        <div className="flex items-center gap-4 text-xl hover:bg-[#e2e6eb] cursor-pointer rounded-3xl p-3 transition-all duration-300">
          <img src={assets.setting_icon} alt="Settings Icon" className="w-8 h-8" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
