task default: :test

task :test do
  `phantomjs test/run-qunit.js file://#{File.expand_path 'test/index.html'}`
end
