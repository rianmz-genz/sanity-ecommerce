import { defineField, defineType } from "sanity";

export const cartItem = defineType({
    name: 'cartItem',
    type: 'document',
    title: 'Cart Item',
    fields: [
      defineField({
        name: 'product',
        type: 'reference',
        to: [{type: 'product'}],
      }),
      defineField({
        name: 'quantity',
        type: 'number',
        title: 'Quantity',
      }),
    ],
  })