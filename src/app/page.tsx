'use client'
import ThemeBtn from './components/theme-btn.tsx'
//import Loader from './components/loader.tsx'
import CopyButton from './components/copyButton.tsx'
import { DevxioLogo, LinkedinLogo, GmailLogo, WhatsappLogo, GithubLogo, Badge, ResumeLogo } from './svgs.tsx'
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrollAtTop, setScrollAtTop] = useState<boolean>(true);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  
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
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "REST APIs",
    "Auth.js / NextAuth.js",
    "OpenAI API",
    "Vercel",
    "HTML",
    "CSS",
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
            {/* <div className='rounded-full p-3 flex items-center justify-center'>
              <img className='rounded-full border-[3px] border-solid border-[var(--accent1)] sm:w-[900px]' src="/assets/asadullah.webp" alt="Display Picture: Muhammad Asadullah, Full Stack Software Developer (MERN)"/>
            </div> */}
            <div>
              <div className='mt-5 mb-0 '>
                {/* <h1 className='mk-heading2 mr-1 inline leading-0 xsm:text-[24px]'>
                  Muhammad Asadullah
                </h1> */}
              </div>
                <div className="mk-p space-y-2">
                <p>
                  Hi, I&apos;m an aspiring web developer who learns by building.
                </p>
                <ul className="list-disc pl-5">
                  <li>
                  From AI chat apps to academic analysis tools, I&apos;ve turned my curiosity into real, working projects using modern web technologies.
                  </li>
                  <li>
                  I enjoy solving problems, picking up new skills fast, and creating clean, user-focused experiences.
                  </li>
                  <li>
                  My portfolio reflects a self-taught journey fueled by consistency, not shortcuts.
                  </li>
                </ul>
                <p>
                  I&apos;m excited to grow even more through real-world experience.
                </p>
                </div>
              <div className='mt-5 mb-2 '>
                <a className='px-1' href='https://wa.me/message/U7U573T4W463K1' target='_blank'><WhatsappLogo/></a> 
                <a className='px-1' href='mailto:contact@asadullah.dev' target='_blank'><GmailLogo/></a>
                <a className='pr-1' href='https://github.com/JoinAsadullah' target='_blank'><GithubLogo/></a>
                <a className='px-1' href='https://www.linkedin.com/in/joinasadullah/' target='_blank'><LinkedinLogo/></a>
                {/* <a className='px-1' href='/cv' target='_blank'><ResumeLogo/></a> */}
              </div>
            </div>
          </div>
        </div>
        <div className='px-5 xsm:px-6 sm:px-7 md:px-9 mt-8 w-full max-w-[1000px] mx-auto'>
          <h3 className='font-semibold text-center text-[18px] mb-4'>
            Skills
          </h3>
            <div className=' flex flex-wrap mk-shadow1 rounded-xl p-3 md:px-5 md:py-5 mb-3'>
              {skills.map((skill, index) => (
                <ul key={index} className=' pb-1 mb-2 px-2 mr-1 inline border-solid border-accent2 bg-accent2 border-[2px] rounded-full my-1 text-center'>
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
                        Completed
                      </h4>
                      <h4 className='text-[13px] font-light text-[var(foreground)] mt-1'>
                      Completion Year: 2025
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
            <>
            <div className=' flex flex-wrap mk-shadow1 rounded-xl mb-3'>

              <div className='w-full aspect-[2.2] relative truncate'>
                <div className="absolute top-4 right-4 z-10">
                  <div
                    className="inline-flex w-fit items-center whitespace-nowrap rounded-md bg-[#DFB722] transition-colors text-background px-2 py-1 text-xs font-medium"
                  >
                    Latest
                  </div>
                </div>
                <img src='/assets/screenshot1.png' alt='react budget website screenshot' className='absolute top-0 w-full top-bdr p-[10px] object-cover top-0 -dark:drken' />
              </div>
              <div className=' bottom-bdr bg-accent2 py-2 w-full m-[10px] mt-0'>
                <p className='w-full mx-[auto] text-v1 text-center p-4 p-[10px]'>
                  QAS - Quantification and Analysis System <br/>
                  Next.js, Vercel, Postgres, Tailwind
                </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/fyp' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://qas.asadullah.dev/' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
            <div className=' flex flex-wrap mk-shadow1 rounded-xl mb-3'>

              <div className='w-full aspect-[2.2] relative truncate'>
                <div className="absolute top-4 right-4 z-10">
                  <div
                    className="inline-flex w-fit items-center whitespace-nowrap rounded-md bg-[#DFB722] transition-colors text-background px-2 py-1 text-xs font-medium"
                  >
                    Latest
                  </div>
                </div>
                <img src='/assets/v0.png' alt='react budget website screenshot' className='absolute top-0 w-full top-bdr p-[10px] object-cover top-0 -dark:drken' />
              </div>
              <div className=' bottom-bdr bg-accent2 py-2 w-full m-[10px] mt-0'>
                <p className='w-full mx-[auto] text-v1 text-center p-4 p-[10px]'>
                  AI Chat | Next.js 14, Vercel AI SDK, OpenAI, Prisma, Auth.js, Tailwind
                </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/v0chat' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://v0gpt.devxio.com' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
            <div className=' flex flex-wrap mk-shadow1 rounded-xl mb-3'>

              <div className='w-full aspect-[2.2] relative truncate'>
                <div className="absolute top-4 right-4 z-10">
                  <div
                    className="inline-flex w-fit items-center whitespace-nowrap rounded-md bg-[#DFB722] transition-colors text-background px-2 py-1 text-xs font-medium"
                  >
                    Latest
                  </div>
                </div>
                <img src='/assets/screenshot33.png' alt='react budget website screenshot' className='absolute top-0 w-full top-bdr p-[10px] object-cover top-0 -dark:drken' />
              </div>
              <div className=' bottom-bdr bg-accent2 py-2 w-full m-[10px] mt-0'>
                <p className='w-full mx-[auto] text-v1 text-center p-4 p-[10px]'>
                  Agri Advice | Next.js, Vercel, OpenWeatherAPI, Postgres, Tailwind
                </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/crop-recommendation' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://crop-recommendation-smoky.vercel.app/' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>

          </>
            {/* See More Projects Button & Collapsible Projects List */}
            <div>
            {showMoreProjects && (
              <>
              <div className=' flex flex-wrap mk-shadow1 rounded-xl mb-3'>
                <div className='w-full aspect-[2.2] relative truncate
                '>
                  <div className="absolute top-4 right-4 z-10">
                  <div
                    className="inline-flex w-fit items-center whitespace-nowrap rounded-md bg-foreground transition-colors text-background px-2 py-1 text-xs font-medium"

                  >
                    Jan 2024
                  </div>
                  </div>
                <img src='/assets/financial-dashboard.png' alt='next js financial dashboard website screenshot' className='absolute top-0 w-full top-bdr p-[10px] object-cover top-0 -dark:drken'/>
                </div>
                <div className=' bottom-bdr bg-accent2 py-2 w-full m-[10px] mt-0'>
                <p className='w-full mx-[auto] text-v1 text-center p-4 p-[10px]'>
                  Next JS financial dashboard | Next.js 14
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
                  <div className="absolute top-4 right-4 z-10">
                  <div
                    className="inline-flex w-fit items-center whitespace-nowrap rounded-md bg-foreground transition-colors text-background px-2 py-1 text-xs font-medium"

                  >
                    Dec 2023
                  </div>
                  </div>
                <img src='/assets/budget-app.png' alt='react budget website screenshot' className='absolute top-0 w-full top-bdr p-[10px] object-cover top-0 -dark:drken'/>
                </div>
                <div className=' bottom-bdr bg-accent2 py-2 w-full m-[10px] mt-0'>
                <p className='w-full mx-[auto] text-v1 text-center p-4 p-[10px]'>
                  React budget app | Create react app
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
                  <div className="absolute top-4 right-4 z-10">
                  <div
                    className="inline-flex w-fit items-center whitespace-nowrap rounded-md bg-foreground transition-colors text-background px-2 py-1 text-xs font-medium"

                  >
                    Aug 2022
                  </div>
                  </div>
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
                  <div className="absolute top-4 right-4 z-10">
                  <div
                    className="inline-flex w-fit items-center whitespace-nowrap rounded-md bg-foreground transition-colors text-background px-2 py-1 text-xs font-medium"

                  >
                    Jul 2022
                  </div>
                  </div>
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
                  <div className="absolute top-4 right-4 z-10">
                  <div
                    className="inline-flex w-fit items-center whitespace-nowrap rounded-md bg-foreground transition-colors text-background px-2 py-1 text-xs font-medium"

                  >
                    Jul 2022
                  </div>
                  </div>
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
              </>
            )}
            </div>
          </div>
            <button
            className="mx-auto flex items-center gap-2 mb-4 px-4 py-2 bg-transparent text-accent7 font-semibold hover:bg-accent2 hover:border-accent4 transition group"
            onClick={() => setShowMoreProjects((prev) => !prev)}
            aria-expanded={showMoreProjects}
            >
            <span>
              {showMoreProjects ? "See Less Projects" : "See More Projects"}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${showMoreProjects ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            </button>
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


        <div id="contact" className='px-5 xsm:px-6 sm:px-7 md:px-9 mt-8 w-full max-w-[1000px] mx-auto'>
          <h3 className='font-semibold text-center text-[18px] mb-4'>
            Contact
          </h3>
            <div className=''>
              <div className=''>
                <div className='flex justify-between mk-shadow1 rounded-xl p-4 md:px-6 md:py-5 mb-3'>
                  <a className='truncate basis-4/5' href='mailto:asadullah@devxio.com' target='_blank'><p className=''>Email<br/><span className='hover:underline text-accent4 px-1 rounded-md'>contact@asadullah.dev</span></p></a><CopyButton textToCopy="contact@asadullah.dev"/>
                </div>
                <div className='flex justify-between mk-shadow1 rounded-xl p-4 md:px-6 md:py-5 mb-3'>
                  <a className='truncate basis-4/5' href='https://www.linkedin.com/in/joinasadullah/' target='_blank'><p className=''>LinkedIn<br/><span className='hover:underline text-accent4 px-1 rounded-md'>linkedin.com/in/joinasadullah</span></p></a><CopyButton textToCopy="https://www.linkedin.com/in/joinasadullah/"/>
                </div>
                <div className='flex justify-between mk-shadow1 rounded-xl p-4 md:px-6 md:py-5 mb-6'>
                  <a className='truncate basis-4/5' href='https://github.com/JoinAsadullah' target='_blank'><p className=''>GitHub<br/><span className='hover:underline text-accent4 px-1 rounded-md'>github.com/JoinAsadullah</span></p></a><CopyButton textToCopy="https://github.com/JoinAsadullah"/>
                </div>
              </div>
            </div>
        </div>
      </div>
    </main>
    </>
  )
}
