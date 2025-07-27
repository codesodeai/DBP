import { User, Customer, Service, Product, Appointment, Attendance, Payment, DashboardStats } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@dulhanbeauty.com',
    phone: '+91 9876543210',
    role: 'admin',
    specialty: 'Management',
    joiningDate: '2020-01-01',
    isActive: true,
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    email: 'priya@dulhanbeauty.com',
    phone: '+91 9876543211',
    role: 'staff',
    specialty: 'Bridal Makeup',
    joiningDate: '2021-03-15',
    isActive: true,
    avatar: 'https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    name: 'Sunita Verma',
    email: 'sunita@dulhanbeauty.com',
    phone: '+91 9876543212',
    role: 'staff',
    specialty: 'Hair Styling',
    joiningDate: '2021-06-01',
    isActive: true,
    avatar: 'https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    name: 'Ritu Singh',
    email: 'ritu@dulhanbeauty.com',
    phone: '+91 9876543213',
    role: 'receptionist',
    specialty: 'Customer Service',
    joiningDate: '2022-01-10',
    isActive: true,
    avatar: 'https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Anjali Gupta',
    phone: '+91 9988776655',
    email: 'anjali@gmail.com',
    address: 'New Delhi',
    preferences: ['Bridal Makeup', 'Hair Styling'],
    totalVisits: 15,
    totalSpent: 45000,
    lastVisit: '2024-01-15',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Meera Patel',
    phone: '+91 9988776656',
    email: 'meera@gmail.com',
    address: 'Mumbai',
    preferences: ['Facial', 'Manicure'],
    totalVisits: 8,
    totalSpent: 12000,
    lastVisit: '2024-01-10',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Bridal Makeup',
    category: 'Makeup',
    duration: 180,
    price: 8000,
    commission: 25,
    productsUsed: [
      { productId: '1', quantity: 1 },
      { productId: '2', quantity: 1 }
    ],
    isActive: true
  },
  {
    id: '2',
    name: 'Party Makeup',
    category: 'Makeup',
    duration: 90,
    price: 3000,
    commission: 20,
    productsUsed: [
      { productId: '1', quantity: 0.5 },
      { productId: '3', quantity: 1 }
    ],
    isActive: true
  },
  {
    id: '3',
    name: 'Hair Styling',
    category: 'Hair',
    duration: 60,
    price: 1500,
    commission: 15,
    productsUsed: [
      { productId: '4', quantity: 1 }
    ],
    isActive: true
  },
  {
    id: '4',
    name: 'Facial Treatment',
    category: 'Skincare',
    duration: 75,
    price: 2000,
    commission: 18,
    productsUsed: [
      { productId: '5', quantity: 1 }
    ],
    isActive: true
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Foundation Set',
    category: 'Makeup',
    currentStock: 25,
    minStock: 10,
    price: 500,
    unit: 'piece',
    supplier: 'MAC Cosmetics'
  },
  {
    id: '2',
    name: 'Lipstick Collection',
    category: 'Makeup',
    currentStock: 8,
    minStock: 15,
    price: 300,
    unit: 'piece',
    supplier: 'Lakme'
  },
  {
    id: '3',
    name: 'Eye Shadow Palette',
    category: 'Makeup',
    currentStock: 12,
    minStock: 8,
    price: 800,
    unit: 'piece',
    supplier: 'Urban Decay'
  },
  {
    id: '4',
    name: 'Hair Serum',
    category: 'Hair Care',
    currentStock: 20,
    minStock: 12,
    price: 450,
    unit: 'bottle',
    supplier: 'Loreal'
  },
  {
    id: '5',
    name: 'Facial Kit',
    category: 'Skincare',
    currentStock: 5,
    minStock: 10,
    price: 600,
    unit: 'kit',
    supplier: 'Olay'
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    customerId: '1',
    customerName: 'Anjali Gupta',
    staffId: '2',
    staffName: 'Priya Sharma',
    serviceIds: ['1', '3'],
    date: '2024-01-20',
    time: '10:00',
    duration: 240,
    status: 'scheduled',
    totalAmount: 9500,
    notes: 'Bridal makeup for wedding ceremony'
  },
  {
    id: '2',
    customerId: '2',
    customerName: 'Meera Patel',
    staffId: '3',
    staffName: 'Sunita Verma',
    serviceIds: ['4'],
    date: '2024-01-20',
    time: '14:00',
    duration: 75,
    status: 'completed',
    totalAmount: 2000
  }
];

export const mockAttendance: Attendance[] = [
  {
    id: '1',
    staffId: '2',
    staffName: 'Priya Sharma',
    date: '2024-01-20',
    clockIn: '09:00',
    clockOut: '18:00',
    status: 'present',
    workingHours: 9
  },
  {
    id: '2',
    staffId: '3',
    staffName: 'Sunita Verma',
    date: '2024-01-20',
    clockIn: '09:30',
    status: 'present',
    workingHours: 0
  }
];

export const mockPayments: Payment[] = [
  {
    id: '1',
    appointmentId: '2',
    customerId: '2',
    customerName: 'Meera Patel',
    amount: 2000,
    gst: 360,
    discount: 0,
    finalAmount: 2360,
    paymentMethod: 'upi',
    date: '2024-01-20',
    staffCommissions: [
      {
        staffId: '3',
        staffName: 'Sunita Verma',
        serviceId: '4',
        serviceName: 'Facial Treatment',
        commissionRate: 18,
        commissionAmount: 360
      }
    ]
  }
];

export const mockDashboardStats: DashboardStats = {
  todayRevenue: 12000,
  monthlyRevenue: 180000,
  totalCustomers: 245,
  todayAppointments: 8,
  staffPresent: 3,
  lowStockItems: 2
};