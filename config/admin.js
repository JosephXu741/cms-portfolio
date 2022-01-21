module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8d5a48c53efb35700f04413a88dfbec0'),
  },
});
