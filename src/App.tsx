import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import AppointmentCalendar from './components/Appointments/AppointmentCalendar';
import StaffManagement from './components/Staff/StaffManagement';
import AttendanceTracker from './components/Attendance/AttendanceTracker';
import CustomerManagement from './components/Customers/CustomerManagement';
import InventoryManagement from './components/Inventory/InventoryManagement';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const getTabTitle = (tab: string) => {
    switch (tab) {
      case 'dashboard': return 'Dashboard';
      case 'appointments': return 'Appointments';
      case 'customers': return 'Customers';
      case 'staff': return 'Staff Management';
      case 'attendance': return 'Attendance';
      case 'payments': return 'Payments';
      case 'inventory': return 'Inventory';
      case 'invoices': return 'Invoices';
      case 'settings': return 'Settings';
      default: return 'Dashboard';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'appointments':
        return <AppointmentCalendar />;
      case 'customers':
        return <CustomerManagement />;
      case 'staff':
        return <StaffManagement />;
      case 'attendance':
        return <AttendanceTracker />;
      case 'inventory':
        return <InventoryManagement />;
      case 'payments':
        return (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Payments Management</h2>
            <p className="text-gray-600">Payment tracking and commission calculation features coming soon...</p>
          </div>
        );
      case 'invoices':
        return (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Invoice Management</h2>
            <p className="text-gray-600">Invoice generation and GST management features coming soon...</p>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Settings</h2>
            <p className="text-gray-600">System settings and configuration options coming soon...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <AuthProvider>
      <div className="flex h-screen bg-gray-50">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header title={getTabTitle(activeTab)} />
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;