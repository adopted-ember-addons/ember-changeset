# How to contribute

## Improve documentation

We are always looking to improve our documentation. If at some moment you are
reading the documentation and something is not clear, or you can't find what you
are looking for, then please open an issue with the repository. This gives us a
chance to answer your question and to improve the documentation if needed.

Pull requests correcting spelling or grammar mistakes are always welcome.

## Found a bug?

Please try to answer at least the following questions when reporting a bug:

- Which version of the project did you use when you noticed the bug?
- How do you reproduce the error condition?
- What happened that you think is a bug?
- What should it do instead?

It would really help the maintainers if you could provide a reduced test case
that reproduces the error condition.

## Have a feature request?

Please provide some thoughful commentary and code samples on what this feature
should do and why it should be added (your use case). The minimal questions you
should answer when submitting a feature request should be:

- What will it allow you to do that you can't do today?
- Why do you need this feature and how will it benefit other users?
- Are there any drawbacks to this feature?

## Submitting a pull-request?

Here are some things that will increase the chance that your pull-request will
get accepted:

- Did you confirm this fix/feature is something that is needed?
- Did you write tests, preferably in a test driven style?
- Did you add documentation for the changes you made?

If your pull-request addresses an issue then please add the corresponding
issue's number to the description of your pull-request.

## Installation

- `git clone git@github.com:adopted-ember-addons/ember-changeset.git`
- `cd ember-changeset`
- `npm install`

## Linting

- `npm run lint`
- `npm run lint:fix`

## Running tests

- `npm run test` – Runs the test suite on the current Ember version
- `npm run test:ember -- --server` – Runs the test suite in "watch mode"
- `npm run test:ember-compatibility` – Runs the test suite against multiple Ember versions

## Running the dummy application

- `npm run start`
- Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://cli.emberjs.com/release/](https://cli.emberjs.com/release/).
