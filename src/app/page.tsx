'use client'
import ThemeBtn from './components/theme-btn.tsx'
//import Loader from './components/loader.tsx'
import CopyButton from './components/copyButton.tsx'
import { DevxioLogo, FbLogo,LinkedinLogo, GmailLogo, WhatsappLogo, GithubLogo, Badge } from './svgs.tsx'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ContactForm from './components/contactus.tsx'


export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [scrollAtTop, setScrollAtTop] = useState<boolean>(true);
  
  // useEffect(() => {
  //   const handleLoad = () => {
  //     setLoading(false);
  //     console.log('loaded');
  //   };
  
  //   if (document.readyState === 'complete') {
  //     // If the document is already loaded, trigger handleLoad immediately
  //     handleLoad();
  //   } else {
  //     // Listen for the "load" event
  //     window.addEventListener('load', handleLoad);
  //   }
  
  //   return () => {
  //     // Cleanup: Remove the event listener
  //     window.removeEventListener('load', handleLoad);
  //   };
  // }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollAtTop(scrollPosition === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = [
    "JavaScript",
    "React JS",
    "Next JS",
    "MongoDB",
    "Tailwind",
    "Node JS",
    "Express JS",
    "Git",
    "Serverless",
    "Python",
    "SQL",
    "Django",
    "Microservices",
    "Cloud Native",
    "Docker",
    "Kubernetes",
    "Flask",
    "3JS",
    "IBM Cloud"
  ];
  
  return (
    <>
    <main className={`text-foreground `}>
      <div id="learnmore" className={`min-w-[320px] mx-[auto]`}>
        <div  className={`mobile-wrapper max-w-full h-8 flex justify-between sticky z-20 top-0 ${scrollAtTop ? '' : 'glass border-b-[1px]'} border-[#00000017] dark:border-[#ffffff17] `}>
          <div className='w-full flex justify-between items-center '>
            <DevxioLogo/>
            <ThemeBtn/>
          </div>
        </div>
        <div className='px-5 xsm:px-6 sm:px-7 md:px-9 pt-7 xsm:pt-8 sm:pt-9 w-full max-w-[1000px] mx-auto'>
          <h1 className='mk-heading text-[30px] xsm:text-[36px] sm:text-[40px] md:text-[48px] text-center text-accent7'>
            Muhammad Asadullah<br/><span className=''> Full Stack Developer</span>
          </h1>
        </div>
        <div className='px-5 xsm:px-6 sm:px-7 md:px-9 mt-8 md:mt-9 w-full max-w-[1000px] mx-auto'>
          <div className='mk-shadow1 rounded-xl p-4 md:px-6 md:py-4  sm:flex'>
            <div className='rounded-full p-3 flex items-center justify-center'>
              <img className='rounded-full border-[3px] border-solid border-[var(--accent1)] sm:w-[900px]' src="/assets/asadullah.webp" alt="Display Picture: Muhammad Asadullah, Full Stack Software Developer (MERN)"/>
            </div>
            <div>
              <div className='mt-5 mb-2 '>
                <h1 className='mk-heading2 mr-1 inline leading-0 xsm:text-[24px]'>
                  Muhammad Asadullah
                </h1>
              </div>
              <p className='mk-p'>
                Greetings! <br/>
                As a junior Full Stack Software Developer specializing in MERN stack and Next JS, 
                I excel in crafting precise web applications. With additional know how of cloud-native technologies,
                 Docker, Kubernetes, and Django, coupled with a proactive learning attitude,
                  I bring a versatile skill set and keen adaptability
                   to drive impactful contributions to your team&#39;s success.
              </p>
              <div className='mt-5 mb-2 '>
                <a className='px-1' href='http://wa.me/923111678546' target='_blank'><WhatsappLogo/></a> 
                <a className='px-1' href='mailto:joinasadullah1@gmail.com' target='_blank'><GmailLogo/></a>
                <a className='pr-1' href='https://github.com/JoinAsadullah' target='_blank'><GithubLogo/></a>
                <a className='px-1' href='https://www.linkedin.com/in/joinasadullah/' target='_blank'><LinkedinLogo/></a>
                <a className='px-1' href='/cv' target='_blank'><button className=' w-[45px] h-[45px] bg-accent1 rounded-full' >CV</button></a>
              </div>
            </div>
          </div>
        </div>
        <div className='px-5 xsm:px-6 sm:px-7 md:px-9 mt-8 w-full max-w-[1000px] mx-auto'>
          <h3 className='font-semibold text-center text-[18px] mb-4'>
            Certifications
          </h3>
          <div className='mk-shadow1 rounded-xl p-4 md:px-6 md:py-5 '>
            <div className='mb-6 mt-4'>
              <a href='https://www.credly.com/badges/f178c2f6-a701-4d2d-b111-370f03d668d3/public_url' target='_blank' className='flex'>
                  <div className='flex items-center '>
                      <Image className='w-[100px]' src="/assets/full-stack.png" alt="IBM Full Stack Software Developer Badge" width={200} height={200} />
                  </div>
                  <div className='ml-2'>
                    <h4 className='text-[16px] font-semibold leading-tight mb-1'>
                      IBM Full Stack Software Developer Professional
                    </h4>
                    <div>
                      <Image className='inline mb-[2px] mr-[2px] ' src="/assets/check-verified-02.png" alt="" width={15} height={15} />
                      <h4 className='text-[13px] font-light inline text-[var(--accent5)]'>
                        Click to verify
                      </h4>
                      <h4 className='text-[13px] font-light text-[var(foreground)] mt-1'>
                      Provider: Coursera<br/>
                      Issued: August 2023
                      </h4>
                    </div>
                  </div>
              </a>
            </div>
            <div className='h-[1px] border-solid border-[var(--accent2)] border-[1px]' />
            <div className='mt-6 mb-6'>
              <a href='https://www.credly.com/badges/68ecd291-1fca-4846-9ed2-3a5e51e71af4/public_url' target='_blank' className='flex'>
                  <div className='flex items-center '>
                      <Image className='w-[100px]' src="/assets/ibm-key-technology.png" alt="IBM key technologies for business Badge" width={200} height={200} />
                  </div>
                  <div className='ml-2'>
                    <h4 className='text-[16px] font-semibold leading-tight mb-1'>
                      IBM Key Technology Foundations
                    </h4>
                    <div>
                      <Image className='inline mb-[2px] mr-[2px] ' src="/assets/check-verified-02.png" alt="" width={15} height={15} />
                      <h4 className='text-[13px] font-light inline text-[var(--accent5)]'>
                        Click to verify
                      </h4>
                      <h4 className='text-[13px] font-light text-[var(foreground)] mt-1'>
                      Provider: coursera<br/>
                      Issued: September 2023
                      </h4>
                    </div>
                  </div>
              </a>
            </div>  
            <div className='h-[1px] border-solid border-[var(--accent2)] border-[1px]' />
            <div className='mt-6 mb-6'>
              <a href='https://www.credly.com/badges/75c9da11-365e-4be8-b993-5ec9b5e2370e/public_url' target='_blank' className='flex'>
                  <div className='flex items-center '>
                      <Image className='w-[100px]' src="/assets/design-thinking.png" alt="IBM Design thinking practitioner Badge" width={200} height={200} />
                  </div>
                  <div className='ml-2'>
                    <h4 className='text-[16px] font-semibold leading-tight mb-1'>
                      IBM Design Thinking Practitioner
                    </h4>
                    <div>
                      <Image className='inline mb-[2px] mr-[2px] ' src="/assets/check-verified-02.png" alt="" width={15} height={15} />
                      <h4 className='text-[13px] font-light inline text-[var(--accent5)]'>
                        Click to verify
                      </h4>
                      <h4 className='text-[13px] font-light text-[var(foreground)] mt-1'>
                      Provider: coursera<br/>
                      Issued: August 2023
                      </h4>
                    </div>
                  </div>
              </a>
            </div>
            <div className='h-[1px] border-solid border-[var(--accent2)] border-[1px]' />
            <div className='mt-6 mb-6'>
              <a href='https://www.credly.com/badges/24114c57-01c8-4c8f-a192-6e43171e6d14/public_url' target='_blank' className='flex'>
                  <div className='flex items-center '>
                      <Image className='w-[100px]' src="/assets/emerging-tech.png" alt="IBM Explore Emerging Tech Badge" width={200} height={200} />
                  </div>
                  <div className='ml-2'>
                    <h4 className='text-[16px] font-semibold leading-tight mb-1'>
                      IBM Explore Emerging Tech
                    </h4>
                    <div>
                      <Image className='inline mb-[2px] mr-[2px] ' src="/assets/check-verified-02.png" alt="" width={15} height={15} />
                      <h4 className='text-[13px] font-light inline text-[var(--accent5)]'>
                        Click to verify
                      </h4>
                      <h4 className='text-[13px] font-light text-[var(foreground)] mt-1'>
                      Provider: Coursera<br/>
                      Issued: August 2023
                      </h4>
                    </div>
                  </div>
              </a>
            </div>  
            <div className='h-[1px] border-solid border-[var(--accent2)] border-[1px]' />
            <div className='mt-6 mb-6'>
              <a href='https://www.credly.com/badges/aa841e8a-4793-40c2-b3f1-cc2813f51e5e/public_url' target='_blank' className='flex'>
                  <div className='flex items-center '>
                      <Image className='w-[100px]' src="/assets/nse.png" alt="Fortinet nse1 badge" width={200} height={200} />
                  </div>
                  <div className='ml-2'>
                    <h4 className='text-[16px] font-semibold leading-tight mb-1'>
                      Fortinet Introduction to threat landscape 1.0
                    </h4>
                    <div>
                      <Image className='inline mb-[2px] mr-[2px] ' src="/assets/check-verified-02.png" alt="" width={15} height={15} />
                      <h4 className='text-[13px] font-light inline text-[var(--accent5)]'>
                        Click to verify
                      </h4>
                      <h4 className='text-[13px] font-light text-[var(foreground)] mt-1'>
                      Provider: Hubspot<br/>
                      Issued: August 2023 - Expires: September 2024
                      </h4>
                    </div>
                  </div>
              </a>
            </div>  
          </div>
        </div>
        <div className='px-5 xsm:px-6 sm:px-7 md:px-9 mt-8 w-full max-w-[1000px] mx-auto'>
          <h3 className='font-semibold text-center text-[18px] mb-4'>
            Skills
          </h3>
            <div className=' flex flex-wrap mk-shadow1 rounded-xl p-3 md:px-5 md:py-5 mb-3'>
              {skills.map((skill, index) => (
                <ul key={index} className=' pb-1 mb-2 px-2 mr-1 inline border-solid border-accent2 bg-accent2 border-[2px] rounded-full my-1 grow text-center'>
                  <li className='text-[12px]  font-normal inline'>
                    {skill}
                  </li>
                  <Image className='inline dark:invert mt-[3px]' src="/assets/badge1.webp" alt="" width={10} height={10} />
                </ul>
              ))}
            </div>
        </div>
        <div className='px-5 xsm:px-6 sm:px-7 md:px-9 mt-8 w-full max-w-[1000px] mx-auto'>
          <h3 className='font-semibold text-center text-[18px] mb-4'>
            Education
          </h3>
            <div className=' flex flex-wrap mk-shadow1 rounded-xl p-3 md:px-5 md:py-5 mb-3'>
            <div className='my-4'>
              <span className='flex'>
                  <div className='flex items-center '>
                      <Badge />
                  </div>
                  <div className='ml-2'>
                    <h4 className='text-[16px] font-semibold leading-tight mb-1'>
                      BS Computer Science - The Islamia University of Bahawalpur
                    </h4>
                    <div>
                      <h4 className='text-[13px] font-light inline text-[var(--accent5)]'>
                        7th Semester
                      </h4>
                      <h4 className='text-[13px] font-light text-[var(foreground)] mt-1'>
                      Session: 2021-25
                      </h4>
                    </div>
                  </div>
              </span>
            </div>
            </div>
        </div>
        <div className='px-5 xsm:px-6 sm:px-7 md:px-9 mt-8 w-full max-w-[1000px] mx-auto'>
          <h3 className='font-semibold text-center text-[18px] mb-4'>
            Projects
          </h3>
          <div className=' flex flex-wrap mk-shadow1 rounded-xl mb-3'>
            <div className='w-full aspect-[2.2] relative truncate
            '>
              <img src='/assets/budget-app.png' alt='react budget website screenshot' className='absolute top-0 w-full top-bdr p-[10px] object-cover top-0 -dark:drken'/>
            </div>
            <div className=' bottom-bdr bg-accent2 py-2 w-full m-[10px] mt-0'>
              <p className='w-full mx-[auto] text-v1 text-center p-4 p-[10px]'>
                React budget app
              </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/ejtos-react_budget_app' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://ejtos-react-budget-app-three.vercel.app/' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
          <div className=' flex flex-wrap mk-shadow1 rounded-xl mb-3'>
            <div className='w-full aspect-[2.2] relative truncate
            '>
              <img src='/assets/financial-dashboard.png' alt='next js financial dashboard website screenshot' className='absolute top-0 w-full top-bdr p-[10px] object-cover top-0 -dark:drken'/>
            </div>
            <div className=' bottom-bdr bg-accent2 py-2 w-full m-[10px] mt-0'>
              <p className='w-full mx-[auto] text-v1 text-center p-4 p-[10px]'>
                Next JS financial dashboard
              </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/financial-dashboard-learn-nextjs' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://financial-dashboard-learn-nextjs.vercel.app/' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
          <div className=' flex flex-wrap mk-shadow1 rounded-xl mb-3'>
            <div className='w-full aspect-[2.2] relative truncate
            '>
              <img src='/assets/portfolio1.png' alt='portfolio website screenshot' className='absolute top-0 w-full top-bdr p-[10px] object-cover top-0 -dark:drken'/>
            </div>
            <div className=' bottom-bdr bg-accent2 py-2 w-full m-[10px] mt-0'>
              <p className='w-full mx-[auto] text-v1 text-center p-4 p-[10px]'>
                Portfolio Website
              </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/my-portfolio' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://my-portfolio-dsev.vercel.app/' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
          <div className=' flex flex-wrap mk-shadow1 rounded-xl mb-3'>
            <div className='w-full aspect-[2.2] relative truncate
            '>
              <img src='/assets/earth.png' alt='3d earth website screenshot' className='absolute top-0 w-full top-bdr p-[10px] object-cover top-0 -dark:drken'/>
            </div>
            <div className=' bottom-bdr bg-accent2 py-2 w-full m-[10px] mt-0'>
              <p className='w-full mx-[auto] text-v1 text-center p-4 p-[10px]'>
                Earth 3D
              </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/my-portfolio' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://my-portfolio-dsev.vercel.app/earth' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
          <div className=' flex flex-wrap mk-shadow1 rounded-xl mb-3'>
            <div className='w-full aspect-[2.2] relative truncate
            '>
              <img src='/assets/portfolio2.png' alt='portfolio website screenshot' className='absolute top-0 w-full top-bdr p-[10px] object-cover top-0 -dark:drken'/>
            </div>
            <div className=' bottom-bdr bg-accent2 py-2 w-full m-[10px] mt-0'>
              <p className='w-full mx-[auto] text-v1 text-center p-4 p-[10px]'>
                Portfolio Website with 3D Particle System
              </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/Devxio-001' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://devxio-001.vercel.app/' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
          <div className=' flex flex-wrap mk-shadow1 rounded-xl mb-3'>
            <div className='w-full aspect-[2.2] relative truncate
            '>
              <img src='/assets/portfolio3.png' alt='portfolio website screenshot' className='absolute top-0 w-full top-bdr p-[10px] object-cover top-0 -dark:drken'/>
            </div>
            <div className=' bottom-bdr bg-accent2 py-2 w-full m-[10px] mt-0'>
              <p className='w-full mx-[auto] text-v1 text-center p-4 p-[10px]'>
                Portfolio Website with 3D Model
              </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/asadullah-portfolio' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://joinasadullah.github.io/asadullah-portfolio/' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
          <div className=' flex flex-wrap mk-shadow1 rounded-xl mb-3'>
            <div className='w-full aspect-[2.2] relative truncate
            '>
              <img src='/assets/calculator.png' alt='calculator website screenshot' className='absolute top-0 w-full top-bdr p-[10px] object-cover top-0 -dark:drken'/>
            </div>
            <div className=' bottom-bdr bg-accent2 py-2 w-full m-[10px] mt-0'>
              <p className='w-full mx-[auto] text-v1 text-center p-4 p-[10px]'>
                Calculator HTML CSS JS
              </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/calculator' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://joinasadullah.github.io/calculator/' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
          <div className=' flex flex-wrap mk-shadow1 rounded-xl mb-3'>
            <div className='w-full aspect-[2.2] relative truncate
            '>
              <img src='/assets/fa.webp' alt='focus academy website screenshot' className='absolute top-0 w-full top-bdr p-[10px] object-cover top-0 -dark:drken'/>
            </div>
            <div className=' bottom-bdr bg-accent2 py-2 w-full m-[10px] mt-0'>
              <p className='w-full mx-[auto] text-v1 text-center p-4 p-[10px]'>
                Focus Academy Website
              </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/focusacademy' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://joinasadullah.github.io/focusacademy/' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
          <div className=' flex flex-wrap mk-shadow1 rounded-xl mb-3'>
            <div className='w-full aspect-[2.2] relative truncate
            '>
              <img src='/assets/bk.webp' alt='Client website screenshot' className='absolute top-0 w-full top-bdr p-[10px] object-cover top-0 -dark:drken'/>
            </div>
            <div className=' bottom-bdr bg-accent2 py-2 w-full m-[10px] mt-0'>
              <p className='w-full mx-[auto] text-v1 text-center p-4 p-[10px]'>
                Client Website HTML CSS JS
              </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/bika' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://joinasadullah.github.io/bika/' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
          <div className=' flex flex-wrap mk-shadow1 rounded-xl mb-3'>
            <div className='w-full aspect-[2.2] relative truncate
            '>
              <img src='/assets/template-web.png' alt='template website screenshot' className='absolute top-0 w-full top-bdr p-[10px] object-cover top-0 -dark:drken'/>
            </div>
            <div className=' bottom-bdr bg-accent2 py-2 w-full m-[10px] mt-0'>
              <p className='w-full mx-[auto] text-v1 text-center p-4 p-[10px]'>
                Design to HTML CSS JS
              </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/templateweb' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://joinasadullah.github.io/templateweb/' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className='px-5 xsm:px-6 sm:px-7 md:px-9 mt-8 w-full max-w-[1000px] mx-auto'>
          <h3 className='font-semibold text-center text-[18px] mb-4'>
            Contact
          </h3>
            <div className='mb-10 md:flex gap-3'>
              <div className='order-2 basis-1/2'>
                <div className='flex justify-between mk-shadow1 rounded-xl p-4 md:px-6 md:py-5 mb-3'>
                  <a className='truncate basis-4/5' href='mailto:asadullah@devxio.com' target='_blank'><p className=''>Email<br/><span className='hover:underline text-accent4 px-1 rounded-md'>joinasadullah1@gmail.com</span></p></a><CopyButton textToCopy="joinasadullah1@gmail.com"/>
                </div>
                <div className='flex justify-between mk-shadow1 rounded-xl p-4 md:px-6 md:py-5 mb-3'>
                  <a className='truncate basis-4/5' href='http://wa.me/923111678546' target='_blank'><p className=''>WhatsApp<br/><span className='hover:underline text-accent4 px-1 rounded-md'>+92 311 1678546</span></p></a><CopyButton textToCopy="http://wa.me/923111678546"/>
                </div>
                <div className='flex justify-between mk-shadow1 rounded-xl p-4 md:px-6 md:py-5 mb-3'>
                  <a className='truncate basis-4/5' href='https://www.linkedin.com/in/joinasadullah/' target='_blank'><p className=''>LinkedIn<br/><span className='hover:underline text-accent4 px-1 rounded-md'>linkedin.com/in/joinasadullah</span></p></a><CopyButton textToCopy="https://www.linkedin.com/in/joinasadullah/"/>
                </div>
                <div className='flex justify-between mk-shadow1 rounded-xl p-4 md:px-6 md:py-5 mb-6'>
                  <a className='truncate basis-4/5' href='https://github.com/JoinAsadullah' target='_blank'><p className=''>GitHub<br/><span className='hover:underline text-accent4 px-1 rounded-md'>github.com/JoinAsadullah</span></p></a><CopyButton textToCopy="https://github.com/JoinAsadullah"/>
                </div>
              </div>
              <ContactForm />
            </div>
        </div>
      </div>
    </main>
    </>
  )
}
