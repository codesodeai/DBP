import React from 'react';
import { 
  Calendar, 
  Users, 
  Clock, 
  CreditCard, 
  UserCheck, 
  Package, 
  FileText, 
  BarChart3, 
  Settings,
  Crown
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const { currentUser, hasPermission } = useAuth();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, permission: 'all' },
    { id: 'appointments', label: 'Appointments', icon: Calendar, permission: 'appointments' },
    { id: 'customers', label: 'Customers', icon: Users, permission: 'customers' },
    { id: 'staff', label: 'Staff Management', icon: UserCheck, permission: 'staff' },
    { id: 'attendance', label: 'Attendance', icon: Clock, permission: 'attendance' },
    { id: 'payments', label: 'Payments', icon: CreditCard, permission: 'payments' },
    { id: 'inventory', label: 'Inventory', icon: Package, permission: 'inventory' },
    { id: 'invoices', label: 'Invoices', icon: FileText, permission: 'invoices' },
    { id: 'settings', label: 'Settings', icon: Settings, permission: 'settings' }
  ];

  const filteredMenuItems = menuItems.filter(item => 
    item.permission === 'all' || hasPermission(item.permission)
  );

  return (
    <div className="bg-gradient-to-b from-purple-900 to-pink-900 text-white w-64 min-h-screen p-6">
      <div className="flex items-center mb-8">
        <Crown className="h-8 w-8 text-pink-300 mr-3" />
        <div>
          <h1 className="text-xl font-bold">Dulhan Beauty</h1>
          <p className="text-sm text-pink-200">Parlour</p>
        </div>
      </div>
      
      <div className="mb-6 p-4 bg-white bg-opacity-10 rounded-lg">
        <div className="flex items-center">
          <img 
            src={currentUser?.avatar || 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400'} 
            alt={currentUser?.name}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
          <div>
            <p className="font-medium">{currentUser?.name}</p>
            <p className="text-xs text-pink-200 capitalize">{currentUser?.role}</p>
          </div>
        </div>
      </div>

      <nav className="space-y-2">
        {filteredMenuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-white bg-opacity-20 text-white shadow-lg'
                  : 'text-pink-100 hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;