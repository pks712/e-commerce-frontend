import { Divider } from '@mui/material'
import React from 'react'

const UserOrders = () => {
  return (
   <div className='bg-white w-[700px] max-h-103 ml-4 mt-5 rounded-md shadow-lg'>
    <div className='flex flex-col p-5'>
<h1 className='text-[18px] font-[550] text-gray-600'>My Orders</h1>
<span className='text-[14px] font-[300] text-gray-700'>There are orders</span>
    </div>
    <Divider/>

<div className="overflow-x-auto p-4">
  <table className="min-w-[1000px] border border-gray-700 rounded-lg">
    <thead>
      <tr className="bg-gray-800 text-white text-sm">
        <th className="px-4 py-3 whitespace-nowrap">Order Id</th>
        <th className="px-4 py-3 whitespace-nowrap">Payment Id</th>
        <th className="px-4 py-3 whitespace-nowrap">Name</th>
        <th className="px-4 py-3 whitespace-nowrap">Phone Number</th>
        <th className="px-4 py-3 whitespace-nowrap">Address</th>
        <th className="px-4 py-3 whitespace-nowrap">Pincode</th>
        <th className="px-4 py-3 whitespace-nowrap">Total Amount</th>
        <th className="px-4 py-3 whitespace-nowrap">Email</th>
        <th className="px-4 py-3 whitespace-nowrap">User Id</th>
        <th className="px-4 py-3 whitespace-nowrap">Order Status</th>
        <th className="px-4 py-3 whitespace-nowrap">Date</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-gray-700 text-gray-200 text-sm font-medium">
        <td className="px-4 py-3 whitespace-nowrap text-red-400">687d1833228db479bb943d0d</td>
        <td className="px-4 py-3 whitespace-nowrap text-red-400">pay_QvO1Q6EGKH3sjo</td>
        <td className="px-4 py-3 whitespace-nowrap">kon1</td>
        <td className="px-4 py-3 whitespace-nowrap">911234567</td>
        <td className="px-4 py-3 whitespace-nowrap max-w-[250px] overflow-hidden text-ellipsis">
          Home wdj jdnkj 12345sq djj sd
        </td>
        <td className="px-4 py-3 whitespace-nowrap">1234</td>
        <td className="px-4 py-3 whitespace-nowrap">1999</td>
        <td className="px-4 py-3 whitespace-nowrap">kon1@gmail.com</td>
        <td className="px-4 py-3 whitespace-nowrap text-red-400">687ba5aa228db479bb92cf4f</td>
        <td className="px-4 py-3 whitespace-nowrap">
          <div className="w-fit px-3 py-[2px] rounded-full bg-green-500 text-white text-xs font-semibold text-center">
            Confirm
          </div>
        </td>
        <td className="px-4 py-3 whitespace-nowrap">2025-07-20</td>
      </tr>
    </tbody>
  </table>
</div>







    </div>
  )
}

export default UserOrders