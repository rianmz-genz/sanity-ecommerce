import { defineField, defineType } from "sanity";

export const shippingAddress = defineType({
    name: 'shippingAddress',
    type: 'document',
    title: 'Shipping Address',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: 'Name',
      }),
      defineField({
        name: 'addressLine1',
        type: 'string',
        title: 'Address Line 1',
      }),
      defineField({
        name: 'addressLine2',
        type: 'string',
        title: 'Address Line 2',
      }),
      defineField({
        name: 'city',
        type: 'string',
        title: 'City',
      }),
      defineField({
        name: 'postalCode',
        type: 'string',
        title: 'Postal Code',
      }),
      defineField({
        name: 'country',
        type: 'string',
        title: 'Country',
      }),
    ],
  })