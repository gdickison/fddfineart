export default {
  name: 'productVariant',
  title: 'Product Variant',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'size',
      title: 'Size',
      type: 'reference',
      to: [{ type: 'sizes' }]
    },
    {
      name: 'frame',
      title: 'Frame',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'frame' }]
        }
      ]
    },
    {
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'media' }]
        }
      ]
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'ski',
      title: 'SKU',
      type: 'string'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }]
    },
  ]
}