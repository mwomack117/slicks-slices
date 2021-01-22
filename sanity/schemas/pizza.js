import { MdLocalPizza as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  // This is the display name for the type
  title: 'Pizzas',
  // The identifier for this document type used in the api's
  name: 'pizza',
  type: 'document',
  icon,
  fields: [
    {
      // The display name for this field
      title: 'Pizza Name',
      // The identifier for this field used in the api's
      name: 'name',
      type: 'string',
      description: 'Name of the pizza',
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
      title: 'Photo',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
      description: 'Price of the pizza in cents',
      validation: (Rule) => Rule.min(1000).max(50000),
      inputComponent: PriceInput,
    },
    {
      title: 'Toppings',
      name: 'toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
    },
    prepare: ({ title, media, ...toppings }) => {
      // 1. filter undefined toppings out
      const tops = Object.values(toppings).filter(
        (topping) => topping !== undefined
      );
      // 2. return the preview object for pizza
      return {
        title,
        media,
        subtitle: tops.join(', '),
      };
    },
  },
};
