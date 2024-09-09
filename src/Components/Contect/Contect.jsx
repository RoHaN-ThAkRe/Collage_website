import React from 'react'
import './Contect.css'
import msg_icon from '../../Assets/msg-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'
import white_arrow from '../../Assets/white-arrow.png'

const Contect = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "23319427-194d-469e-b3a0-bf08954b5cf9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };




    return (
        <div className='contect'>
            <div className="contect-col">
                <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, officia temporibus.
                    Animi excepturi expedita iusto, fuga unde porro est nemo exercitationem ipsam voluptatum
                    inventore libero fugit pariatur, corrupti tenetur ex.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />thakrerohan301@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+91 7389677259</li>
                    <li> <img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br />MA 02139, united States</li>
                </ul>
            </div>
            <div className="contect-col">
                <form onSubmit={onSubmit}>
                    <label >Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required />
                    <label >Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your Mobile Number' required />
                    <label >Write your Message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your Message...' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
            
        </div>
    )
}

export default Contect