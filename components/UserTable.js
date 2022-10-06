import React from 'react';

const UserTable = () => {
  return (
    <div className="w-full  h-[70vh] relative  flex flex-col justify-center items-center  ">
      <div className="min-w-[50%]  h-auto shadow-xl ">
        <table className=" table-auto w-full">
          <thead className=" text-lg  bg-gray-100">
            <tr className=" text-gray-800">
              <th className="px-4 py-2 text-start">First Name</th>
              <th className="px-4 py-2 text-start">Last Name</th>
              <th className="px-4 py-2 text-start">Email</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" px-4 py-2">Nimal</td>
              <td className=" px-4 py-2">Perera</td>
              <td className=" px-4 py-2">nimal@gmail.com</td>
              <td className=" px-4 py-2 flex flex-row justify-around">
                <span className=" cursor-pointer">Edit</span>
                <span className=" cursor-pointer">Delete</span>
              </td>
            </tr>
            <tr>
              <td className=" px-4 py-2">Nimal</td>
              <td className=" px-4 py-2">Perera</td>
              <td className=" px-4 py-2">nimal@gmail.com</td>
              <td className=" px-4 py-2 flex flex-row justify-around">
                <span className=" cursor-pointer">Edit</span>
                <span className=" cursor-pointer">Delete</span>
              </td>
            </tr>
            <tr>
              <td className=" px-4 py-2">Nimal</td>
              <td className=" px-4 py-2">Perera</td>
              <td className=" px-4 py-2">nimal@gmail.com</td>
              <td className=" px-4 py-2 flex flex-row justify-around">
                <span className=" cursor-pointer">Edit</span>
                <span className=" cursor-pointer">Delete</span>
              </td>
            </tr>
            <tr>
              <td className=" px-4 py-2">Nimal</td>
              <td className=" px-4 py-2">Perera</td>
              <td className=" px-4 py-2">nimal@gmail.com</td>
              <td className=" px-4 py-2 flex flex-row justify-around">
                <span className=" cursor-pointer">Edit</span>
                <span className=" cursor-pointer">Delete</span>
              </td>
            </tr>
            <tr>
              <td className=" px-4 py-2">Nimal</td>
              <td className=" px-4 py-2">Perera</td>
              <td className=" px-4 py-2">nimal@gmail.com</td>
              <td className=" px-4 py-2 flex flex-row justify-around">
                <span className=" cursor-pointer">Edit</span>
                <span className=" cursor-pointer">Delete</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
