// TODO  - just paper for now. I will need to figure out this detail later - will media be charged by area or by a flat rate?

export default {
  name: 'media',
  title: 'Media',
  type: 'document',
  fields: [
    {
      name: 'style',
      title: 'Style',
      type: 'string'
    },
    {
      title: 'Width',
      description: 'Enter a whole or decimal number - no symbols',
      name: 'width',
      type: 'number'
    },
    {
      title: 'Height',
      description: 'Enter a whole or decimal number - no symbols',
      name: 'height',
      type: 'number'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    }
  ],
  preview: {
    select: {
      style: 'style',
      price: 'price',
      height: 'height',
      width: 'width'
    },
    prepare(selection){
      const {style, price, height, width} = selection
      return {
        title: `${style} - ${width} X ${height}`,
        subtitle: `$${price}`
      }
    }
  }
}