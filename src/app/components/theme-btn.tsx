'use client'
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";



export default function ThemeBtn() {
  
  const { systemTheme, theme, setTheme } = useTheme();
  const [fetchedTheme, setFetchedTheme] = useState<string | undefined>();

  useEffect(() => {
    setFetchedTheme(theme);
  }, [theme]);
    


      return (
        <div className='theme-btn h-[34px] w-[92px] p-[2px] flex justify-between items-center'>
          <div
            role='button'
            onClick={()=>{setTheme('light')}}
            className={`${fetchedTheme === 'light' ? 'active-theme' : ''} inline-block dark:invert radio-light w-[28px] h-[28px] hover:bg-[#ccc]`}
          />
          <div
            role='button'
            onClick={()=>{setTheme('system')}}
            className={`${fetchedTheme === 'system' ? 'active-theme' : ''} inline-block dark:invert radio-system w-[28px] h-[28px] hover:bg-[#ccc]`}
          />
            <div
              role='button'
              onClick={()=>{setTheme('dark')}}
              className={`${fetchedTheme === 'dark' ? 'active-theme' : ''} inline-block dark:invert radio-dark w-[28px] h-[28px] hover:bg-[#ccc]`}
          />
        </div>
    )
}