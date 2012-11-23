Package.describe({
  summary: "Enable connect logging for meteor."
});

Package.on_use(function (api) {
  api.add_files('connect-log.js', 'server');
});