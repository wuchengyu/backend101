const { NODE_ENV = 'development' } = process.env;

export const __PROD__ = /^production$/i.test(NODE_ENV);
export const __DEV__ = /^development$/i.test(NODE_ENV);

export const { PORT = 9400 } = process.env;
