import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  UserCheck, 
  AlertTriangle, 
  IndianRupee 
} from 'lucide-react';
import { mockDashboardStats, mockProducts, mockAppointments } from '../../data/mockData';

const Dashboard: React.FC = () => {
  const stats = mockDashboardStats;
  const lowStockProducts = mockProducts.filter(p => p.currentStock <= p.minStock);
  const todayAppointments = mockAppointments.filter(a => a.date === '2024-01-20');

  const statCards = [
    {
      title: "Today's Revenue",
      value: `₹${stats.todayRevenue.toLocaleString()}`,
      icon: IndianRupee,
      color: 'bg-gradient-to-r from-green-500 to-emerald-600',
      change: '+12%'
    },
    {
      title: 'Monthly Revenue',
      value: `₹${stats.monthlyRevenue.toLocaleString()}`,
      icon: TrendingUp,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      change: '+8%'
    },
    {
      title: 'Total Customers',
      value: stats.totalCustomers.toString(),
      icon: Users,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      change: '+15%'
    },
    {
      title: "Today's Appointments",
      value: stats.todayAppointments.toString(),
      icon: Calendar,
      color: 'bg-gradient-to-r from-pink-500 to-rose-600',
      change: '+5%'
    },
    {
      title: 'Staff Present',
      value: `${stats.staffPresent}/4`,
      icon: UserCheck,
      color: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      change: '100%'
    },
    {
      title: 'Low Stock Items',
      value: stats.lowStockItems.toString(),
      icon: AlertTriangle,
      color: 'bg-gradient-to-r from-red-500 to-red-600',
      change: 'Alert'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`${stat.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white text-opacity-80 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className="h-8 w-8 text-white text-opacity-80" />
                </div>
                <div className="mt-2">
                  <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Appointments */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Appointments</h3>
          <div className="space-y-3">
            {todayAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{appointment.customerName}</p>
                  <p className="text-sm text-gray-600">{appointment.time} - {appointment.staffName}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">₹{appointment.totalAmount}</p>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                    appointment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
            Low Stock Alert
          </h3>
          <div className="space-y-3">
            {lowStockProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                <div>
                  <p className="font-medium text-gray-800">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-red-600 font-semibold">{product.currentStock} {product.unit}</p>
                  <p className="text-xs text-gray-500">Min: {product.minStock}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors text-center">
            <Calendar className="h-8 w-8 text-pink-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">New Appointment</p>
          </button>
          <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-center">
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Add Customer</p>
          </button>
          <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-center">
            <UserCheck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Mark Attendance</p>
          </button>
          <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-center">
            <IndianRupee className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">Record Payment</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;