import { defineField, defineType } from "sanity";

export const payment = defineType({
    name: 'payment',
    type: 'document',
    title: 'Payment',
    fields: [
      defineField({
        name: 'type',
        type: 'string',
        title: 'Payment Type',
      }),
      defineField({
        name: 'amount',
        type: 'number',
        title: 'Amount',
      }),
      defineField({
        name: 'currency',
        type: 'string',
        title: 'Currency',
      }),
      defineField({
        name: 'status',
        type: 'string',
        title: 'Payment Status',
      }),
    ],
  })
  