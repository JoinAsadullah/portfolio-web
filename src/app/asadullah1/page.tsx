'use client'
import ContactForm from './components/contactus.tsx'
import ThemeBtn from './components/theme-btn.tsx'
import Loader from './components/loader.tsx'
import { DevxioLogo, FbLogo, TwitterLogo, LinkedinLogo, GithubLogo, Badge, Signature } from './svgs.tsx'
import { useEffect, useState } from 'react';



export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [scrollAtTop, setScrollAtTop] = useState<boolean>(true);
  
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      console.log('loaded');
    };
  
    if (document.readyState === 'complete') {
      // If the document is already loaded, trigger handleLoad immediately
      handleLoad();
    } else {
      // Listen for the "load" event
      window.addEventListener('load', handleLoad);
    }
  
    return () => {
      // Cleanup: Remove the event listener
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  
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

  return (
    <>
    {loading==true ? <Loader/>: ""}
    <main className={`text-foreground `}>
      <div className={`min-w-[330px] mx-[auto]`}>
        <div  className={`mobile-wrapper max-w-full h-8 flex justify-between sticky z-20 top-0 ${scrollAtTop ? '' : 'glass border-b-[1px]'} border-[#00000017] dark:border-[#ffffff17] `}>
          <div className='w-full flex justify-between items-center'>
            <DevxioLogo/>
            <ThemeBtn/>
          </div>
        </div>
        <div className='text-center mobile-wrapper pt-8 relative mb-16'>
          <div className='relative aspect-[.750] w-full max-w-[550px] mx-[auto] mt-[-75px] relative z-[-1]
            bg-[linear-gradient(to_bottom,_#00000000_70%,var(--background)_80%),url(/assets/asadullahpicw.webp)]
            dark:bg-[linear-gradient(to_bottom,_#00000000_70%,var(--background)_80%),url(/assets/asadullahpic.webp)]
            bg-contain bg-no-repeat sm:mb-[-320px] md:mt-[-120px]'>
          </div>
          <h1 className='text-left max-sm:mt-[-60%] hero-heading sm:hero-heading-sm
          md:hero-heading-md'>
            <span className='bg-clip-1'>Muhammad </span>
            <span className='bg-clip-1'>Asadullah</span>
          </h1>
          <a role='button' href='/asadullah/cv' className='text-v2 border-[1px] border-accent5 rounded-lg p-3 comp-width block mt-4
          md:w-10'>
            VIEW CV
          </a>
          <div className='flex justify-between items-center comp-width mt-4 '>
            <a href='https://www.facebook.com/joinasadullah/' target='_blank'>   <FbLogo />  </a>
            <a href='https://twitter.com/JoinAsadullah/' target='_blank'>     <TwitterLogo />     </a>
            <a href='https://www.linkedin.com/in/JoinAsadullah/' target='_blank'> <LinkedinLogo /> </a>
            <a href='https://github.com/JoinAsadullah/' target='_blank'>     <GithubLogo />      </a>
          </div>
          <h2 className='comp-width mt-4 text-v1 text-left  dark:text-description
          '>
            I&#39;m Muhammad Asadullah Digital Marketing expert and Full Stack Website developer. Let me help you build an online presence that stands out from the competition and leaves a lasting impression.
          </h2>
        </div>
        <div className='mobile-wrapper div-space'>
          <h3 className='text-v0 text-center'>
            SKILLS
          </h3>
          <div className='flex justify-between flex-wrap pic-invert comp-width
          md:max-w-full'>
            <img src='/assets/skill(1).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(2).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(16).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(3).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(4).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(5).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(6).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(7).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(8).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(9).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(10).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(11).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(12).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(13).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(14).webp' alt='skill logo' className='h-[30px] m-3'/>
            <img src='/assets/skill(15).webp' alt='skill logo' className='h-[30px] m-3'/>
          </div>
        </div>
        <div className='mobile-wrapper div-space'>
          <h3 className='text-v0 text-center title-space'>
            EXPERIENCE
          </h3>
          <div className='rounded-md bg-accent1 rounded-xl p-2 text-center comp-width'>
            <div className='w-full mx-[auto] py-6 pb-8 relative bg-accent2 rounded-md'>
              <div className=' absolute top-0 w-full h-full p-5 flex items-center'>
                <h2 className='text-v3 w-full'></h2>
              </div>
              <Badge />
              <h2 className='text-v1 w-full'>BS Computer Science (2021-25)</h2>
            </div>
            <h4 className='p-3 my-4 text-v1 bg-accent2 rounded-md'>
              2+ Years of Digital Marketing Experience
            </h4>
            <h4 className='p-3 mt-4 text-v1 bg-accent2 rounded-md'>
              2+ Years web development Experience
            </h4>
          </div>
        </div>
        <div className='mobile-wrapper div-space'>
          <h3 className='text-v0 text-center title-space'>
            WHAT I&#39;VE DONE SO FAR
          </h3>
          <div className='comp-width'>
            <div className='w-full aspect-[.71] sm:aspect-square relative truncate
            md:aspect-[1.2]
            '>
              <img src='/assets/fa.webp' alt='focus academy website screenshot' className='absolute top-0 w-full top-bdr border-[10px] border-accent3 object-cover top-0 dark:drken'/>
            </div>
            <div className=' bottom-bdr bg-accent2 py-2'>
              <p className='w-full mx-[auto] text-v1 text-center p-4'>
                Designed and developed Focus Academy Website
              </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/focusacademy' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://joinasadullah.github.io/focusacademy/' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
          <div className='comp-width mt-4'>
            <div className='w-full aspect-[.71] sm:aspect-square relative truncate
            md:aspect-[1.2]
            '>
              <img src='/assets/bk.webp' alt='focus academy website screenshot' className='absolute top-0 w-full top-bdr border-[6px] sm:border-[10px] border-accent3 object-cover mb-[-20] dark:drken'/>
            </div>
            <div className=' bottom-bdr bg-accent2 py-2'>
              <p className='w-full mx-[auto] text-v1 text-center p-4'>
                Re developed the Front end of entire Bika Construction website
              </p>
              <div className='flex justify-center items-center pic-invert'>
                <a href='https://github.com/JoinAsadullah/bika' target='_blank'><img src='/assets/github.webp' alt='github repo' className='h-[30px] m-3'/></a>
                <a href='https://joinasadullah.github.io/bika/' target='_blank'><img src='/assets/rd.webp' alt='redirect url' className='h-[30px] m-3'/></a>
              </div>
            </div>
          </div>
        </div>
        <div className='mobile-wrapper div-space'>
          <h3 className='text-v0 text-center title-space'>
            SERVICES
          </h3>
          <div className='text-center comp-width pic-invert'>
            <img src='/assets/mrk.webp' alt='webpage icon' className='w-1/2 mx-auto mt-2'/>
            <p className='text-v1 w-4/5 mx-auto mt-2'>
             Email Marketing, SEO, Socail Media Marketing
            </p>
          </div>
          <div className='text-center mt-6 comp-width pic-invert'>
            <img src='/assets/webpg.webp' alt='webpage icon' className='w-1/2 mx-auto mt-2'/>
            <p className='text-v1 w-4/5 mx-auto mt-2'>
              Integrated web application and information system development.
            </p>
          </div>
        </div>
        <div className='mobile-wrapper div-space'>
          <h3 className='text-v0 text-center title-space'>
            CONTACT US
          </h3>
          <ContactForm />
        </div>
      </div>
    </main>
    </>
  )
}
