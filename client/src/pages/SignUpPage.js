import React, { useState } from 'react'
import '../css/SignUpPage.css'

const SignUp = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [altEmail, setAltEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [dob, setDob] = useState('')
    const [sex, setSex] = useState('')
    const [kelurahan, setKelurahan] = useState('')
    const [Zipcode, setZipcode] = useState(0)
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState(0)
    const [image, setImage] = useState('')

    const onSubmitForm = (e) => {
        // e.preventDefault()
        console.log('working')

    }

    const changeUserName = (e) => {
        setUserName(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const changeAltEmail = (e) => {
        setAltEmail(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const changeFullName = (e) => {
        setFullName(e.target.value)
    }
    const changeDob = (e) => {
        setDob(e.target.value)
    }
    const changeSex = (e) => {
        setSex(e.target.value)
    }
    const changeKelurahan = (e) => {
        setKelurahan(e.target.value)
    }
    const changeZipcode = (e) => {
        setZipcode(e.target.value)
    }
    const changeAddress = (e) => {
        setAddress(e.target.value)
    }
    const changePhone = (e) => {
        setPhone(e.target.value)
    }
    const changeImage = (e) => {
        setImage(e.target.value)
    }

    return (
        <div className="SignUp-Container">
            <header>
                <h1 id="Main-Title" className="Title">Child Care</h1>
                <h3 className="Title">Gabung Sekarang!</h3>
            </header>
            <form className="SignUp-Form" onSubmit={ onSubmitForm() }>
                <label for="Form-Username">Username:</label>
                <input
                    className="Inputs"
                    value={userName}
                    onChange={changeUserName}
                    type="text"
                    name="Form-Username"
                    id="Form-Username"
                    placeholder="Contoh: username123"
                    pattern="[A-Za-z0-9]{5}"
                    title="username should be at least 4 or more, characters and numbers only with no space"
                    required
                />
                <label for="Form-Email">Email:</label>
                <input
                    className="Inputs"
                    type="text"
                    name="Form-Email"
                    id="Form-Email"
                    placeholder="Contoh: myemail123@mail.com"
                    pattern="(?=.*[.])(?=.*[@])(?=.*[A-Za-z]).{6,}"
                    title='email should be at least 6 or more, should contain "@" and "."'
                    required
                />
                <label for="Form-AltEmail">Email Cadangan:</label>
                <input
                    className="Inputs"
                    type="text"
                    name="Form-AltEmail"
                    id="Form-AltEmail"
                    placeholder="Contoh: myemail123@mail.com"
                    pattern="(?=.*[.])(?=.*[@])(?=.*[A-Za-z]).{6,}"
                    title='email should be at least 6 or more, should contain "@" and "."'
                />
                <label for="Form-Password">Password:</label>
                <input
                    className="Inputs"
                    type="password"
                    name="Form-Password"
                    id="Form-Password"
                    placeholder="Contoh: MyPass123"
                    pattern="(?=*[!@#$%^&*()_+=-?])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="password should be at least 8 or more, should contain at least a character and a number, symbols are optional"
                    required
                />
                <label for="Form-Fullname">Nama Lengkap:</label>
                <input
                    className="Inputs"
                    type="text"
                    name="Form-Fullname"
                    id="Form-Fullname"
                    placeholder="Contoh: My Full Name"
                    pattern="[A-Za-z\s]{1,}"
                    title="Full Name should be at least 1 or more, should contain at least a character"
                    required
                />
                <label for="Form-Dob">Tanggal Lahir:</label>
                <input
                    className="Inputs"
                    type="date"
                    name="Form-Dob"
                    id="Form-Dob"
                    // placeholder="contoh: My Full Name"
                    required
                />
                <label for="Form-Sex" >Pilih Jenis Kelamin:</label>
                <select name="Form-Sex" id="Form-Sex" className="Inputs" required>
                    <option value="Male">Laki-laki</option>
                    <option value="Female">Perempuan
                    </option>
                    <option value="Other">lain-lain</option>
                </select>
                <label for="Form-Kelurahan">Kelurahan:</label>
                <input
                    className="Inputs"
                    type="text"
                    name="Form-Kelurahan"
                    id="Form-Kelurahan"
                    placeholder="Contoh: Pondok Aren"
                    pattern="[A-Za-z\s]{1,}"
                    title="Kelurahan should be at least 1 or more, should contain at least a character"
                    required
                />
                <label for="Form-Zipcode">Kode Pos:</label>
                <input
                    className="Inputs"
                    type="text"
                    name="Form-Zipcode"
                    id="Form-Zipcode"
                    placeholder="Contoh: 15224"
                    pattern="[0-9]{5}"
                    title="Zipcode should be 5 digits, should contain numbers only"
                    required
                />
                <label for="Form-Address">Alamat:</label>
                <textarea id="Form-Address" name="Form-Address" className="Inputs" required></textarea>
                <label for="Form-Phone">Nomor Handphone:</label>
                <input
                    className="Inputs"
                    type="text"
                    name="Form-Phone"
                    id="Form-Phone"
                    placeholder="Contoh: 081234567890"
                    pattern="[0-9]{10,}"
                    title="Phone Number should be at least 10 digits, should contain numbers only"
                    required
                />
                <label for="Form-Image">Link Foto:</label>
                <input
                    className="Inputs"
                    type="text"
                    name="Form-Image"
                    id="Form-Image"
                    placeholder="Contoh: www.my-pict.com"
                    required
                />
                <button className="Submit-SignIn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUp