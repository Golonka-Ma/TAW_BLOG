const config = {
  port: process.env.PORT || 3001,
  databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://battelshark:kvKkX63EhXRwP5hB@cluster0.h4luvew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
