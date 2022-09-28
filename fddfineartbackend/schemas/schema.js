// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import category from './category'
import frame from './frame'
import media from './media'
import product from './product'
import productVariant from './productVariant'
import size from './size'
import shows from './shows'
import paintings from './paintings'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    blockContent,
    category,
    frame,
    media,
    product,
    productVariant,
    size,
    shows,
    paintings
  ]),
})
