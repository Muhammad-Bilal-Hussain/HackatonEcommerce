// order.js
const order= {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'customer',
        title: 'Customer',
        type: 'reference',
        to: [{ type: 'customer' }]
      },
      {
        name: 'item',
        title: 'Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'product_name',
                title: 'Product Name',
                type: 'string'
              },
              {
                name: 'product_description',
                title: 'Product Description',
                type: 'string'
              },
              {
                name: 'product_quantity',
                title: 'Product Quantity',
                type: 'number',
              },
              {
                name: 'product_price',
                title: 'Product Price',
                type: 'number'
              },
              {
                name: 'product_category',
                title: 'Product Category',
                type: 'string'
              }
            ]
          }
        ]
      },
      {
        name: 'order_date',
        title: 'Order Date',
        type: 'datetime'
      }
    ]
  }
  export default order;