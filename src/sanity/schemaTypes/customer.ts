const customer ={
    name: "customer",
    title: "Customer",
    type: "document",
    fields: [
      {
        name: "email",
        title: "Email",
        type: "string",
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: "phone",
        title: "Phone Number",
        type: "string",
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: "firstname",
        title: "First Name",
        type: "string",
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: "lastname",
        title: "Last Name",
        type: "string",
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: "companyname",
        title: "Company Name",
        type: "string",
      },
      {
        name: "countryname",
        title: "Country Name",
        type: "string",
        validation: (Rule:any) => Rule.required(),
      },
      {
        name: "streetAddress",
        title: "Street Address",
        type: "string",
      },
      {
        name: "townCity",
        title: "Town/City",
        type: "string",
      },
      {
        name: "Province",
        title: "Province",
        type: "string",
      },
      {
        name: "zipCode",
        title: "Zip Code",
        type: "string",
      },
      {
        name: "additionalInfo",
        title: "Additional Information",
        type: "text",
      },
      {
        name: "cash",
        title: "Cash Payment",
        type: "boolean",
      },
      {
        name: "bank",
        title: "Bank Payment",
        type: "boolean",
      },
    ],
  };
  export default customer;