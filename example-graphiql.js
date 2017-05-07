// {
//   # user(id: "23") {
//   #   firstName,
//   #   age,
//   #   company {
//   #     id,
//   #     name
//   #   }
//   # }
//   company(id:"1") {
//     ...companyDetails
//     users {
//       id,
//       firstName
//     }
//   }
// }
//
// fragment companyDetails on Company {
//   id,
//   name,
//   description
// }
