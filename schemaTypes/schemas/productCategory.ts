import { defineField, defineType } from "sanity";

export const productCategory = defineType({
    name: 'productCategory',
    type: 'document',
    title: 'Product Category',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: 'Category Name',
      }),
      defineField({
        name: 'description',
        type: 'text',
        title: 'Description',
      }),
    ],
  })