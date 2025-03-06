import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/*'],
        disallow: '/login',
      },
      {
        userAgent: 'Googlebot',
        allow: ['/*'],
        disallow: '/admin/*',
      },
    
    ],
    sitemap: 'https://sattu.netlify.app/sitemap.xml',
  }
}