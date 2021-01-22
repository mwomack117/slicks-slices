import { MdPerson as icon } from 'react-icons/md';

export default {
  // This is the display name for the type
  title: 'Slicemasters',
  // The identifier for this document type used in the api's
  name: 'person',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Tell us a bit about this person.',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
