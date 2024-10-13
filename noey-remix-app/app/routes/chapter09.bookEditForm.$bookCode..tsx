import { useState, useEffect } from "react";
import { useNavigate, useParams } from "@remix-run/react";

export default function BookForm() {
    const navigate = useNavigate();
    const myParams = useParams();
    const bookCode = myParams.bookCode;
    const [bookData, setBookData] = useState({
        bookCode: '',
        bookTitle: '',
        bookDesc: '',
        bookCate: '',
    });
    const [categoryOption, setCategoryOption] = useState('');

    useEffect(() => {
        try {
            const fetchData = async () => {
                const data = await fetch(`http://localhost:3000/api/getOneBook/${bookCode}`);
                if (data.ok) {
                    const json = await data.json();
                    setBookData(json);
                    setCategoryOption(json.bookCate);
                    console.log(json);
                } else {
                    alert('Failed to loaded data.');
                }
            }

            // call the function
            fetchData().catch(console.error);
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while loading the data.');
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({
          ...bookData,
          [name]: value
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if(confirm('ยืนยันการแก้ไขข้อมูล?')){
        const form = e.target;
        const formData = new FormData(form);  
        const formJson = Object.fromEntries(formData.entries());
        // console.log(formJson);
        
        try {
            const response = await fetch('http://localhost:3000/api/updateBook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formJson),
            });
    
            if (response.ok) {
                const data = await response.json();
                alert('Form updatted successfully.');
                navigate('/chapter09/bookLists');
            } else {
                alert('Failed to update form.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while updatting the form');
        }
        return true;
      }
    }

    //-- Form Components --

    return(
        <div className="m-3">
            <h1 className="font-bold">เพิ่มหนังสือใหม่</h1>
            <form method="post" onSubmit={handleSubmit}>
            <input type="hidden" value={bookData.bookCode} name="bookCode" />
            <label >ชื่อหนังสือ</label>:<br />
            <input type="text" name="bookTitle" id="bookTitlr" onChange={handleChange} value={bookData.bookTitle} required /><br />
            <label>รายละเอียดหนังสือ</label>:<br />
            <textarea rows={3} cols={50} name="bookDesc" id="bookDesc" onChange={handleChange} value={bookData.bookDesc}/><br />
            <label>หมวดหมู่</label>:<br />
            <select name="bookCate" id="bookCate" onChange={handleChange} value={bookData.bookCate} required>
                <option value="">-เลือกหมวดหมู่-</option>
                <option value={10}>เทคโนโลยี</option>
                <option value={20}>คอมพิวเตอร์</option>
                <option value={30}>ทั่วไป</option>
            </select><br />
            <div className="p-3">
                <input type="submit" value="Submit" />
                <input type="reset" value="Clear" /> 
            </div>
            </form>
        </div>
    );

}