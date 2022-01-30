const ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET || 'basic';
const SALT: number = +process.env.SALT || 10;

export { ACCESS_TOKEN_SECRET, SALT };
