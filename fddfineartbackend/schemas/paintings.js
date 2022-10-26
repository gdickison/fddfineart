export default {
  name: 'paintings',
  title: 'Paintings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'image', //TODO: should the product have only one image, and leave multiple images for the variant (i.e., one image per variant)?
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'wall_images',
      title: 'Wall Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'placeholder',
      title: 'This is a placeholder image',
      description: 'Turn this on if this is a placeholder and not a product for sale',
      type: 'boolean'
    },
    {
      name: 'original_available',
      title: 'Is the original available?',
      type: 'boolean',
      hidden: ({document}) => document?.placeholder
    },
    {
      name: 'original_price',
      title: 'Price for original',
      description: 'Enter a whole number - no dollar sign, commas, or decimal (e.g., 5000)',
      type: 'number',
      hidden: ({document}) => !document?.original_available
    },
    {
      name: 'original_dimensions',
      title: 'What are the dimensions of the original?',
      description: 'Use this format: 24 x 32',
      type: 'string',
      hidden: ({document}) => document?.placeholder
    },
    {
      name: 'prints_available',
      title: 'Are prints available?',
      type: 'boolean',
      hidden: ({document}) => document?.placeholder
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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({document}) => document?.placeholder
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      hidden: ({document}) => document?.placeholder
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    }
  ]
}