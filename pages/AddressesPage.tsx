
import React from 'react';
import { ArrowLeft, MapPin, Check, Phone, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

const ADDRESSES = [
  {
    id: 1,
    name: 'Brunch Coffee',
    address: 'Тарчокова 25 New',
    phone: '+7(938) 078-20-50',
    workTime: [
      'пн-сб 8:00−23:00',
      'вс 8:00−21:00'
    ]
  },
  {
    id: 2,
    name: 'Brunch Coffee',
    address: 'Тарчокова 25',
    phone: '+7(928) 078-13-36',
    workTime: [
      'пн-сб 8:00−23:00',
      'вс 8:00−21:00'
    ]
  },
  {
    id: 3,
    name: 'Brunch Coffee',
    address: 'Нахушева 10',
    phone: '+7(928) 080-29-20',
    workTime: [
      'пн-сб 8:00−23:00',
      'вс 8:00−21:00'
    ]
  },
  {
    id: 4,
    name: 'Brunch Coffee',
    address: 'Кенже, Каменская 21',
    phone: '+7(918) 720-19-63',
    workTime: [
      'пн-сб 8:00−23:00',
      'вс 8:00−21:00'
    ]
  },
];

export const AddressesPage: React.FC = () => {
  const navigate = useNavigate();
  const { selectedAddress, setSelectedAddress } = useAppStore();

  const handleSelectAddress = (address: string) => {
    setSelectedAddress(address);
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] pb-24 font-sans">
      <div className="bg-white p-4 border-b border-gray-100 sticky top-0 z-50 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-800 active:scale-90 transition-transform">
          <ArrowLeft size={24} />
        </button>
        <h1 className="font-bold text-lg">Кофейня</h1>
      </div>

      <div className="p-4 space-y-4">
        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2 px-1">Наши локации</p>
        {ADDRESSES.map((loc, idx) => {
          const isSelected = selectedAddress === loc.address;
          return (
            <div 
              key={loc.id} 
              onClick={() => handleSelectAddress(loc.address)}
              className={`bg-white p-4 rounded-3xl shadow-sm border transition-all cursor-pointer active:scale-[0.98] animate-slide-up flex flex-col gap-3 ${
                isSelected ? 'border-[#5a1e28] ring-1 ring-[#5a1e28]' : 'border-gray-100'
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                  isSelected ? 'bg-[#5a1e28] text-white' : 'bg-gray-200 text-[#5a1e28]'
                }`}>
                  <MapPin size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{loc.name}</h3>
                  <p className="text-sm text-slate-500 mb-2">{loc.address}</p>
                </div>

                {isSelected && (
                  <div className="bg-[#5a1e28] text-white p-1 rounded-full animate-pop-in">
                    <Check size={16} strokeWidth={3} />
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-gray-50 space-y-3">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-slate-400 mt-0.5" />
                  <a href={`tel:${loc.phone}`} className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors" onClick={e => e.stopPropagation()}>
                    {loc.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-slate-400 mt-0.5" />
                  <div className="flex flex-col gap-1">
                     {loc.workTime.map((time, i) => (
                       <span key={i} className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                         {time}
                       </span>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
