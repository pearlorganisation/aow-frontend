"use client"

import { MapPin } from 'lucide-react';

export default function TrendingEventCards({
    title = "Rally of Indore",
    date = "12-05-2025",
    location = "Sohna Road, Gurgaon, Haryana",
    onRegistration,
    onFees
}) {
    return (
        <div className="w-full max-w-sm">
            {/* Event Card */}
            <div className="bg-[#e9f5fb] rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Event Image/Logo Section */}
                <div className="h-48 bg-gradient-to-br  my-4 mx-2  flex items-center justify-center rounded-lg " style={{ boxShadow: "rgba(0, 20, 0, 0.24) 4px 10px 10px" }}>
                    <img src="/HomePage/event.jfif" alt="Event" className="w-full h-full object-cover rounded-lg" />
                </div>

                {/* Event Details */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 capitalize">
                        {title}
                    </h3>

                    <div className="mb-4">
                        <span className="text-blue-600 font-semibold text-base">
                            Date: {date}
                        </span>
                    </div>

                    <div className="flex items-center text-gray-600 mb-6">
                        <MapPin size={16} className="mr-2 text-gray-400" />
                        <span className="text-sm">{location}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={onRegistration}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg font-medium transition-colors duration-200 flex-1"
                        >
                            Registration
                        </button>
                        <button
                            onClick={onFees}
                            className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex-1"
                        >
                            Fees
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}