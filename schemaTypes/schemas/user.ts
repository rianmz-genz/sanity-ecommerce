import { defineType, defineField, defineArrayMember } from 'sanity'

export const user = defineType({
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    defineField({
      name: 'username',
      type: 'string',
      title: 'Username',
    }),
    defineField({
      name: 'password',
      type: 'string',
      title: 'Password',
    }),
    defineField({
      name: 'firstName',
      type: 'string',
      title: 'First Name',
    }),
    defineField({
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
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
    defineField({
      name: 'telephone',
      type: 'string',
      title: 'Telephone',
    }),
    defineField({
      name: 'mobile',
      type: 'string',
      title: 'Mobile',
    }),
    defineField({
      name: 'orders',
      type: 'reference',
      to: [{type: 'order'}],
    }),
  ],
})