'use client'
import React, { useState, useEffect } from 'react';



export default function ThemeBtn() {
    const [theme, setTheme] = useState<string>('system');
    useEffect(() => {
        const detectSystemTheme = () => {
          const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
          if ((darkThemeMq.matches && theme == 'system') || theme == 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        };
    
        detectSystemTheme();
        window.matchMedia('(prefers-color-scheme: dark)').addListener(detectSystemTheme);
      }, [theme]);

      useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && savedTheme !== theme) {
          setTheme(savedTheme);
        }
      }, [theme]);


      const handleThemeChange = (value: string) => {
        const selectedTheme = value;
        setTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
      };
    
      return (
        <div className='theme-btn h-[34px] w-[92px] p-[2px] flex justify-between items-center'>
          <div
            role='button'
            onClick={()=>{handleThemeChange('light')}}
            className={`${theme === 'light' ? 'active-theme' : ''} inline-block dark:invert radio-light w-[28px] h-[28px] hover:bg-[#ccc]`}
          />
          <div
            role='button'
            onClick={()=>{handleThemeChange('system')}}
            className={`${theme === 'system' ? 'active-theme' : ''} inline-block dark:invert radio-system w-[28px] h-[28px] hover:bg-[#ccc]`}
          />
            <div
              role='button'
              onClick={()=>{handleThemeChange('dark')}}
              className={`${theme === 'dark' ? 'active-theme' : ''} inline-block dark:invert radio-dark w-[28px] h-[28px] hover:bg-[#ccc]`}
          />
        </div>
    )
}