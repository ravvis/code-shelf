var db = openDatabase("p", "1.0", "NorthWind", 4000000);
// var msg;

import categories from "./db/categories";
// import customers from "./db/customers";
// import employees from "./db/employees";
// import orders from "./db/orders";
// import products from "./db/products";
// import regions from "./db/regions";
// import shippers from "./db/shippers";
// import suppliers from "./db/suppliers";

db.transaction(function (tx) {
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS categories (categoryID unique, description, name)"
  );
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS customers (customerID unique, companyName, contactName, contactTitle, address)"
  );
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS employees (employeeID unique, lastName, firstName, title, titleOfCourtesy, birthDate, hireDate, address, notes, reportsTo, territoryIDs)"
  );
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS orders (orderID unique, customerID, employeeID, orderDate, requiredDate, shippedDate, shipVia, freight, shipName, shipAddress, details)"
  );
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS products (productID unique, supplierID, categoryID, quantityPerUnit, unitPrice, unitsInStock, unitsOnOrder, reorderLevel, discontinued, name)"
  );
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS regions (regionID unique, name, territories)"
  );
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS shippers (shipperID unique, companyName, phone)"
  );
  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS suppliers (supplierID unique, companyName, contactName, contactTitle, address)"
  );

  // console.log(`CREATE TABLE IF NOT EXISTS suppliers (supplierID unique, ${Object.keys(
  //   suppliers[0]
  // ).slice(1).join(", ")})`)

  categories.forEach((p) => {
    tx.executeSql(
      `INSERT INTO categories (${Object.keys(p).join(
        ", "
      )}) VALUES (${Object.values(p)
        .map((q) => `"${q}"`)
        .join(", ")})`
    );
  });
  // customers.forEach((customer) => {
  //   let q = `INSERT INTO customers (${Object.keys(customer).join(
  //     ", "
  //   )}) VALUES (${Object.values(customer)
  //     .map((q) => `"${q}"`)
  //     .join(", ")})`;
  //   console.log(q);
  //   tx.executeSql(q);
});
// employees.forEach((p) => {
//   let q = `INSERT INTO employees (${Object.keys(p).join(
//     ", "
//   )}) VALUES (${p["employeeID"]}, ${Object.values(p)
//     .map((q) => `"${q}"`)
//     .slice(1)
//     .join(", ")})`;
//   console.log(q);
//   tx.executeSql(
//     q,
//     [],
//     (c) => {
//       console.log({ c });
//     },
//     (e) => {
//       console.log({ e });
//       return true;
//     }
//   );
// });
// orders.forEach((p) => {
//   tx.executeSql(
//     `INSERT INTO orders (${Object.keys(p).join(
//       ", "
//     )}) VALUES (${Object.values(p)
//       .map((q) => `"${q}"`)
//       .join(", ")})`
//   );
// });
// products.forEach((p) => {
//   tx.executeSql(
//     `INSERT INTO products (${Object.keys(p).join(
//       ", "
//     )}) VALUES (${Object.values(p)
//       .map((q) => `"${q}"`)
//       .join(", ")})`
//   );
// });
// regions.forEach((p) => {
//   tx.executeSql(
//     `INSERT INTO regions (${Object.keys(p).join(
//       ", "
//     )}) VALUES (${Object.values(p)
//       .map((q) => `"${q}"`)
//       .join(", ")})`
//   );
// });
// shippers.forEach((p) => {
//   tx.executeSql(
//     `INSERT INTO shippers (${Object.keys(p).join(
//       ", "
//     )}) VALUES (${Object.values(p)
//       .map((q) => `"${q}"`)
//       .join(", ")})`
//   );
// });
// suppliers.forEach((p) => {
//   tx.executeSql(
//     `INSERT INTO suppliers (${Object.keys(p).join(
//       ", "
//     )}) VALUES (${Object.values(p)
//       .map((q) => `"${q}"`)
//       .join(", ")})`
//   );
// });

// tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "logmsg")');
// console.log("Database and tables created");
// });
//
// db.transaction(function (tx) {
//   tx.executeSql(
//     "SELECT * FROM LOGS",
//     [],
//     function (tx, results) {
//       var len = results.rows.length,
//         i;
//       msg = "<p>Found rows: " + len + "</p>";
//       console.log(msg)
//
//
//       for (i = 0; i < len; i++) {
//         msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
//         console.log(msg)
//       }
//     },
//     null
//   );
// });

export function EXECUTE_SQL_QUERY(query) {
  return new Promise((resolve, reject) => {
    if (query) {
      db.transaction(function (tx) {
        tx.executeSql(
          query,
          [],
          function (tx, results) {
            // let len = results.rows.length;
            let obj = JSON.parse(JSON.stringify(results.rows));
            console.log({ obj });
            resolve(Object.values(obj))
          },
          () => {
            reject()
          }
        );
      });
    } else {
      resolve(null);
    }
  });
}
EXECUTE_SQL_QUERY("SELECT * FROM categories");
