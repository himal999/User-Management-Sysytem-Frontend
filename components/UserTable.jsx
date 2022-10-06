import React, { useEffect, useState } from 'react';
import User from './User';

const UserTable = () => {
  const BASE_URL = 'http://localhost:8080/user';
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const resp = await fetch(BASE_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setUsers(data.data);
            setLoading(false);
          });
      } catch (error) {
        console.log('Fail to load' + ' ' + error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full  h-[70vh] relative  flex flex-col justify-center items-center  ">
      <div className="min-w-[50%]  h-auto shadow-xl ">
        <table className=" table-auto w-full">
          <thead className=" text-lg  bg-gray-100 uppercase">
            <tr className=" text-gray-800">
              <th className="px-4 py-2 text-start">First Name</th>
              <th className="px-4 py-2 text-start">Last Name</th>
              <th className="px-4 py-2 text-start">Email</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {users.map((e) => {
                return <User user={e} key={e.id} />;
              })}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default UserTable;
