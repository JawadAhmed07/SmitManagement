'use client'

import { Card } from "@/components/ui/card"

import { Users, Folder } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage  } from "../ui/avatar"


export default function TrainerCard({
    courseName,
    batchName,
    studentName,
    avatarUrl
}) {
    return (
        <Card className="w-full max-w-sm overflow-visible hover:shadow-lg transition-shadow">
            <div className="relative">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-blue-400 to-blue-300 p-6 rounded-t-lg">
                    <div className="space-y-1.5 mb-12">
                        <h3 className="text-xl font-semibold text-white line-clamp-1">{courseName}</h3>
                        <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-sm text-white">
                                Batch {batchName}
                            </span>
                        </div>
                        <p className="text-white/90 font-medium">{studentName}</p>
                    </div>
                </div>

                {/* Avatar */}
                <div className="absolute -bottom-12 left-6">
                    <Avatar className="w-24 h-24 border-4 border-white">
                        <AvatarImage src={avatarUrl} alt={studentName} />
                        <AvatarFallback>{studentName[0]}</AvatarFallback>
                    </Avatar>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="p-6 pt-16 flex justify-end gap-4">
                <button className="hover:text-orange-500 transition-colors">
                    <Users className="w-6 h-6" />
                </button>
                <button className="hover:text-orange-500 transition-colors">
                    <Folder className="w-6 h-6" />
                </button>
            </div>
        </Card>)
}
