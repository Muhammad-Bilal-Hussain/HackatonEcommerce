import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
    name: 'products',
    type: 'document',
    title: 'Shop Products',
    fields: [
        defineField({
            name: 'image',
            type: 'image',
            title: 'Product Picture',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'title',
            type: 'string',
            title: 'Product Name',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'price',
            type: 'number',
            title: 'Product Price',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'summary',
            type: 'text',
            title: 'Summary',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        }),
    ]
    })