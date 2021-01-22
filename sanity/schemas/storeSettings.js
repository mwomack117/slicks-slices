import { MdStore as icon } from 'react-icons/md';

export default {
  // This is the display name for the type
  title: 'Settings',
  // The identifier for this document type used in the api's
  name: 'storeSettings',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Store Name',
      name: 'name',
      type: 'string',
      description: 'Name of the store',
    },
    {
      title: 'Slicemasters Currently Slicing',
      name: 'slicemaster',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
    {
      title: 'Hot Slices available in the case',
      name: 'hotSlices',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pizza' }] }],
    },
  ],
};
