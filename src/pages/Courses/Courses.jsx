import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CourseCard from '@/components/CoursesCard'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import AddCourseForm from '@/components/AddCourseForm';



function Courses() {

    const user = "admin"
    return (
        <div className="container max-w-screen-xl  px-5 py-10 mx-auto">
            <div className="justify-between flex py-10 ">

                <h1 className="title-font sm:text-4xl text-3xl  mb-4 font-bold text-gray-900">
                    Courses
                </h1>
                {
                    user == "admin" ?
                        <AddCourseForm/> :
                        ""
                }
            </div>
            <div className="flex flex-wrap -m-4">
                <CourseCard />

            </div>
        </div>
    )
}

export default Courses
