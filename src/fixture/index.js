import { models } from "../modules";

export const addPreData = () => {
  addAdmin();
};

const addAdmin = async () => {
  const match = await models.User.findOne({ email: process.env.EMAIL });
  if (!match) {
    models.User.create({ email: process.env.EMAIL, password: process.env.PASSWORD, userType: "Admin", isVerified: true });
  }
};
