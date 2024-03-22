export default function sitemap() {
  return [
    {
      url: 'https://emmamb.com',
      lastModified: new Date(),
      alternates: {
        languages: {
            'en': 'https://emmamb.com',
            'fr': 'https://emmamb.com/fr',
            'ja': 'https://emmamb.com/ja',
            'zh': 'https://emmamb.com/zh-Hans',
            'zh-Hans': 'https://emmamb.com/zh-Hans',
            'zh-Hant': 'https://emmamb.com/zh-Hant'
        }
      }

    }
  ]
}