// import initCategoriesController from "./controllers/categories.controller.mjs";
// import initModelsController from "./controllers/models.controller.mjs";
// import initOrdersController from "./controllers/orders.controller.mjs";
// import initStripeController from "./controllers/stripe.controller.mjs";
// import initUsersController from "./controllers/users.controller.mjs";
// import db from "./db/models/index.mjs";

export default function routes(app) {
  // users routes
  // const usersController = initUsersController(db);
  // app.post("/api/register", usersController.signup);
  // app.post("/api/login", usersController.login);
  // app.post("/api/logout", usersController.logout);
  // app.get("/api/verify-cookie", usersController.verifyUserIsLoggedIn);
  // app.get("/api/users/:user_id", usersController.getUserByUserID);
  // app.put("/api/users/:user_id", usersController.updateProfile);

  // orders routes
  // const ordersController = new initOrdersController(db, usersController);
  // app.post("/api/orders", ordersController.postNewOrder);
  // app.get("/api/orders/users/:user_id", ordersController.getLatestOrder);
  // app.get("/api/orders/all-data/:user_id", ordersController.getAllOrderDataByUserID);
  // app.delete("/api/orders/cancel-order/:order_id", ordersController.cancelOrderByOrderID);


  // models routes
  // const modelsController = initModelsController(db);
  // app.get("/api/models/:modelId", modelsController.getModelData); //expects something like /api/models/1
  // app.get("/api/models", modelsController.getAllModels);
  // app.get(
  //   "/api/models-by-category/:categoryId",
  //   modelsController.getModelsByCategory
  // );

  // categories routes
  // const categoriesController = initCategoriesController(db);
  // app.get("/api/categories", categoriesController.getAllCategories);
}
