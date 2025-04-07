const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  // Fix the entry configuration issue
  if (typeof config.entry === 'string' || typeof config.entry === 'function') {
    config.entry = [config.entry];
  }
  
  // Make sure we're exporting a valid entry
  if (!config.entry || (Array.isArray(config.entry) && config.entry.length === 0)) {
    config.entry = ['./node_modules/expo/AppEntry.js'];
  }

  // Add any other customizations here
  
  return config;
};