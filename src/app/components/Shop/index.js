import React from "react";
import Shopl from "./shop_item_left";
import Shopr from "./shop_item_right";

function Shop() {
  return (
    <div className="pt-7 pb-1 bg-gray-100">
      <div className="max-w-4xl container mx-auto">
        <div className="mt-[70px] flex justify-between sm:flex-row flex-col items-center space-x-20 px-5">
          <Shopl />
          <Shopr/>
        </div>
        <div className="flex sm:flex-row-reverse flex-col mx-5 pt-32 pb-24 sm:space-x-0 space-x-20 justify-between items-center">
          <Shopl />
          <Shopr />
        </div>
      </div>
    </div>
  );
}

export default Shop;
