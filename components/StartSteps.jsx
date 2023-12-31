
const StartSteps = ({ number, text }) => (
  <div className={` flex-row flex`}>
    <div className={` w-[70px] h-[70px] flex items-center justify-center rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-[20px] text-white">0{number}</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-slate-600 leading-[32px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
