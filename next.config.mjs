// /** @type {import('next').NextConfig} */
// const nextConfig = {
// images:{
//     remotePatterns:[
//         {
//             hostname:'localhost',
//             pathname:'***',
//             port:'3000',
//             protocol:'http'
//         },
//     ],
// }
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        // you can specify a particular path or use '*' for any path
        pathname: '/**', // This will match all paths
      },
    ],
  },
};

export default nextConfig;
