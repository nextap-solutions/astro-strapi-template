export default ({ env }) => ({
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: env("CACHE_MAX_SIZE", 32767),
          maxAge: env("CACHE_TTL", 3600),
        },
      },
      strategy: {
        contentTypes: [],
      },
    },
  },
});
