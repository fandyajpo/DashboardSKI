import { useState } from "react";

export default function FormProduct({ myRef, globalCtx, globalAct, onSubmit }) {
  return (
    <div className="w-full h-auto">
      <form onSubmit={onSubmit}>
        <div className="w-full h-full select-none">
          <div className="w-full h-full p-3 backdrop-blur bg-white/30 rounded-md border border-gray-300">
            <div className="w-full h-auto relative mb-4">
              <p className="text-sm font-bold text-red-600 mb-2">
                Category Name
              </p>
              <input
                name="category"
                type="text"
                className="placeholder-gray-400 form-input mt-1 rounded-md border border-gray-300 w-full"
                placeholder="Provide category name"
                disabled={globalCtx.isFetch ? "disabled" : ""}
              />
            </div>
            <div className="w-full h-12 flex justify-between gap-2">
              <div className="w-full h-full flex items-center text-xs text-red-400">
                {globalCtx.errorMsg}
              </div>
              <div className="w-auto h-full flex items-center gap-x-2">
                <button
                  disabled={globalCtx.isFetch ? "disabled" : ""}
                  className="px-8 h-10 bg-red-500/30 text-red-500 border-2 border-red-300 font-semibold rounded overflow-hidden"
                >
                  Cancel
                </button>
                <button
                  disabled={globalCtx.isFetch ? "disabled" : ""}
                  className="px-8 h-10 bg-green-500/30 text-green-500 border-2 border-green-300 font-semibold rounded overflow-hidden"
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
