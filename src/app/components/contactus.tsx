'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';


interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  subscribe:boolean;
}



const ContactForm: React.FC = () => {
  const initialFormData: FormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    subscribe: true,
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [message, setMessage] = useState<number>(0);



  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      setMessage(3)
      const response = await fetch('/api/contact-asadullah', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage(1);
        setFormData(initialFormData);
      } else {
        setMessage(2);
      }
    } catch (error) {
      console.error('Error occurred during form submission:', error);
    }
  };

  return (
    <form className='comp-width px-4 pb-7 pt-7 bg-accent1 rounded-2xl mb-7 border-accent2 border-[1px] sm:px-6' onSubmit={handleSubmit} >
      <p className={`block w-full rounded-md text-xs pl-2 font-semibold text-[var(--blue-btn)] ${message==1 ? '': 'hidden'}`}>Form submitted successfully &#10003;</p>
      <p className={`block w-full rounded-md text-xs pl-2 font-semibold text-[#ff0000] ${message==2 ? '':'hidden'} `}>Error occurred during form submission !!!</p>
      <div>
        <label className='text-v1 block w-full rounded-md pl-2 pt-6' htmlFor="name">Name</label>
        <input className={`block w-full rounded-md mb-4 px-2 h-7 disabled:dim-fltr bg-accent2 text-v1 autofill:text-v1 `}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={message==3?true:false}
        />
      </div>
      <div>
        <label className='text-v1 block w-full rounded-md pl-2' htmlFor="email">Email</label>
        <input className={`block w-full rounded-md mb-4 px-2 h-7 disabled:dim-fltr bg-accent2 text-v1 autofill:text-v1 `}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={message==3?true:false}
        />
      </div>
      <div>
        <label className='text-v1 block w-full rounded-md pl-2' htmlFor="phone">Phone <span className='text-cb1 font-light'>(optional)</span></label>
        <input className={`block w-full rounded-md mb-4 px-2 h-7 disabled:dim-fltr bg-accent2 text-v1 autofill:text-v1 `}
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          disabled={message==3?true:false}
        />
      </div>
      <div>
        <label className='text-v1 block w-full rounded-md pl-2 ' htmlFor="message">Message <span className='text-cb1 font-light'>(optional)</span></label>
        <textarea className={`block w-full rounded-md px-2 py-2 h-9 disabled:dim-fltr bg-accent2 text-v1 autofill:text-v1 `}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={message==3?true:false}
        />
      </div>
      <div className='my-4 px-1 flex items-center'>
        <input className='w-[20px] h-[20px]' type="checkbox"
        id="subscribe"
        name="subscribe"
        checked={formData.subscribe}
        onChange={()=>{setFormData({ ...formData, subscribe: !formData.subscribe });console.log(formData)}}
        disabled={message==3?true:false}
        />
        <label className='mx-2 text-accent5 text-v1'>Subscribe to news letter</label>
      </div>
      <button className={`inline w-full rounded-full text-v1 text-white bg-[var(--blue-btn)] h-7 flex justify-center items-center`} type="submit">{message==3?"Submiting":'Submit'} <div className={`w-4 h-4 ml-2 inline-block ${message==3?"loader":'hidden'}`}/></button>
    </form>
  );
};

export default ContactForm;
