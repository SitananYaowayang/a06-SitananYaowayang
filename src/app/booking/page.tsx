import DateReserve from "@/components/DateReserve";
import { MenuItem, Select, TextField } from "@mui/material";

export default function bookings(){
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Booking</div>
            <div className="text-md text-left text-gray-600">
            ชื่อและนามสกุลผู้จอง
            </div>
            <TextField variant="standard" name="Name-Lastname" label="Name-Lastname"></TextField>
            <div className="text-md text-left text-gray-600">
            หมายเลขติดต่อ
            </div>
            <TextField variant="standard" name=" Contact-Number" label="Contact-Number"></TextField>
            <div className="text-md text-left text-gray-600">
            ประเภท Venue
            </div>
            <Select variant="standard" id="value" className="h-[2em] w-[200px]">
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable"> The Grand Table</MenuItem>
            </Select>

            
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">
                วันที่ต้องกำรจัดงาน
                </div>
                <DateReserve/>

            </div>
            
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" name="Book Venue">
            Book Venue
            </button>
        </main>
    );
}