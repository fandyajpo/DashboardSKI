import SearchCategory from "components/search/Category";

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
    <div className="w-full border border-gray-300 rounded-md p-3">
      <SearchCategory />
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default CategoryTable;
