import React from "react";
import { IoFilter } from "react-icons/io5";


const Table = () => {
  return (
    <>
      <div>
      <table className="m-3  w-screen"> 
        <tr className=" py-3.5 border-y-2">
          <input type="checkbox"/>
          <td ><span>Order Date</span> <IoFilter /></td>
          <td ><span>Order Type</span> <IoFilter /></td>
          <td >Unit Price <IoFilter /></td>
          <td >Qty <IoFilter /></td>
          <td >Discount <IoFilter /></td>
          <td >Order Total <IoFilter /></td>
          <td >Status <IoFilter /></td>
        </tr>
        <tr className="opacity-70">
        <input type="checkbox"/>
        <td>12 Aug 2022 - 12:25 am</td>
        <td>Home Delivery</td>
        <td>₦25,000.00</td>
        <td>2</td>
        <td>₦0.00</td>
        <td>₦50,000.00</td>
        <td className="py- px-3 rounded-lg inline-block bg-green-200 decoration-green-400">Completed</td>
        </tr>
      </table>
      </div>




     {/* <div className="flex justify-between">
        <div className="flex flex-col items-center">
        <input type="checkbox" />
        <input type="checkbox" />
        </div>

        <div className="flex flex-col items-start">
          <span className="flex items-center gap-2">Order Date <IoFilter /></span>
          <span className="opacity-70">12 Aug 2022 - 12:25 am</span>
        </div>

        <div className="flex flex-col  items-center">
          <span className="flex items-center gap-2">Order Type <IoFilter /></span>
          <span className="opacity-70">Home Delivery</span>
        </div>

        <div className="flex flex-col items-end"> 
          <span className="flex items-center gap-2">Unit Price <IoFilter /></span>
          <span className="opacity-70">₦25,000.00</span>
        </div>

        <div className="flex flex-col items-start">
          <span className="flex items-center gap-2">Qty <IoFilter /></span>
          <span className="opacity-70">2</span>
        </div>

        <div  className="flex flex-col items-end">
          <span className="flex items-center gap-2">Discount <IoFilter /></span>
          <span className="opacity-70">₦0.00</span>
        </div>

        <div  className="flex flex-col items-end">
          <span className="flex items-center gap-2">Order Total <IoFilter /></span>
          <span className="opacity-70">₦50,000.00</span>
        </div>

        <div  className="flex flex-col items-end">
          <span className="flex items-center gap-2"> Status <IoFilter /></span>
          <span className="">Completed</span>
        </div>
     </div> */}

      {/* <div>
      <div className="flex flex-row place-content-around">
        <div>
        <input type="checkbox" />
        <span>Order Date</span>
        </div>
        <span>Order Type</span>
        <span>Unit Price</span>
        <span>Qty</span>
        <span>Discount</span>
        <span>Order Total</span>
        <span>Status</span>
      </div>

      <div className="flex flex-row place-content-around">
       <div>
       <input type="checkbox" />
        <span>12 Aug 2022 - 12:25 am</span>
       </div>
        <span>Home Delivery</span>
        <span>₦25,000.00</span>
        <span>2</span>
        <span>₦0.00</span>
        <span>₦50,000.00</span>
        <span>Completed</span>
      </div>
    </div> */}
    </>
  );
};

export default Table
