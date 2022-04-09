module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env(
          "DATABASE_HOST",
          "ec2-52-48-159-67.eu-west-1.compute.amazonaws.com"
        ),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "d2fmjeenrnqmn1"),
        username: env("DATABASE_USERNAME", "hdgenccllriedr"),
        password: env(
          "DATABASE_PASSWORD",
          "6c67576dd8fc9a2935a318fc1b9c2dcaaeb87e7b6af5aca329816861927527e8"
        ),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: { strict: "true" },
    },
  },
});
