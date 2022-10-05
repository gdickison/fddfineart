export default {
  name: 'bio',
  title: 'Bio',
  description: 'For the "about" page',
  type: 'document',
  fields: [
    {
      name: 'bio_images',
      title: 'Bio Photos / Images',
      description: 'Upload images to be displayed on the bio page. Images with a square (or nearly square) aspect ratio will work best.',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        }
      }]
    },
    {
      name: 'bio_name',
      title: 'Name',
      description: 'You never know - you could be somebody else.',
      type: 'string'
    },
    {
      name: 'bio_text',
      title: 'Bio',
      type: 'text'
    }
  ]
}