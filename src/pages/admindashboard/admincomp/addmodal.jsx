/* eslint-disable react/prop-types */
import { AddCourseForm } from "@/components/AddCourseCard";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";

const AddModal = ({ activeTab, closeModal }) => {
    return (
        <Dialog open={true} onOpenChange={closeModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add {activeTab.slice(0, -1)}</DialogTitle>
                </DialogHeader>

                {/* Form */}
                <div className="space-y-4">
                    {activeTab === "teachers" && (
                        <>
                            <input
                                type="text"
                                placeholder="Teacher Name"
                                className="w-full px-4 py-2 border rounded"
                            />
                            <input
                                type="email"
                                placeholder="Teacher Email"
                                className="w-full px-4 py-2 border rounded"
                            />
                        </>
                    )}
                    {activeTab === "students" && (
                        <>
                            <input
                                type="text"
                                placeholder="Student Name"
                                className="w-full px-4 py-2 border rounded"
                            />
                            <input
                                type="email"
                                placeholder="Student Email"
                                className="w-full px-4 py-2 border rounded"
                            />
                        </>
                    )}
                    {activeTab === "courses" && (
                        
                          <AddCourseForm/>
                       
                    )}
                </div>

                {/* <DialogFooter>
                    <button
                        onClick={closeModal}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Add
                    </button>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    );
};

export default AddModal;
