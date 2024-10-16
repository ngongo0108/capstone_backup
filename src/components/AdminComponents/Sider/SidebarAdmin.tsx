import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { GrMoney } from 'react-icons/gr';
import { IoHomeOutline } from 'react-icons/io5';
import { LuUsers2 } from 'react-icons/lu';
import { TbBowlChopsticks, TbReportMoney } from 'react-icons/tb';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <IoHomeOutline className='w-4 h-4' />,
    children: [
      { key: '1', label: 'Dashboard' },
    ],
  },
  {
    key: 'staff',
    label: 'Nhân viên',
    icon: <LuUsers2 className='w-4 h-4' />,
    children: [
      {
        key: 'listStaff',
        label: 'Danh sách nhân viên',
        icon: <LuUsers2 className='w-4 h-4' />,
      },
      {
        key: 'addStaff',
        label: 'Thêm mới nhân viên',
        icon: <AiOutlineUserAdd className='w-4 h-4' />,
      },
    ],
  },
  {
    key: 'user',
    label: 'Người dùng',
    icon: <FaUserFriends className='w-4 h-4' />,
    children: [
      {
        key: 'listUser',
        label: 'Danh sách người dùng',
        icon: <FaUserFriends className='w-4 h-4' />,
      },
    ],
  },
  {
    key: 'funiture',
    label: 'Đồ gia dụng',
    icon: <TbBowlChopsticks className='w-4 h-4' />,
    children: [
      {
        key: 'listFuniture',
        label: 'Danh sách đồ gia dụng',
        icon: <TbBowlChopsticks className='w-4 h-4' />,
      },
      {
        key: 'addFuniture',
        label: 'Thêm mới đồ gia dụng',
        icon: <TbBowlChopsticks className='w-4 h-4' />,
      },
    ],
  },
  {
    key: 'revenue',
    label: 'Doanh thu',
    icon: <GrMoney className='w-4 h-4' />,
    children: [
      {
        key: 'totalRevenue',
        label: 'Doanh thu',
        icon: <TbReportMoney className='w-4 h-4' />,
      },
      {
        key: 'commissionRevenue',
        label: 'Doanh thu từ hoa hồng',
        icon: <GiReceiveMoney className='w-4 h-4' />,
      },
    ],
  },
];

const SidebarAdmin: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 270 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['dashboard']}
      mode="inline"
      items={items}
      className='text-start font-semibold text-base'
    />
  );
};

export default SidebarAdmin;