'use strict';

// @todo uncomment when https://github.com/emberjs/ember.js/issues/20777 resolved
// const getChannelURL = require('ember-source-channel-url');
async function getChannelURL(channelType) {
  let HOST =
    process.env.EMBER_SOURCE_CHANNEL_URL_HOST || 'https://s3.amazonaws.com';
  let PATH = 'builds.emberjs.com';

  const response = await fetch(`${HOST}/${PATH}/${channelType}.json`);
  const result = await response.json();

  return result.version
    .replace('.canary', '')
    .replace('.beta', '')
    .replace('-release', '');
}
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    usePnpm: true,
    scenarios: [
      {
        name: 'ember-lts-3.20',
        npm: {
          devDependencies: {
            '@ember/test-helpers': '^2.9.3',
            'ember-cli': '~4.12.3',
            'ember-cli-app-version': '^5.0.0',
            'ember-data': '~3.20.0',
            'ember-qunit': '^5.1.5',
            'ember-resolver': '^8.0.0',
            'ember-source': '~3.20.5',
          },
        },
      },
      {
        name: 'ember-lts-3.24',
        npm: {
          devDependencies: {
            '@ember/test-helpers': '^2.9.3',
            'ember-cli': '~4.12.3',
            'ember-cli-app-version': '^5.0.0',
            'ember-data': '~3.24.0',
            'ember-qunit': '^5.1.5',
            'ember-resolver': '^8.0.0',
            'ember-source': '~3.24.3',
          },
        },
      },
      {
        name: 'ember-lts-3.28',
        npm: {
          devDependencies: {
            '@ember/test-helpers': '^2.9.3',
            'ember-cli': '~4.12.3',
            'ember-data': '~3.28.0',
            'ember-qunit': '^6.2.0',
            'ember-resolver': '^8.0.0',
            'ember-source': '~3.28.4',
          },
        },
      },
      {
        name: 'ember-lts-4.4',
        npm: {
          devDependencies: {
            'ember-data': '~4.4.0',
            'ember-resolver': '^8.0.0',
            'ember-source': '~4.4.0',
          },
        },
      },
      {
        name: 'ember-lts-4.8',
        npm: {
          devDependencies: {
            'ember-data': '~4.8.0',
            'ember-resolver': '^8.0.0',
            'ember-source': '~4.8.0',
          },
        },
      },
      {
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            'ember-data': '~4.12.0',
            'ember-source': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-lts-5.4',
        npm: {
          devDependencies: {
            'ember-source': '~5.4.0',
          },
        },
      },
      {
        name: 'ember-lts-5.8',
        npm: {
          devDependencies: {
            'ember-source': '~5.8.0',
          },
        },
      },
      {
        name: 'ember-lts-5.12',
        npm: {
          devDependencies: {
            'ember-source': '~5.12.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
            '@ember/test-helpers': '^4.0.0',
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
            '@ember/test-helpers': '^4.0.0',
          },
        },
      },
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
