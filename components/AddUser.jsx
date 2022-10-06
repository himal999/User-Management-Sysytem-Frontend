import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import UserTable from '../components/UserTable';
export const AddUser = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
  });
  const [resUser, setResUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
  });
  function closeModal() {
    setIsOpen(false);
    setUser;
  }

  function openModal() {
    setIsOpen(true);
  }
  const change = (e) => {
    const value = e.target.value;
    setUser({ ...user, [event.target.name]: value });
  };

  const addUser = async (e) => {
    e.preventDefault();
    const BASE_URL = 'http://localhost:8080/user/create-user';

    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        alert('faild to add user');
      }
      const __user = await response.json();
      setResUser(__user);
      alert('User Addedd Successfully');
      clear(e);
    } catch (error) {
      console.log('faild to added');
    }
  };

  function clear(e) {
    e.preventDefault();

    closeModal(true);
    setUser({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
    });
  }
  return (
    <>
      <div className=" w-full h-auto mx-20 mb-10 flex flex-col justify-center items-center">
        <div className=" w-[1080px] ">
          <button
            type=""
            onClick={openModal}
            className=" bg-slate-500 text-white px-4 py-2"
          >
            Create User
          </button>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl  font-bold  text-center   text-gray-900"
                  >
                    Create New User
                  </Dialog.Title>
                  <div className="mt-2">
                    <div className=" flex flex-col my-2">
                      <label className=" text-base text-gray-800">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={user.firstName}
                        name="firstName"
                        onChange={(e) => {
                          change(e);
                        }}
                        className="px-2 border-[1px]  rounded-md border-gray-400 h-[40px]"
                      />
                    </div>
                    <div className=" flex flex-col my-2">
                      <label className=" text-base text-gray-800">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={user.lastName}
                        name="lastName"
                        onChange={(e) => {
                          change(e);
                        }}
                        className="px-2 border-[1px]  rounded-md border-gray-400 h-[40px]"
                      />
                    </div>
                    <div className=" flex flex-col my-2">
                      <label className=" text-base text-gray-800">email</label>
                      <input
                        type="email"
                        value={user.email}
                        name="email"
                        onChange={(e) => {
                          change(e);
                        }}
                        className="px-2 border-[1px]  rounded-md border-gray-400 h-[40px]"
                      />
                    </div>
                  </div>

                  <div className="mt-4 justify-center items-center flex flex-col">
                    <button
                      type=""
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={(e) => {
                        addUser(e);
                      }}
                    >
                      Add User
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <UserTable user={resUser} />
    </>
  );
};
