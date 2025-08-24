import dotenv from "dotenv"
dotenv.config()

export default function GetEnv(key: string) {
  const value = process.env[key];
  
  if(value !== undefined) return value

  throw new Error(`${key} não definido`);
}