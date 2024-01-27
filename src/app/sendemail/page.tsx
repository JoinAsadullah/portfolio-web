'use client'
import { useEffect } from 'react';

const SendEmailPage: React.FC = () => {
  useEffect(() => {
    // Define the email address
    const emailAddress = 'asadullah@devxio.com';

    // Construct the mailto link
    const mailtoLink = `mailto:${emailAddress}`;

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
  }, []);

  return null; // You can return null since this page doesn't render content
};

export default SendEmailPage;
