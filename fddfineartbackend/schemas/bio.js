export default {
  name: 'bio',
  title: 'Bio',
  description: 'For the "about" page',
  type: 'document',
  fields: [
    {
      name: 'bio_image',
      title: 'Bio Photo / Image',
      type: 'image',
      options: {
        hotspot: true
      }
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