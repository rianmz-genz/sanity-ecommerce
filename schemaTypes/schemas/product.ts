import { defineField, defineType } from "sanity";

export const product = defineType({
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: 'Product Name',
      }),
      defineField({
        name: 'description',
        type: 'text',
        title: 'Description',
      }),
      defineField({
        name: 'price',
        type: 'number',
        title: 'Price',
      }),
      defineField({
        name: 'sku',
        type: 'string',
        title: 'SKU',
      }),
      defineField({
        name: 'inventoryQuantity',
        type: 'number',
        title: 'Inventory Quantity',
      }),
      defineField({
        name: 'category',
        type: 'reference',
        to: [{type: 'productCategory'}],
      }),
      defineField({
        name: 'discount',
        type: 'reference',
        to: [{type: 'discount'}],
      }),
      defineField({
        name: 'images',
        type: 'image',
        title: 'Images',
      }),
    ],
  })