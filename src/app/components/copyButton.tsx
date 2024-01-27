import React, {useEffect} from 'react';
import copy from 'clipboard-copy';

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [copied, setCopied] = React.useState("Copy");
  const handleCopyClick = async () => {
    try {
      await copy(textToCopy);
      setCopied("Copied");
    } catch (error) {
      alert('Failed to copy text to clipboard.');
      console.error(error);
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
        setCopied("Copy");
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [setCopied]);

  return (
    <button className='text-accent7 text-[14px]' onClick={handleCopyClick}>&nbsp;{copied}</button>
  );
};

export default CopyButton;
