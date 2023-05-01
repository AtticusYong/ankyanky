import jwt from "jsonwebtoken";

const generateToken = (id) => {
  jwt.sign({ id }, 'shhhh', {
    expiresIn: "30d",
  });
};

export default generateToken;
