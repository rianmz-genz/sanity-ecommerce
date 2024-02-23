import { defineField, defineType } from "sanity";

export const order = defineType({
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      defineField({
        name: 'user',
        type: 'reference',
        to: [{type: 'user'}],
      }),
      defineField({
        name: 'orderDate',
        type: 'date',
        title: 'Order Date',
      }),
      defineField({
        name: 'orderTotal',
        type: 'number',
        title: 'Order Total',
      }),
      defineField({
        name: 'orderLines',
        type: 'reference',
        to: [{type: 'orderLine'}],
      }),
    ],
  })