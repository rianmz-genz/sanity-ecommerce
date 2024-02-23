import { defineField, defineType } from "sanity";

export const orderLine = defineType({
    name: 'orderLine',
    type: 'document',
    title: 'Order Line',
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
      defineField({
        name: 'unitPrice',
        type: 'number',
        title: 'Unit Price',
      }),
      defineField({
        name: 'lineTotal',
        type: 'number',
        title: 'Line Total',
      }),
    ],
  })