'use client';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback, memo } from 'react';

const drawerTabs = [
  { icon: '/ep_top.svg', tab: 'top' },
  { icon: '/chart.svg', tab: 'trending' },
  { icon: '/new.svg', tab: 'new' },
  { icon: '/all.svg', tab: 'all' },
];

type TrendsDrawerProps = { activeTab: string };

function TrendsDrawer({ activeTab }: TrendsDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  const activeIcon = drawerTabs.find(tab => tab.tab === activeTab)?.icon;

  return (
    <div>
      <button
        className='width-[143px] mt-5 flex flex-row items-center rounded-md bg-[#18181B] p-3 capitalize text-white lg:hidden'
        type='button'
        onClick={toggleDrawer}
        aria-expanded={isOpen}
      >
      
        {activeIcon && <Image src={activeIcon} width={24} height={24} alt={`${activeTab} icon`} />}   {activeTab} <ChevronDown />
      </button>
      {isOpen && (
        <div className='fixed bottom-0 left-0 right-0 z-40 flex w-full flex-col items-start overflow-y-auto rounded-tl-md rounded-tr-xl bg-[#18181B] p-4 transition-transform'>
          {drawerTabs.map(({ tab, icon }) => (
            <DrawerItem key={tab} tab={tab} activeTab={activeTab} icon={icon} setIsOpen={setIsOpen} />
          ))}
        </div>
      )}
    </div>
  );
}

type DrawerItemProps = {
  tab: string;
  activeTab: string;
  icon: string;
  setIsOpen: (isOpen: boolean) => void;
};

const DrawerItem = ({ tab, activeTab, icon, setIsOpen }: DrawerItemProps) => (
  <div
    className={`flex h-[45px] w-full rounded-lg p-2 items-center gap-2 ${activeTab === tab && 'bg-[#222225]'}`}
  >
    <Link
      href={`?activeTab=${tab}`}
      onClick={() => setIsOpen(false)}
      className='flex h-full items-center gap-2 align-middle capitalize'
      scroll={false}
    >
      <Image src={icon} width={24} height={24} alt={`${tab} icon`} priority={tab === activeTab} />
      {tab}
    </Link>
  </div>
);

export default TrendsDrawer;
