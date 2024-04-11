
import {
  BarChart2,
  ShoppingCart,
  ClipboardList,
  MessageSquareMore,
  Settings,
  LogOut,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface NavLink {
  title: string;
  path: string;
  icon: LucideIcon;
}

export const NavLinks: NavLink[] = [
  {
    title: 'Leaderboard',
    icon: BarChart2,
    path: '/leaderboard',
  },
  {
    title: 'Order',
    icon: ShoppingCart,
    path: '/order',
  },
  {
    title: 'Products',
    icon: ClipboardList,
    path: '/products',
  },
  {
    title: 'Messages',
    icon: MessageSquareMore,
    path: '/messages',
  },
  {
    title: 'Settings',
    icon: Settings,
    path: '/settings',
  },
  {
    title: 'Sign Out',
    icon: LogOut,
    path: '/signout',
  },
];
