import {useState, useEffect} from 'react';


export default function MyProfile(){
    const [data,setData]= useState({
        fname: 'Siriyakorn',
        lname: 'Songsalee',
         email : 'Siriyakorn.son@rmutto.ac.th',
         major :'เทคโนโลยีสารสนเทศ'
    });

    const [loading,setLoading]= useState(true);

    useEffect(()=>{
        const fetchData =async()=>{const myProf = await fetch('http://localhost:3000/api/getProfile');
            if(myProf.ok){
                const result = await myProf.json();
                setData(result);
                setLoading(false);
            }else{
                alert('Error:Call getProfile api.');
            }
        
        };
        fetchData();
    },[]);

    if(loading) return <p className= 'm-4 p-4 '>Loading...</p>;

    return (
        <div className='m-4 p-4 '>
            <h1>โปรไฟล์ของฉัน</h1>
            {/*JSON.stringify(data,null,2)*/}
           ชื่อ-นามสกุล: {data.fname} {data.lname}
           <h1></h1>
           อีเมล:{data.email}
           <h1></h1>
           สาขา:{data.major}
        </div>
    )
}