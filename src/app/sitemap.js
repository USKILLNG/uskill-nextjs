export default function sitemap() {
  const baseUrl = 'https://uskill.ng'

  // Standard Pages
  const routes = [
    '',
    '/courses',
    '/mentors',
    '/blog',
    '/about',
    '/contact',
    '/auth/login',
    '/auth/signup',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes]
}