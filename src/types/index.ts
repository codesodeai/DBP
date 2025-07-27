export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'receptionist' | 'staff';
  avatar?: string;
  specialty?: string;
  joiningDate: string;
  isActive: boolean;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  dateOfBirth?: string;
  preferences: string[];
  totalVisits: number;
  totalSpent: number;
  lastVisit?: string;
  avatar?: string;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  duration: number; // in minutes
  price: number;
  commission: number; // percentage
  productsUsed: ProductUsage[];
  isActive: boolean;
}

export interface ProductUsage {
  productId: string;
  quantity: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  currentStock: number;
  minStock: number;
  price: number;
  unit: string;
  supplier?: string;
  expiryDate?: string;
}

export interface Appointment {
  id: string;
  customerId: string;
  customerName: string;
  staffId: string;
  staffName: string;
  serviceIds: string[];
  date: string;
  time: string;
  duration: number;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  notes?: string;
  totalAmount: number;
}

export interface Attendance {
  id: string;
  staffId: string;
  staffName: string;
  date: string;
  clockIn?: string;
  clockOut?: string;
  status: 'present' | 'absent' | 'late' | 'half-day' | 'leave';
  workingHours?: number;
  notes?: string;
}

export interface Payment {
  id: string;
  appointmentId: string;
  customerId: string;
  customerName: string;
  amount: number;
  gst: number;
  discount: number;
  finalAmount: number;
  paymentMethod: 'cash' | 'card' | 'upi' | 'bank-transfer';
  date: string;
  staffCommissions: StaffCommission[];
}

export interface StaffCommission {
  staffId: string;
  staffName: string;
  serviceId: string;
  serviceName: string;
  commissionRate: number;
  commissionAmount: number;
}

export interface Invoice {
  id: string;
  paymentId: string;
  invoiceNumber: string;
  date: string;
  customerName: string;
  services: InvoiceService[];
  subtotal: number;
  gst: number;
  discount: number;
  total: number;
}

export interface InvoiceService {
  name: string;
  price: number;
  quantity: number;
}

export interface DashboardStats {
  todayRevenue: number;
  monthlyRevenue: number;
  totalCustomers: number;
  todayAppointments: number;
  staffPresent: number;
  lowStockItems: number;
}