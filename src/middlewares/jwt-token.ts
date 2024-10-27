import jwt, { JwtPayload } from "jsonwebtoken";
import auth from "../config/auth";

class JwtToken {
  private secretKey: string;
  
  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }
  // Gera um token JWT com o payload fornecido
  public signToken(payload: object): string {
    return jwt.sign(payload, this.secretKey, { expiresIn: "21d" });
  }

  // Valida um token JWT e retorna o payload decodificado ou null em caso de erro
  decoded(token: string): JwtPayload | string | null {
    try {
      return jwt.verify(token, this.secretKey) as JwtPayload | string;
    } catch (error) {
      console.error("Token inválido:", error);
      return null; // Retorna null se o token for inválido
    }
  }
}

const WebToken = new JwtToken(auth.secret_key as string) 
export default WebToken;