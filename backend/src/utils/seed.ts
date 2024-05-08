import { AppDataSource } from "../app-data-source";
import { User, Shop } from "../entities";
import bcrypt from "bcrypt";

// this script used to add user and shop from terminal

async function seedUser() {
  try {
    const password = "digitalMenu$$1234";
    const saltRounds = 10;
    const hashPass = await bcrypt.hash(password, saltRounds);

    const user = new User();
    user.name = "Hossein Hosseinpour";
    user.username = "Hossein";
    user.password = hashPass;

    await AppDataSource.manager.save(user);

    console.log(`Seeded one user`);
  } catch (err) {
    console.error("Error seeding user:", err);
    throw err;
  }
}

async function seedShop() {
  try {
    const shop = new Shop();
    shop.title = "My Fast Food";
    shop.description =
      "An ideal place for birthday parties, business conferences and for family/individual lunch & dinner.";
    shop.currency = "$";

    await AppDataSource.manager.save(shop);

    console.log(`Seeded one shop`);
  } catch (err) {
    console.error("Error seeding shop:", err);
    throw err;
  }
}

async function main() {
  await AppDataSource.initialize();
  await seedUser();
  await seedShop();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
