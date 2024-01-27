/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async redirects() {
      return [
        {
            source: '/asadullah/cv',
            destination: '/AsadullahCV.pdf',
            permanent: true, // 301 Permanent Redirect
          },
      ];
    },
  };
  
