'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function CourseRequests() {
    function handleAccept() {
        console.log("Request Accepted")
        // Add your accept logic here
    }

    function handleReject() {
        console.log("Request Rejected")
        // Add your reject logic here
    }

    return (
        <div className='max-w-screen-xl mx-auto '>
            <div className="flex justify-between items-center py-10">
                <h1 className="text-3xl font-bold">Course Requests
                </h1>


                <Badge variant="outline" className="text-lg">
                    1 New
                </Badge>
            </div>

            <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
                <Card className="w-full max-w-md">
                    <CardHeader className="space-y-1">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl font-semibold">Course Request</CardTitle>
                            <Badge>New</Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Avatar className="h-9 w-9">
                                <AvatarImage src="/placeholder-avatar.jpg" alt="Avatar" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">John Doe</p>
                                <p className="text-sm text-muted-foreground">john@example.com</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="mt-2">
                        <div className="grid gap-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="phone" className="text-sm font-medium">
                                    Phone
                                </Label>
                                <p className="col-span-3 text-sm">+1 (555) 123-4567</p>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="Course" className="text-sm font-medium">
                                    Course
                                </Label>
                                <p className="col-span-3 text-sm font-semibold text-primary">Web and App Development</p>
                            </div>
                            <div className="grid grid-cols-4 items-start gap-4">
                                <Label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </Label>
                                <p className="col-span-3 text-sm text-muted-foreground">
                                    I'm excited to learn web and app development. I have some experience with HTML and CSS, and I'm looking to expand my skills to become a full-stack developer.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button
                            onClick={handleReject}
                            variant="outline"
                            className="w-[45%]"
                        >
                            Reject
                        </Button>
                        <Button
                            onClick={handleAccept}
                            className="w-[45%]"
                        >
                            Accept
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="w-full max-w-md">
                    <CardHeader className="space-y-1">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl font-semibold">Course Request</CardTitle>
                            <Badge>New</Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Avatar className="h-9 w-9">
                                <AvatarImage src="/placeholder-avatar.jpg" alt="Avatar" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">John Doe</p>
                                <p className="text-sm text-muted-foreground">john@example.com</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="mt-2">
                        <div className="grid gap-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="phone" className="text-sm font-medium">
                                    Phone
                                </Label>
                                <p className="col-span-3 text-sm">+1 (555) 123-4567</p>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="Course" className="text-sm font-medium">
                                    Course
                                </Label>
                                <p className="col-span-3 text-sm font-semibold text-primary">Web and App Development</p>
                            </div>
                            <div className="grid grid-cols-4 items-start gap-4">
                                <Label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </Label>
                                <p className="col-span-3 text-sm text-muted-foreground">
                                    I'm excited to learn web and app development. I have some experience with HTML and CSS, and I'm looking to expand my skills to become a full-stack developer.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button
                            onClick={handleReject}
                            variant="outline"
                            className="w-[45%]"
                        >
                            Reject
                        </Button>
                        <Button
                            onClick={handleAccept}
                            className="w-[45%]"
                        >
                            Accept
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="w-full max-w-md">
                    <CardHeader className="space-y-1">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl font-semibold">Course Request</CardTitle>
                            <Badge>New</Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Avatar className="h-9 w-9">
                                <AvatarImage src="/placeholder-avatar.jpg" alt="Avatar" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">John Doe</p>
                                <p className="text-sm text-muted-foreground">john@example.com</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="mt-2">
                        <div className="grid gap-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="phone" className="text-sm font-medium">
                                    Phone
                                </Label>
                                <p className="col-span-3 text-sm">+1 (555) 123-4567</p>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="Course" className="text-sm font-medium">
                                    Course
                                </Label>
                                <p className="col-span-3 text-sm font-semibold text-primary">Web and App Development</p>
                            </div>
                            <div className="grid grid-cols-4 items-start gap-4">
                                <Label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </Label>
                                <p className="col-span-3 text-sm text-muted-foreground">
                                    I'm excited to learn web and app development. I have some experience with HTML and CSS, and I'm looking to expand my skills to become a full-stack developer.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button
                            onClick={handleReject}
                            variant="outline"
                            className="w-[45%]"
                        >
                            Reject
                        </Button>
                        <Button
                            onClick={handleAccept}
                            className="w-[45%]"
                        >
                            Accept
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="w-full max-w-md">
                    <CardHeader className="space-y-1">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl font-semibold">Course Request</CardTitle>
                            <Badge>New</Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Avatar className="h-9 w-9">
                                <AvatarImage src="/placeholder-avatar.jpg" alt="Avatar" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium leading-none">John Doe</p>
                                <p className="text-sm text-muted-foreground">john@example.com</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="mt-2">
                        <div className="grid gap-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="phone" className="text-sm font-medium">
                                    Phone
                                </Label>
                                <p className="col-span-3 text-sm">+1 (555) 123-4567</p>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="Course" className="text-sm font-medium">
                                    Course
                                </Label>
                                <p className="col-span-3 text-sm font-semibold text-primary">Web and App Development</p>
                            </div>
                            <div className="grid grid-cols-4 items-start gap-4">
                                <Label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </Label>
                                <p className="col-span-3 text-sm text-muted-foreground">
                                    I'm excited to learn web and app development. I have some experience with HTML and CSS, and I'm looking to expand my skills to become a full-stack developer.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button
                            onClick={handleReject}
                            variant="outline"
                            className="w-[45%]"
                        >
                            Reject
                        </Button>
                        <Button
                            onClick={handleAccept}
                            className="w-[45%]"
                        >
                            Accept
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default CourseRequests

