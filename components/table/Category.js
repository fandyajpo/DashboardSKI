const CategoryTable = () => {
  const category = [
    {
      name: "Machine",
    },
    {
      name: "Coffee",
    },
  ];
  return (
    <div className="w-full border border-gray-300 rounded-md p-3 shadow-md">
      <p className="text-sm font-bold text-red-600 w-1/6 py-2">
        Category Table
      </p>
      <div className="py-2">
        <div className="flex w-full justify-between bg-red-500 px-4 py-3 rounded-md">
          <p className="text-white font-bold text-xs">NAME</p>
          <p className="text-white font-bold text-xs">ACTION</p>
        </div>
        <div className="flex flex-col gap-y-4 py-4 px-4">
          {category.map((cat) => {
            return (
              <div className="flex flex-row w-full justify-between">
                <p className="font-bold text-sm">{cat.name}</p>
                <div className="flex flex-row gap-x-2">
                  <button
                    onClick={() => alert("delete")}
                    className={
                      "bg-blue-500/30 items-center justify-center h-8 w-8 rounded-md hover:bg-blue-500/50 shadow-md flex gap-x-2 text-xs text-blue-500 hover:w-24 duration-150 hover:after:content-['Edit']"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => alert("delete")}
                    className={
                      "bg-red-500/30 items-center justify-center h-8 w-8 rounded-md hover:bg-red-500/50 shadow-md flex gap-x-2 text-xs text-red-500 hover:w-24 duration-150 hover:after:content-['Remove']"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;
