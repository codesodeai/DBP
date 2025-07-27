import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Plus, Edit, Eye, Heart } from 'lucide-react';
import { mockCustomers } from '../../data/mockData';

const CustomerManagement: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = mockCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Customer Management</h2>
          <p className="text-gray-600">Manage customer profiles and preferences</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Customer
        </button>
      </div>

      {/* Customer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Customers</p>
              <p className="text-2xl font-bold text-gray-800">{mockCustomers.length}</p>
            </div>
            <User className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">VIP Customers</p>
              <p className="text-2xl font-bold text-purple-600">12</p>
            </div>
            <Heart className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">New This Month</p>
              <p className="text-2xl font-bold text-green-600">28</p>
            </div>
            <User className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Customers</p>
              <p className="text-2xl font-bold text-pink-600">156</p>
            </div>
            <User className="h-8 w-8 text-pink-500" />
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Search customers by name or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-500"
          />
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500">
            <option>All Categories</option>
            <option>VIP Customers</option>
            <option>Regular Customers</option>
            <option>New Customers</option>
          </select>
        </div>
      </div>

      {/* Customer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => (
          <div key={customer.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={customer.avatar || 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400'}
                    alt={customer.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-800">{customer.name}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {customer.phone}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCustomer(customer)}
                  className="text-pink-600 hover:text-pink-800 transition-colors"
                >
                  <Eye className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-2 mb-4">
                {customer.email && (
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    {customer.email}
                  </p>
                )}
                {customer.address && (
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {customer.address}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-2 bg-pink-50 rounded-lg">
                  <p className="text-lg font-bold text-pink-600">{customer.totalVisits}</p>
                  <p className="text-xs text-gray-600">Total Visits</p>
                </div>
                <div className="text-center p-2 bg-green-50 rounded-lg">
                  <p className="text-lg font-bold text-green-600">₹{customer.totalSpent.toLocaleString()}</p>
                  <p className="text-xs text-gray-600">Total Spent</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Preferences:</p>
                <div className="flex flex-wrap gap-1">
                  {customer.preferences.map((pref, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full"
                    >
                      {pref}
                    </span>
                  ))}
                </div>
              </div>

              {customer.lastVisit && (
                <p className="text-xs text-gray-500">
                  Last visit: {new Date(customer.lastVisit).toLocaleDateString()}
                </p>
              )}

              <div className="mt-4 flex gap-2">
                <button className="flex-1 bg-pink-50 hover:bg-pink-100 text-pink-600 py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                  Book Appointment
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <Edit className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Customer Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 max-h-96 overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Customer</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address (Optional)</label>
                <textarea
                  rows={2}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth (Optional)</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferences</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Bridal Makeup', 'Hair Styling', 'Facial', 'Manicure', 'Pedicure', 'Threading'].map((pref) => (
                    <label key={pref} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">{pref}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  Add Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerManagement;