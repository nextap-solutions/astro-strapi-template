export default ({ env }) => ({
  autogenerate: process.env.NODE_ENV !== 'production',
});
