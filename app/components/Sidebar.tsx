'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  BarChart3,
  User,
  Grid3x3,
  Phone,
  GitBranch,
  Box,
  Zap,
  Radio,
  CreditCard,
  Hash,
  Mic,
  BookOpen,
  Globe,
  MessageSquare,
  Shield,
  LayoutGrid,
} from 'lucide-react';
import clsx from 'clsx';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  badgeColor?: string;
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/dashboard', icon: Home },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Personas', href: '/dashboard/personas', icon: User, badge: 'New', badgeColor: 'bg-orange-500' },
  { name: 'Call Logs', href: '/dashboard/call-logs', icon: Grid3x3 },
  { name: 'Send Call', href: '/dashboard/send-call', icon: Phone },
  { name: 'Conversational Pathways', href: '/dashboard/convo-pathways', icon: GitBranch },
  { name: 'Batches', href: '/dashboard/batches', icon: Box },
  { name: 'Tools', href: '/dashboard/tools', icon: Zap, badge: 'Updated', badgeColor: 'bg-orange-500' },
  { name: 'Events', href: '/dashboard/events', icon: Radio },
  { name: 'Billing & Credits', href: '/dashboard/billing', icon: CreditCard },
  { name: 'Phone Numbers', href: '/dashboard/phone-numbers', icon: Hash },
  { name: 'Voices', href: '/dashboard/voices', icon: Mic },
  { name: 'Knowledge Bases', href: '/dashboard/knowledge-bases', icon: BookOpen },
  { name: 'Web Widget', href: '/dashboard/web-widget', icon: Globe },
  { name: 'SMS', href: '/dashboard/sms', icon: MessageSquare },
  { name: 'Compliance & Policy', href: '/dashboard/compliance', icon: Shield },
  { name: 'Add Ons', href: '/dashboard/add-ons', icon: LayoutGrid },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex w-64 bg-gray-100 h-screen flex-col border-r border-gray-200 fixed left-0 top-0">
      <div className="p-6 border-b border-gray-200">
        <Link href="/dashboard" className="text-2xl font-bold text-gray-900">
          channel
        </Link>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
          const Icon = item.icon;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors relative',
                isActive
                  ? 'bg-gray-200 text-gray-900'
                  : 'text-gray-700 hover:bg-gray-50'
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="flex-1">{item.name}</span>
              {item.badge && (
                <span className={clsx('px-2 py-0.5 text-xs font-medium rounded-full text-white', item.badgeColor)}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-2 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-pink-500"></div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">-1.47 credits</div>
          </div>
        </div>
      </div>
    </div>
  );
}

