export default {
  name: 'shows',
  title: 'Shows',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'is_current',
      title: 'Is this the current show?',
      type: 'boolean'
    },
    {
      name: 'paintings',
      title: 'Paintings in Show',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'paintings'}
        }
      ]
    }
  ]
}