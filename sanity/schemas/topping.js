import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  // This is the display name for the type
  title: 'Toppings',
  // The identifier for this document type used in the api's
  name: 'topping',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Topping Name',
      name: 'name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      title: 'Vegetarian',
      name: 'vegetarian',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
      description: 'Is this vegetarian?',
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🌱 ' : ''}`,
    }),
  },
};
