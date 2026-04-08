"use client";

import { useState } from "react";
import InvitationTemplate from "../components/InvitationTemplate";
import { invitationData } from "../data/invitation";

type InvitationType = keyof typeof invitationData;

export default function Page() {
  const [type, setType] = useState<InvitationType>("chung");
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "chung", label: "Thiệp Chung" },
    { value: "nhaTrai", label: "Nhà Trai" },
    { value: "nhaGai", label: "Nhà Gái" },
  ];

  const currentLabel = options.find((opt) => opt.value === type)?.label;

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* 🎨 CUSTOM SELECT CONTAINER */}
      <div className="p-6 flex justify-start relative z-50">
        <div className="relative w-full max-w-[220px]">
          {/* Label Header */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full bg-white border-2 border-[#7d1220] text-[#7d1220] py-2 px-5 rounded-full shadow-md cursor-pointer hover:bg-[#7d1220]/5 transition-all"
          >
            <span className="text-[15px] font-serif font-medium">{currentLabel}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* 📋 DROPDOWN MENU */}
          {isOpen && (
            <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    setType(option.value as InvitationType);
                    setIsOpen(false);
                  }}
                  className={`px-5 py-3 text-sm font-serif cursor-pointer transition-colors ${
                    type === option.value
                      ? "bg-[#3b82f6] text-white" // Màu xanh như hình bạn gửi
                      : "text-[#7d1220] hover:bg-gray-100"
                  }`}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Overlay để đóng dropdown khi bấm ra ngoài */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}

      <InvitationTemplate data={invitationData[type]} />
    </div>
  );
}