import { JwtPayload } from "jsonwebtoken";

export interface customJwtPayload extends JwtPayload {
  id: string;
  role: string;
}
