const DashboardCard = (props) => {
  return (
    <div className="bg-gray-100 border-orange-300 border-2 shadow-md w-full h-44 rounded-md p-4 flex flex-col justify-between">
      <div>
        <p className="text-sm">Currently we have :</p>
        <div className="flex items-center gap-x-2">
          <p className="text-red-500 font-bold underline">900</p>
          <p className="text-gray-600 text-sm font-semibold">{props.content}</p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <p className="text-sm font-bold">{props.title}</p>
        <button
          onClick={() => alert("delete")}
          className={
            "bg-orange-500/30 items-center justify-center h-8 w-8 rounded-md hover:bg-red-orange/50 shadow-md flex gap-x-2 text-xs text-orange-500 hover:w-24 duration-150 hover:after:content-['See_all']"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-orange-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;
