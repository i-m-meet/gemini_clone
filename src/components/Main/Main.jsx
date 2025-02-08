import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="flex-1 min-h-screen pb-4 relative">
      <div className="flex items-center justify-between text-lg p-5 text-[#585858]">
        <p>Gemini</p>
        <img
          src={assets.user_icon}
          alt="user icon"
          className="w-10 h-10 rounded-full"
        />
      </div>

      <div className="max-w-225 m-auto">
        {!showResult ? (
          <>
            <div className="mt-13 mb-13 text-6xl color-[#c4c7c5] text-gray-300 p-5">
              <p>
                <span className="custom-gradient">Hello, User</span>
              </p>
              <p className="font-semibold mt-4">How can I help you today!</p>
            </div>
            <div className="custom-grid-cards gap-4 p-5">
              <div className="h-50 p-4 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] ">
                  Suggest beautiful places to see on an upcoming road trip{" "}
                </p>
                <img
                  src={assets.compass_icon}
                  alt=""
                  className="w-9 p-1 absolute bg-white rounded-2xl bottom-2 right-2"
                />
              </div>
              <div className="h-50 p-4 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] ">
                  Briefly summarize this concept urban planning{" "}
                </p>
                <img
                  src={assets.bulb_icon}
                  alt=""
                  className="w-9 p-1 absolute bg-white rounded-2xl bottom-2 right-2"
                />
              </div>
              <div className="h-50 p-4 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] ">
                  Brainstorm team bonding activities for our woek retreat{" "}
                </p>
                <img
                  src={assets.message_icon}
                  alt=""
                  className="w-9 p-1 absolute bg-white rounded-2xl bottom-2 right-2"
                />
              </div>
              <div className="h-50 p-4 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-[#dfe4ea]">
                <p className="text-[#585858] ">
                  Improve the readability of the following code
                </p>
                <img
                  src={assets.code_icon}
                  alt=""
                  className="w-9 p-1 absolute bg-white rounded-2xl bottom-2 right-2"
                />
              </div>
            </div>
          </>
        ) : (
          <div className="pr-5 pl-5 max-h-[72vh] overflow-y-scroll result-scrollbar">
            <div className="mt-10 mb-10 flex items-center gap-5 ">
              <img src={assets.user_icon} alt="" className="w-10 rounded-3xl" />
              <p className="">{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-5">
              <img
                src={assets.gemini_icon}
                alt=""
                className="w-10 rounded-3xl"
              />
              {loading ? (
                <div className="w-screen flex flex-col gap-2.5">
                  <hr className="animate-loader rounded-sm border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:50px_800px_50px_800px] h-5" />
                  <hr className="animate-loader rounded-sm border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:50px_800px_50px_800px] h-5" />
                  <hr className="animate-loader rounded-sm border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:50px_800px_50px_800px] h-5" />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="text-[16px] "
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="absolute bottom-0 w-full max-w-225 py-0 px-5 m-auto ">
          <div className="flex items-center justify-between gap-5 bg-[#f0f4f9] p-3 rounded-4xl">
            <input
              type="text"
              placeholder="Enter a prompt here"
              className=" flex-1 w-180 h-12 outline-none ml-3 text-gray-700"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div className="flex cursor-pointer gap-2">
              <img src={assets.gallery_icon} alt="" className="w-6 h-6" />
              <img src={assets.mic_icon} alt="" className="w-6 h-6" />
              <img
                src={assets.send_icon}
                alt=""
                className="w-6 h-6"
                onClick={() => onSent()}
              />
            </div>
          </div>
          <p className="text-sm mt-4 mb-4 ml-13">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
