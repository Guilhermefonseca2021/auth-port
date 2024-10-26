import jwt, { JwtPayload } from "jsonwebtoken";

class WebToken {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  // Gera um token JWT com o payload fornecido
  signToken(payload: object): string {
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

export default WebToken;