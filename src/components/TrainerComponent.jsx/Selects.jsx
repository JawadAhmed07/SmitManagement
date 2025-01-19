import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function Selects() {
//   const [student, setStudent] = useState('');
//   const [classFilter, setClassFilter] = useState('');
//   const [subject, setSubject] = useState('');
  const [batch, setBatch] = useState('');
  const [course, setCourse] = useState('');
  const [timing, setTiming] = useState('');

  return (
    <div className="flex flex-wrap space-x-4 pb-5">
      {/* Student Selector */}
      {/* <Select value={student} onValueChange={setStudent}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Student" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Students</SelectItem>
          <SelectItem value="alice">Alice Johnson</SelectItem>
          <SelectItem value="bob">Bob Smith</SelectItem>
          <SelectItem value="charlie">Charlie Brown</SelectItem>
        </SelectContent>
      </Select> */}

    

      {/* Batch Selector */}
      <Select value={batch} onValueChange={setBatch}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Batch" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="batch1">Batch 1</SelectItem>
          <SelectItem value="batch2">Batch 2</SelectItem>
          <SelectItem value="batch3">Batch 3</SelectItem>
        </SelectContent>
      </Select>

      {/* Course Selector */}
      <Select value={course} onValueChange={setCourse}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Course" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="intro">Introduction to Programming</SelectItem>
          <SelectItem value="react">React Advanced</SelectItem>
          <SelectItem value="python">Python for Data Science</SelectItem>
        </SelectContent>
      </Select>

      {/* Timing Selector */}
      <Select value={timing} onValueChange={setTiming}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Timing" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="morning">9:00 AM - 11:00 AM</SelectItem>
          <SelectItem value="afternoon">12:00 PM - 2:00 PM</SelectItem>
          <SelectItem value="evening">3:00 PM - 5:00 PM</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Selects;
