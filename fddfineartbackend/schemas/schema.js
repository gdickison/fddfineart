// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import bio from './bio'
import blockContent from './blockContent'
import collections from './collections'
import frame from './frame'
import media from './media'
import paintings from './paintings'
import shows from './shows'
import size from './size'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    bio,
    blockContent,
    collections,
    frame,
    media,
    paintings,
    shows,
    size
  ]),
})
