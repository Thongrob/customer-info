import {useState, useEffect} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

function InsertInfo() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const dataSet = {
        firstname : fname ,
        lastname : lname,
        email : email,
        phone : phone
    }


    const submit = (e) => {
        //ให้ค่าใน form คงอยู่หลังจากกด submit form
        e.preventDefault();
       
            
        if (fname == '' || fname == null) {
            document.getElementById('firstName').style.borderColor = "red";
            alert("กรุณากรอกชื่อ")
        } else if (lname == '' || fname == null) {
            document.getElementById('lasttName').style.borderColor = "red";
            alert("กรุณากรอกนามสกุล")   
        } else if (email == '' || fname == null) {
            document.getElementById('email').style.borderColor = "red";
            alert("กรุณากรอกอีเมล")   
        } else if (phone == ''|| phone == null) {
            document.getElementById('phone').style.borderColor = "red";
            alert("กรุณากรอกเบอร์โทร")
        } else {
            
            document.getElementById('firstName').style.borderColor = "rgba(70, 90, 126, 0.3)";
            document.getElementById('lasttName').style.borderColor = "rgba(70, 90, 126, 0.3)";
            document.getElementById('email').style.borderColor = "rgba(70, 90, 126, 0.3)";
            document.getElementById('phone').style.borderColor = "rgba(70, 90, 126, 0.3)";
            // ทดสอบ
            console.log(dataSet)
            // Swal.fire('แจ้งเตือน','บันทึกข้อมูลเรียบร้อย','success')
            
            // axios
            //     .post(`http://localhost:3000/insert`, dataSet)
            //     .then( responce => {
            //         // alert("บันทึกข้อมูลเรียบร้อย");
            //         Swal.fire('แจ้งเตือน','บันทึกข้อมูลเรียบร้อย','success')
            //         // console.log(responce)
            //     })
            //     .catch( err => {
            //         Swal.fire('แจ้งเตือน',err.response.data.error,'error')
            //     })
            
        }   

        //Validation 2 lower case and 2 uper case
        function HasMixedCase(passwd){
            if(passwd.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))
                return true;
            else
                return false;
        }

    }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center">

                    <div className="col-lg-8 col-md-8 col-sm-12 mt-3">
                    <h2>ข้อมูลลูกค้า</h2>    
                    <form className="" onSubmit={submit}>
                        <label className="form-label">Fisrt Name :</label>
                        <input type="text" className="form-control" id="firstName" placeholder="ชื่อ" onChange={e => setFname(e.target.value)} value={fname}/>

                        <label className="form-label">Last Name :</label>
                        <input type="text" className="form-control" id="lasttName" placeholder="นามสกุล" onChange={e => setLname(e.target.value)} value={lname}/>

                        <label className="form-label">Email :</label>
                        <input type="email" className="form-control" id="email" placeholder="อีเมล" onChange={e => setEmail(e.target.value)} value ={email}/>

                        <label className="form-label">Phone :</label>
                        <input type="text" className="form-control" id="phone" placeholder="เบอร์โทร" onChange={e => setPhone(e.target.value)} value= {phone}/>

                        <button type="submit" className="btn btn-primary w-100 my-3">บันทึก</button>
                    </form>
                    </div>
                    
                </div>
                
            </div>
        </div> 
    </>
  )
}

export default InsertInfo