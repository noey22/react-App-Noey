import { useState } from "react";
import { useNavigate } from "@remix-run/react";

export default function BookFrom(){
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        //-- 1 --
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("http://localhost:3000/api/bookInsert",
            {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if(response.ok){
                const data = await response.json();
                alert(`[INFO] ${data.message}`);
                navigate('./chapter09/bookLists');

            }else{
                alert('[ERR] บันทึกข้อมูลหนังสือไม่สำเร็จ');

            }

        }catch (eror) {
            alert('[ERR] มีข้อผิดพลาดเกิดขึ้นในระหว่าง Submit form. ')

        }

    }

    return (
        <div className="m-3">
            <h1 className="font-bold">เพิ่มหนังสือใหม่</h1>
            <form method="POST" onSubmit={handleSubmit}>
                <label className="m-2">ชื่อหนังสือ</label><br />
                <input type="text" name="bookTitle" id="bookTitel" required /><br />
                <label className="m-2">รายละเอียด</label><br />
                <textarea rows={3} cols={50} name="bookDesc" /><br />
                <label>หมวดหมู่</label>:<br />
                <select name="bookCate" id="bookCate" required>
                    <option value="">-เลือกหมวดหมู่-</option>
                    <option value="10">เทคโนโลยี</option>
                    <option value="20">คอมพิวเตอร์</option>
                    <option value="30">ทั่วไป</option>
                </select><br />
                <div className="p-3">
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Clear" /> 
                    
                    {/*<button type="submit" value="Submit"></button>
                    <button type="reset" value="Clear"></button>*/}
                </div>
            </form>
        </div>
    );
}