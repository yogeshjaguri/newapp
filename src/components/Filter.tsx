import useFilter from "@/hooks/useFilter";
import React from "react";

const Filter = () => {
  const {
    all_products,
    updateFilterValue,
    clearFilters,
    filters: { text, price, maxPrice, minPrice },
  }: any = useFilter();

  const getUniqueData = (data, property) => {
    let newVal = data.map((item) => {
      return item[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categories = getUniqueData(all_products, "category");

  const brands = getUniqueData(all_products, "brand");

  return (
    <div className="">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="border flex-1 border-gray-400 rounded-lg p-2 m-2 max-w-xl"
          name="text"
          placeholder="search"
          value={text}
          onChange={updateFilterValue}
        />
      </form>
      <div className="flex-col px-2">
        <h3 className="bg-orange-300"> category </h3>
        {categories.map((item, index) => (
          <button
            key={index}
            type="button"
            name="category"
            value={item}
            onClick={updateFilterValue}
            className="block active:bg-slate-200"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex-col px-2 mt-4">
        <h3 className="bg-orange-300"> brand </h3>
        <form action="#">
          <select
            name="brand"
            id="brand"
            className="block "
            onClick={updateFilterValue}
          >
            {brands.map((item, index) => (
              <option key={index} name="brand" value={item}>
                {item}
              </option>
            ))}
          </select>
        </form>
      </div>

      <div className="mt-4 px-2">
        <h3 className="bg-orange-300"> price </h3>
        <p>&#8377; {price}</p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="mt-4 px-2">
        <button
  
          onClick={clearFilters}
         
          className="bg-red-400 active:bg-red-500 text-white p-2 rounded-lg"
        >
          clear filters
        </button>
        </div>
    </div>
  );
};

export default Filter;
