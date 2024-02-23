import { defineField, defineType } from "sanity";

export const cart = defineType({
    name: 'cart',
    type: 'document',
    title: 'Cart',
    fields: [
      defineField({
        name: 'user',
        type: 'reference',
        to: [{type: 'user'}],
      }),
      defineField({
        name: 'cartItems',
        type: 'reference',
        to: [{type: 'cartItem'}],
      }),
    ],
  })