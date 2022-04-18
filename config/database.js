module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        uri: "mongodb+srv://chiefsosa:ChiefSosa@123@cluster0.rcl2s.mongodb.net/Cluster0?retryWrites=true&w=majority",
      },
      options: {
        ssl: true,
      },
    },
  },
});

// mongodb+srv://chiefsosa:<password>@cluster0.rcl2s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
