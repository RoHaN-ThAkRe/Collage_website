import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../Assets/next-icon.png'
import back_icon from '../../Assets/back-icon.png'
import user_1 from '../../Assets/user-1.png'
import user_2 from '../../Assets/user-2.png'
import user_3 from '../../Assets/user-3.png'
import user_4 from '../../Assets/user-4.png'

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt="" />
                <div>
                  <h3>Yesh Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, autem!
                Consectetur, rerum eligendi temporibus facere earum tenetur porro iure eaque
                quaerat enim unde consequatur perferendis id aliquid quod? Beatae, modi!</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt="" />
                <div>
                  <h3>Vikas Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, autem!
                Consectetur, rerum eligendi temporibus facere earum tenetur porro iure eaque
                quaerat enim unde consequatur perferendis id aliquid quod? Beatae, modi!</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt="" />
                <div>
                  <h3>Sourabh Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, autem!
                Consectetur, rerum eligendi temporibus facere earum tenetur porro iure eaque
                quaerat enim unde consequatur perferendis id aliquid quod? Beatae, modi!</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt="" />
                <div>
                  <h3>Neeraj Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, autem!
                Consectetur, rerum eligendi temporibus facere earum tenetur porro iure eaque
                quaerat enim unde consequatur perferendis id aliquid quod? Beatae, modi!</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials