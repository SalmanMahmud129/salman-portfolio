import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com';




function ContactSection() {
    const [loading, setLoading] = useState(false)

    const form = useRef()

    //state is only for determining if button is disabled. UseRef is for the emailsubmit
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    })

    const handleChange = (e) => {
        const {name, value } = e.target

        setFormData({...formData, [name]: value})
    }

    const isFormFilled = formData.name !== "" && formData.email !== "" && formData.message !== "";

    const handleSubmit = (e) =>{
        e.preventDefault()

        setLoading(true)

        emailjs.sendForm(
            'service_sbiymjy',
            'template_erjoilp',
            form.current,
            "rE4Kp25eDDw9xd_wd"
         )
         .then(() => {
            setLoading(false)
            alert("Thank you for reaching out! Your message has just been sent to my email. I will be in touch ASAP!")
            e.target.reset()
         }, (error) => {
            setLoading(false)

            console.log('error:', error)
            alert('Oops! An error occurred!')
         })

        console.log("submitted")
    }



  return (
    <section name='contact' className='w-full h-11/12 sm:p-16 bg-blue-300/10' >
        <div className="max-w-screen-2xl px-5 py-10 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} viewport={{once:true}} className="xs:pt-10 md:pt-0 mb-20" >
            <p className='xs:text-xl md:text-4xl font-medium inline border-b-4 border-blue-400'>Contact Me</p>
            <p className='mt-4 font-light xs:text-lg md:text-xl'>Open to any collaboration!</p>

        </motion.div>

        <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={{ duration: 2 }} viewport={{once:true}} className='items-center justify-center flex'>
            <form ref={form} onSubmit={handleSubmit} className='flex flex-col md:w-1/2 bg-gradient-to-b from-blue-400 to-blue-400/50 p-8 rounded-3xl'>
                <input type="text" name="user_name" value={formData.user_name} onChange={handleChange}   placeholder='Your Name' className='p-2 bg-transparent border-2 rounded-md focus:outline-none placeholder-black ' />

                <input type="text" name="user_email" value={formData.user_email} onChange={handleChange} placeholder='Email' className='p-2 my-8 bg-transparent border-2 rounded-md focus:outline-none placeholder-black' />

                <textarea name='message' rows="10" value={formData.message} onChange={handleChange}  placeholder='Enter Message...' className='p-2 bg-transparent border-2 rounded-md focus:outline-none placeholder-black'>

                </textarea>
                


                {isFormFilled ? 
                <button className='  bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mt-8 mx-auto flex items-center rounded-lg hover:scale-110 hover:bg-slate-200 hover:text-black duration-200'>
                    {loading ? "Sending..." : "Send Message"}
                </button> : 
                <button disabled className='disabled:opacity-50 bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mt-8 mx-auto flex items-center rounded-lg'>
                    {loading ? "Sending..." : "Send Message"}
                </button>}

                
                

            </form>
        </motion.div>
        </div>
    </section>
  )
}

export default ContactSection