/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'scontent.cdninstagram.com', pathname: '/**' },
      { protocol: 'https', hostname: 'instagram.fqdn', pathname: '/**' },
      { protocol: 'https', hostname: 'instagram.ftpq1-1.fna.fbcdn.net', pathname: '/**' },
    ],
  },
}

export default nextConfig
