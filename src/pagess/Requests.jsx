import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label'
import React from 'react'

function CourseRequests() {


    function handleAccept() {
        console.log("Request Accepted");
        // Add your accept logic here
    }

    function handleReject() {
        console.log("Request Rejected");
        // Add your reject logic here
    }


    return (
        <div className='max-w-screen-xl mx-auto p-4'>

            <div className="justify-between flex py-10 ">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                    Courses Requests 
                </h1>

            </div>
            <div className='gap-5 grid grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-1 items-center justify-between'>

                <div className="max-w-md mx-auto bg-white border rounded-lg overflow-hidden">
                    <div className="p-4">
                        <div className="mb-4">
                            <h2 className="text-lg font-bold text-gray-800">Course Request</h2>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-start">
                                    Name
                                </Label>
                                <p className="col-span-3">anus</p>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-start">
                                    Email
                                </Label>
                                <p className="col-span-3">anus</p>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="phone" className="text-start">
                                    Phone
                                </Label>
                                <p className="col-span-3">ansajsbx</p>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="Course" className="text-start">
                                    Course
                                </Label>
                                <p className="col-span-3">Web And App</p>
                            </div>
                            <div className="grid grid-cols-4 items-start gap-4">
                                <Label htmlFor="message" className="text-start">
                                    Message
                                </Label>
                                <p className="col-span-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam nisi sit ea</p>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <Button
                                onClick={handleReject}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Reject
                            </Button>
                            <Button
                                onClick={handleAccept}
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                Accept
                            </Button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default CourseRequests
