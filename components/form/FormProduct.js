import { useState } from "react";

export default function FormProduct({ myRef, globalCtx, globalAct, onSubmit }) {
  return (
    <div className="w-full h-auto">
      <form onSubmit={onSubmit}>
        <div className="w-full h-full select-none">
          <div className="w-full h-full p-3 rounded-md">
            <div className="w-full h-auto relative mb-2">
              <p className="text-xs font-bold text-gray-700 pb-1">
                PRODUCT NAME
              </p>
              <input
                name="username"
                type="text"
                className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                placeholder="Username"
                disabled={globalCtx.isFetch ? "disabled" : ""}
              />
            </div>
            <div className="w-full h-auto relative mb-2">
              <p className="text-xs font-bold text-gray-700 pb-1">CATEGORY</p>
              <select
                name="password"
                type="text"
                className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                placeholder="Password"
                disabled={globalCtx.isFetch ? "disabled" : ""}
              >
                <option>-- Select Category --</option>
                <option>Coffee Biji</option>
                <option>Machine</option>
                <option>Bijikerst</option>
              </select>
            </div>
            <div className="flex flex-row w-full gap-x-4">
              <div className="flex flex-row gap-x-4">
                <div className="w-full h-auto relative mb-4">
                  <p className="text-xs font-bold text-gray-700 pb-1">
                    PRODUCT PRICE
                  </p>
                  <input
                    name="product-price"
                    type="text"
                    className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                    placeholder="Harga Barang"
                    disabled={globalCtx.isFetch ? "disabled" : ""}
                  />
                </div>
              </div>
              <div className="w-full h-auto relative mb-4">
                <p className="text-xs font-bold text-gray-700 pb-1">STOCK</p>
                <input
                  name="stock"
                  type="text"
                  className="placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                  placeholder="Stock"
                  disabled={globalCtx.isFetch ? "disabled" : ""}
                />
              </div>
            </div>
            <div className="w-full h-auto relative mb-4">
              <p className="text-xs font-bold text-gray-700">DETAIL</p>
              <textarea
                name="detail"
                type="text"
                className="text_area_detail h-40 placeholder-gray-300 form-input mt-1 rounded-md border w-full"
                placeholder="Masukan detail barang"
                disabled={globalCtx.isFetch ? "disabled" : ""}
              />
            </div>
            <label className="switch">
              <input
                type="checkbox"
                // value={moreDay}
                // onClick={() => {
                //   setMoreDay(!moreDay);
                //   setInputValue({ ...inputValue, sampai: "" });
                // }}
                // onChange={(e) => setMoreDay(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>

            <div className="w-full h-12 flex justify-between gap-2">
              <div className="w-full h-full flex items-center text-xs text-red-400">
                {globalCtx.errorMsg}
              </div>
              <div className="w-auto h-full flex items-center">
                <button
                  disabled={globalCtx.isFetch ? "disabled" : ""}
                  className="px-6 h-8 bg-green-500/30 text-green-500 border-2 shadow-md hover:bg-green-500/50 border-green-300 font-semibold rounded overflow-hidden"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
