export default {
  name: 'frame',
  title: 'Frames',
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
      name: 'image',
      title: 'Image',
      type: 'image'
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
      width: 'width',
      media: 'image'
    },
    prepare(selection){
      const {style, price, height, width, media} = selection
      return {
        media: media,
        title: `${style} - ${width} X ${height}`,
        subtitle: `$${price}`
      }
    }
  }
}