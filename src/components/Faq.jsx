import React from 'react'
import BluePhoneIcon from '../assets/images project/call-icon.svg'
import MessageIcon from '../assets/images project/message-icon.svg'

const Faq = () => {
  return (
    <section aria-label="Read more about how to contact us, and other questions" id="faq">
    <div className="container">

     <div className="text">
       <h2> Any questions? Check out the FAQs</h2>
       <p>Still have unanswered questions and need to get in touch?</p>
     </div>
     <div className="contact-1">
       <i className="contact-icon"><img src={BluePhoneIcon} alt="blue phone icon" /></i>
       <p>Still have questions?</p>
       <a id="Contact us" href="#" aria-label="come in contact by calling us" className="">
         <span>Contact us</span>
         <i id="arrow" className="fa-light fa-arrow-right"></i>
        </a>

     </div>
     <div className="contact-2">
       <i className="contact-icon"><img src={MessageIcon} alt="green message icon" /></i>
       <p>Don't like phone calls?</p>
       <a id="Contact us" href="#" aria-label=" come in contact by message us" className="text-details">
         <span>Contact us</span>
         <i id="arrow" className="fa-light fa-arrow-right"></i>
        </a>

     </div>  

     <div className="list">

       <ul id="accordion">
         <li>
           <label htmlFor="first">Is any of my personal information stored in the App? <span className="btn-circle"><i className="fa-solid fa-chevron-down"></i></span></label>
           <input type="radio" name="accordion" id="first" />
           <div className="content">
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, rerum eligendi maxime sed quia numquamipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, rerum eligendi maxime sed quia numquam.</p>
           </div>
         </li>

         <li>
           <label htmlFor="second">What formats can I download my transaction history in?<span className="btn-circle"><i className="fa-solid fa-chevron-down"></i></span></label>
           <input type="radio" name="accordion" id="second" />
           <div className="content">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi placeat est vero beatae natus veniam maiores, laboriosam voluptatum eos.</p>
           </div>
         </li>

         <li>
           <label htmlFor="third">Can I schedule future transfers?<span className="btn-circle"><i className="fa-solid fa-chevron-down"></i></span></label>
           <input type="radio" name="accordion" id="third"  />
           <div className="content">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore, provident aut quam dolores perspiciatis voluptatibus vel quod expedita vitae repellat harum molestias assumenda sequi, quasi debitis pariatur! Nulla impedit adipisci nisi dolor saepe debitis soluta molestias rerum voluptas, aspernatur ipsam nam dignissimos iure at aut iste, beatae laboriosam quia accusamus consectetur reiciendis, ex.</p>
           </div>
         </li>

         <li>
           <label htmlFor="fourth">When can I use Banking App services?<span className="btn-circle"><i className="fa-solid fa-chevron-down"></i></span></label>
           <input type="radio" name="accordion" id="fourth" />
           <div className="content">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore, provident aut quam dolores perspiciatis voluptatibus vel quod expedita vitae repellat harum molestias assumenda sequi, quasi debitis pariatur! Nulla impedit adipisci nisi dolor saepe debitis soluta molestias rerum voluptas, aspernatur ipsam nam dignissimos iure at aut iste, beatae laboriosam quia accusamus consectetur reiciendis, ex voluptate blanditiis.</p>
           </div>
         </li>


         <li>
           <label htmlFor="fifth">Can I create my own password that is easy for me to remember?<span className="btn-circle"><i className="fa-solid fa-chevron-down"></i></span></label>
           <input type="radio" name="accordion" id="fifth" />
           <div className="content">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore, provident aut quam dolores perspiciatis voluptatibus expedita vitae repellat harum molestias assumenda adipisci nisi dolor saepe debitis soluta molestias rerum voluptas, aspernatur ipsam nam dignissimos iure at aut iste, beatae laboriosam quia accusamus consectetur reiciendis, ex voluptate blanditiis.</p>
           </div>
         </li>

         <li>
           <label htmlFor="sixth">What happens if I forget or lose my password?<span className="btn-circle"><i className="fa-solid fa-chevron-down"></i></span></label>
           <input type="radio" name="accordion" id="sixth" />
           <div className="content" >
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore, provident aut quam dolores perspiciatis voluptatibus vel quod expedita vitae repellat harum molestias assumenda sequi, quasi debitis pariatur! Nulla impedit adipisci nisi dolor saepe debitis soluta molestias rerum voluptas, aspernatur ipsam nam dignissimos iure at aut iste, beatae.</p>
           </div>
         </li>

       
       </ul>

     </div>


    </div>
 </section>
  )
}

export default Faq