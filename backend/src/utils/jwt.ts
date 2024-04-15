import Jwt from "jsonwebtoken";

export const generateToken = (payload: any) => {
  const token = Jwt.sign(payload, process.env.AUTH_SECRET_KEY!, {
    expiresIn: "1h",
  });
  return token;
};
