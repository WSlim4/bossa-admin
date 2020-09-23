module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  url: 'https://admin.bossacriativa.art.br'
});
