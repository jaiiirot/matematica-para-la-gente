export const configLoader = () => {
  return {
    port: process.env.PORT,
    mongo: {
      uri: process.env.MONGO_URI,
    },
  };
};
