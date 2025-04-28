import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import jwt from "jsonwebtoken"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Signs a JSON Web Token (JWT) with the given payload and secret.
 *
 * @param payload - The data to encode in the token.
 * @param secret - The secret key to sign the token.
 * @param options - Optional settings for the token, such as expiration.
 * @returns The signed JWT as a string.
 */
export function signJwt(payload: object, secret: string, options?: jwt.SignOptions): string {
  return jwt.sign(payload, secret, options);
}
