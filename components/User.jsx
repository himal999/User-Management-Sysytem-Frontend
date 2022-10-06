import React from 'react';

const User = ({ user }) => {
  return (
    <tr key={user.id} className=" text-gray-700">
      <td className=" px-4 py-2">{user.firstName}</td>
      <td className=" px-4 py-2">{user.lastName}</td>
      <td className=" px-4 py-2">{user.email}</td>
      <td className=" px-4 py-2 flex flex-row justify-around">
        <span className=" cursor-pointer">Edit</span>
        <span className=" cursor-pointer">Delete</span>
      </td>
    </tr>
  );
};

export default User;
