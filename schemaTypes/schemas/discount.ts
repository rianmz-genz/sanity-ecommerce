import { defineField, defineType } from "sanity";

export const discount = defineType({
    name: 'discount',
    type: 'document',
    title: 'Discount',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: 'Discount Name',
      }),
      defineField({
        name: 'description',
        type: 'text',
        title: 'Description',
      }),
      defineField({
        name: 'percentOff',
        type: 'number',
        title: 'Percent Off',
      }),
    ],
  })