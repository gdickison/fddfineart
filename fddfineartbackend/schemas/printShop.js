import media from "./media"

const SIZES = [
  {'title': 'XS', 'value': 'X-Small'},
  {'title': 'S', 'value': 'Small'},
  {'title': 'M', 'value': 'Medium'},
  {'title': 'L', 'value': 'Large'},
  {'title': 'XL', 'value': 'X-Large'}
]

export default {
  name: 'printShop',
  title: 'Print Shop',
  type: 'document',
  fields: [
    {
      title: 'Print',
      description: 'Choose an existing painting, or create a new one.',
      name: 'print',
      type: 'reference',
        to: [{type: 'paintings'}]
    },
    {
      name: 'size_options',
      title: 'Print Sizes',
      type: 'array',
      of: [
        {
          title: 'Size',
          type: 'object',
          fields: [
            {
              title: 'Size Label',
              name: 'size_label',
              type: 'string',
              options: {
                list: SIZES,
                layout: 'dropdown'
              },
              validation: Rule => Rule.required()
            },
            {
              title: 'Width',
              description: 'Enter a whole or decimal number - no symbols',
              name: 'width',
              type: 'number',
              validation: Rule => Rule.required()
            },
            {
              title: 'Height',
              description: 'Enter a whole or decimal number - no symbols',
              name: 'height',
              type: 'number',
              validation: Rule => Rule.required()
            },
            {
              title: 'Unit Price',
              description: 'Enter a whole number - no decimals or symbols',
              name: 'unit_price',
              type: 'number',
              validation: Rule => Rule.required()
            }
          ],
          preview: {
            select: {
              size: 'size_label',
              price: 'unit_price',
              height: 'height',
              width: 'width'
            },
            prepare(selection){
              const {size, price, height, width} = selection
              const sizeTitle = size && SIZES.flatMap(option => option.value === size ? [option.title] : [])
              return {
                title: `${sizeTitle} - ${width} X ${height}`,
                subtitle: `$${price}`
              }
            }
          }
        }
      ],
      editModal: 'popover'
    },
    {
      name: 'frame_options',
      title: 'Frame Options',
      type: 'array',
      of: [
        {
          title: 'Frame',
          type: 'object',
          fields: [
            {
              title: 'Frame Style',
              name: 'frame_style',
              type: 'reference',
              to: [{type: 'frame'}]
            }
          ],
          preview: {
            select: {
              media: 'frame_style.image',
              style: 'frame_style.style',
              height: 'frame_style.height',
              width: 'frame_style.width',
              price: 'frame_style.price'
            },
            prepare(selection){
              const {media, style, height, width, price} = selection
              return {
                media: media,
                title: `${style} - ${width} X ${height}`,
                subtitle: `$${price}`
              }
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      media: 'print.image',
      title: 'print.title'
    }
  }
}