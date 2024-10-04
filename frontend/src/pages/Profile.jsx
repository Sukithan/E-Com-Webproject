import React, { useState } from 'react';

const Address = ({ street, city, state, zip }) => {
  return (
    <div className="space-y-2 text-gray-700">
      <p><strong>Street Address:</strong> {street}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>State:</strong> {state}</p>
      <p><strong>Zip Code:</strong> {zip}</p>
    </div>
  );
};

const EditAddress = ({ currentAddress, onSave }) => {
  const [address, setAddress] = useState(currentAddress);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(address);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label className="text-gray-600">Street Address:</label>
        <input
          type="text"
          name="street"
          value={address.street}
          onChange={handleChange}
          className="p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-600">City:</label>
        <input
          type="text"
          name="city"
          value={address.city}
          onChange={handleChange}
          className="p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-600">State:</label>
        <input
          type="text"
          name="state"
          value={address.state}
          onChange={handleChange}
          className="p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-600">Zip Code:</label>
        <input
          type="text"
          name="zip"
          value={address.zip}
          onChange={handleChange}
          className="p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button 
        type="submit" 
        className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
        Save Address
      </button>
    </form>
  );
};

const Profile = () => {
  const [customer, setCustomer] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    address: {
      street: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      zip: '62704'
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (newAddress) => {
    setCustomer({ ...customer, address: newAddress });
    setIsEditing(false); // Exit editing mode after saving
  };

  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url("src/assets/Login_bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex h-full">
        {/* Left Section with Text */}
        <div className="text-center lg:text-left text-white mx-3 flex flex-col justify-center">
          <div className="p-8">
            <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold mb-4">Welcome to Your Profile</h1>
            <p className="text-2xl sm:text-2xl">Update your address and personal information with ease.</p>
          </div>
        </div>
        
        {/* Right Section with Form */}
        <div className="w-2/3 flex items-center justify-center">
          <div className="bg-white shadow-2xl rounded-2xl p-8 sm:w-2/3 lg:w-1/2 m-5">
            <h2 className="text-2xl font-semibold text-indigo-600">Customer Profile</h2>
            <div className="mt-4 text-gray-700">
              <p><strong>First Name:</strong> {customer.firstName}</p>
              <p><strong>Last Name:</strong> {customer.lastName}</p>
              <p><strong>Email:</strong> {customer.email}</p>
            </div>
            
            <h3 className="mt-6 text-xl font-medium text-gray-800">Address</h3>
            {!isEditing ? (
              <div className="mt-4">
                <Address {...customer.address} />
                <button 
                  onClick={toggleEdit}
                  className="mt-4 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                  Edit Address
                </button>
              </div>
            ) : (
              <div className="mt-4">
                <EditAddress currentAddress={customer.address} onSave={handleSave} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
