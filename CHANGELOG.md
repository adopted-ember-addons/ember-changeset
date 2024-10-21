# Change Log

Some notable changes going from 2.x to 3.x

- error.validation is a string if one validation and array if multiple validations.
- Defining a validation for a nested key worked before with {'something.else': ValidationFunc} and now it only works when defining as an object: { something: { else: validationFunc } }.

## v4.1.2 (2022-10-22)

#### :bug: Bug Fix
* [#659](https://github.com/poteto/ember-changeset/pull/659) Fix merging array-like objects ([@AmauryD](https://github.com/AmauryD))

#### Committers: 1
- Amaury ([@AmauryD](https://github.com/AmauryD))


## v4.1.1 (2022-09-04)

#### :bug: Bug Fix
* [#655](https://github.com/poteto/ember-changeset/pull/655) bug: fix null check in merge-deep ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v4.1.0 (2022-04-17)

#### :rocket: Enhancement
* [#649](https://github.com/poteto/ember-changeset/pull/649) feat: validated changeset ([@snewcomer](https://github.com/snewcomer))
* [#646](https://github.com/poteto/ember-changeset/pull/646) Bump validated-changeset 1.2.0 ([@sapryniukt](https://github.com/sapryniukt))

#### Committers: 2
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))
- Taras Sapryniuk ([@sapryniukt](https://github.com/sapryniukt))


## v4.0.0 (2022-03-12)

#### :memo: Documentation
* [#642](https://github.com/poteto/ember-changeset/pull/642) Add v4.0.0-beta.3 to v4.0.0-beta.5 to changelog ([@SergeAstapov](https://github.com/SergeAstapov))

#### Committers: 1
- Sergey Astapov ([@SergeAstapov](https://github.com/SergeAstapov))


## v4.0.0-beta.5 (2022-02-16)

#### :bug: Bug Fix
* [#641](https://github.com/poteto/ember-changeset/pull/641) Fix TS errors ([@bartocc](https://github.com/bartocc))

#### Committers: 1
- Julien Palmas ([@bartocc](https://github.com/bartocc))


## v4.0.0-beta.4 (2022-02-14)

#### :rocket: Enhancement
* [#638](https://github.com/poteto/ember-changeset/pull/638) Bump validated-changeset 1.1.2 ([@snewcomer](https://github.com/snewcomer))
* [#635](https://github.com/poteto/ember-changeset/pull/635) 🏷️ Add more typings to the `ember-changeset` module ([@bartocc](https://github.com/bartocc))

#### Committers: 2
- Julien Palmas ([@bartocc](https://github.com/bartocc))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v4.0.0-beta.3 (2022-02-09)

#### :rocket: Enhancement
* [#633](https://github.com/poteto/ember-changeset/pull/633) Import Snapshot from validated-changeset ([@linainu](https://github.com/linainu))

#### :bug: Bug Fix
* [#634](https://github.com/poteto/ember-changeset/pull/634) Update validated-changeset version to v1.1.1 ([@linainu](https://github.com/linainu))

#### Committers: 2
- Polina ([@linainu](https://github.com/linainu))
- Sergey Astapov ([@SergeAstapov](https://github.com/SergeAstapov))


## v4.0.0-beta.2 (2022-01-24)

#### :rocket: Enhancement
* [#630](https://github.com/poteto/ember-changeset/pull/630) Bump `@embroider/*` packages and add `peerDependencies` info ([@SergeAstapov](https://github.com/SergeAstapov))

#### Committers: 1
- Sergey Astapov ([@SergeAstapov](https://github.com/SergeAstapov))


## v4.0.0-beta.1 (2021-11-29)

#### :rocket: Enhancement
* [#626](https://github.com/poteto/ember-changeset/pull/626) ember-cli-update ([@snewcomer](https://github.com/snewcomer))
* [#622](https://github.com/poteto/ember-changeset/pull/622) Update npmignore file ([@SergeAstapov](https://github.com/SergeAstapov))

#### :memo: Documentation
* [#623](https://github.com/poteto/ember-changeset/pull/623) Update Build Status badge: Travis -> GH Actions ([@SergeAstapov](https://github.com/SergeAstapov))

#### Committers: 2
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))
- Sergey Astapov ([@SergeAstapov](https://github.com/SergeAstapov))


## v4.0.0-beta.0 (2021-10-27)

#### :boom: Breaking Change
* [#614](https://github.com/poteto/ember-changeset/pull/614) Breaking: Upgrade ember-auto-import to v2 ([@SergeAstapov](https://github.com/SergeAstapov))
* [#611](https://github.com/poteto/ember-changeset/pull/611) Breaking: Drop Node.js v10 support ([@SergeAstapov](https://github.com/SergeAstapov))

#### :rocket: Enhancement
* [#617](https://github.com/poteto/ember-changeset/pull/617) Run ember-cli-update to v3.28.3 and enable Ember v4 scenarios ([@SergeAstapov](https://github.com/SergeAstapov))
* [#619](https://github.com/poteto/ember-changeset/pull/619) Fix deprecations: missing `this` and `id` argument for <Input /> component ([@SergeAstapov](https://github.com/SergeAstapov))
* [#620](https://github.com/poteto/ember-changeset/pull/620) Add eslint-config-prettier per latest addon blueprint ([@SergeAstapov](https://github.com/SergeAstapov))
* [#618](https://github.com/poteto/ember-changeset/pull/618) nternal: Fix build for Ember v4 ([@SergeAstapov](https://github.com/SergeAstapov))
* [#616](https://github.com/poteto/ember-changeset/pull/616) [Internal] Update changelog via lerna-changelog ([@SergeAstapov](https://github.com/SergeAstapov))
* [#612](https://github.com/poteto/ember-changeset/pull/612)  Internal: Upgrade ember-template-lint to v3.10.0 ([@SergeAstapov](https://github.com/SergeAstapov))
* [#613](https://github.com/poteto/ember-changeset/pull/613) Internal: Upgrade eslint-plugin-ember to v10.5.7 ([@SergeAstapov](https://github.com/SergeAstapov))
* [#615](https://github.com/poteto/ember-changeset/pull/615) Internal: Upgrade ember-qunit to v5 ([@SergeAstapov](https://github.com/SergeAstapov))
* [#610](https://github.com/poteto/ember-changeset/pull/610) Add eslint-plugin-qunit per latest addon blueprint ([@SergeAstapov](https://github.com/SergeAstapov))
* [#609](https://github.com/poteto/ember-changeset/pull/609) CI: Disable Ember.js v4 scenarios, use npm in GH actions and make CI pass ([@SergeAstapov](https://github.com/SergeAstapov))

#### Committers: 1
- Sergey Astapov ([@SergeAstapov](https://github.com/SergeAstapov))


## v3.15.0 (2021-08-13)

#### :rocket: Enhancement
* [#608](https://github.com/poteto/ember-changeset/pull/608) Ensure async belongsTo ember-data relationships report correct dirty/pristine status ([@snewcomer](https://github.com/snewcomer))
* [#607](https://github.com/poteto/ember-changeset/pull/607) Bump validated-changeset to 1.0 ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#608](https://github.com/poteto/ember-changeset/pull/608) Ensure async belongsTo ember-data relationships report correct dirty/pristine status ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.14.1 (2021-07-15)

#### :bug: Bug Fix
* [#604](https://github.com/poteto/ember-changeset/pull/604) Bugfix: validate on render without backtracking Ember assertion ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.14.0 (2021-07-15)

#### :bug: Bug Fix
* [#606](https://github.com/poteto/ember-changeset/pull/606) Bugfix: changesetKeys does not work with proxied options ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.13.9 (2021-07-08)

#### :bug: Bug Fix
* [#603](https://github.com/poteto/ember-changeset/pull/603) Fix Ember tracking issue on set ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.13.8 (2021-06-07)

#### :bug: Bug Fix
* [#598](https://github.com/poteto/ember-changeset/pull/598) [Bug] Same date comparision dirties changeset ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.13.7 (2021-06-07)

#### :bug: Bug Fix
* [#597](https://github.com/poteto/ember-changeset/pull/597) Support setting properties to false ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.13.6 (2021-05-21)

#### :bug: Bug Fix
* [#596](https://github.com/poteto/ember-changeset/pull/596) [Bug]: better support for ember-data objects ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.13.5 (2021-05-17)

#### :bug: Bug Fix
* [#593](https://github.com/poteto/ember-changeset/pull/593) [Bug]: setDeep does not respect re-setting top level Change object ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.13.4 (2021-05-09)

#### :bug: Bug Fix
* [#590](https://github.com/poteto/ember-changeset/pull/590) [Bugfix]: get nested key when doesnt exist in underlying content ([@snewcomer](https://github.com/snewcomer))

#### :memo: Documentation
* [#588](https://github.com/poteto/ember-changeset/pull/588) fix readme Changeset arg order ([@betocantu93](https://github.com/betocantu93))

#### :house: Internal
* [#540](https://github.com/poteto/ember-changeset/pull/540) Support Embroider ([@snewcomer](https://github.com/snewcomer))

#### Committers: 2
- Alberto Cantú Gómez ([@betocantu93](https://github.com/betocantu93))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.13.1 (2021-03-04)

#### :rocket: Enhancement
* [#583](https://github.com/poteto/ember-changeset/pull/583) Support null merging of arrays ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.13.0 (2021-02-25)

#### :rocket: Enhancement
* [#582](https://github.com/poteto/ember-changeset/pull/582) validated-changeset 0.14.0 ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.12.0 (2021-02-03)

#### :rocket: Enhancement
* [#580](https://github.com/poteto/ember-changeset/pull/580) [Enhancement]: allow `value` key in object ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.11.0 (2021-01-30)

#### :bug: Bug Fix
* [#577](https://github.com/poteto/ember-changeset/pull/577) [Bug]: cyclical issues with ember-data models ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.10.5 (2020-12-19)

#### :bug: Bug Fix
* [#569](https://github.com/poteto/ember-changeset/pull/569) [Bug]: fix case with empty string validation message not reporting isValid correctly ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.10.4 (2020-12-06)

#### :rocket: Enhancement
* [#567](https://github.com/poteto/ember-changeset/pull/567) #unexecute to revert changes to underlying Object from #save ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#567](https://github.com/poteto/ember-changeset/pull/567) #unexecute to revert changes to underlying Object from #save ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.10.3 (2020-12-05)

#### :rocket: Enhancement
* [#566](https://github.com/poteto/ember-changeset/pull/566) validated-changeset 0.10.3 ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#566](https://github.com/poteto/ember-changeset/pull/566) validated-changeset 0.10.3 ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.10.2 (2020-11-20)

#### :bug: Bug Fix
* [#563](https://github.com/poteto/ember-changeset/pull/563) [Bug]: overridable mergeDeep to fix null typeof check ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.10.1 (2020-10-15)

#### :bug: Bug Fix
* [#557](https://github.com/poteto/ember-changeset/pull/557) [Bug]: use isArray for better Ember Array detection ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.10.0 (2020-10-11)

#### :rocket: Enhancement
* [#556](https://github.com/poteto/ember-changeset/pull/556) [Feature]: add get/set nested support ([@snewcomer](https://github.com/snewcomer))

#### :house: Internal
* [#555](https://github.com/poteto/ember-changeset/pull/555) [Test]: mutating underlying complex objects should not be possible ([@snewcomer](https://github.com/snewcomer))
* [#550](https://github.com/poteto/ember-changeset/pull/550) Add save test ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.9.2 (2020-09-27)

#### :rocket: Enhancement
* [#545](https://github.com/poteto/ember-changeset/pull/545) Improve merge-deep ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#548](https://github.com/poteto/ember-changeset/pull/548) [Bug]: handle hasMany relationships by ensuring we dont handle as object and rather treat as an array ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.9.1 (2020-09-17)

#### :house: Internal
* [#542](https://github.com/poteto/ember-changeset/pull/542) Improve has many test ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.9.0 (2020-09-03)

#### :rocket: Enhancement
* [#536](https://github.com/poteto/ember-changeset/pull/536) Rollback changes to model on save error ([@snewcomer](https://github.com/snewcomer))

#### Committers: 2
- Milton Castro ([@miltonmc](https://github.com/miltonmc))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.8.2 (2020-08-15)

#### :bug: Bug Fix
* [#531](https://github.com/poteto/ember-changeset/pull/531) Fix nested execute() merging ([@snewcomer](https://github.com/snewcomer))

#### :house: Internal
* [#525](https://github.com/poteto/ember-changeset/pull/525) Add test for changesetKeys to helper ([@snewcomer](https://github.com/snewcomer))

#### Committers: 2
- Milton Castro ([@miltonmc](https://github.com/miltonmc))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.8.1 (2020-08-04)

#### :bug: Bug Fix
* [#522](https://github.com/poteto/ember-changeset/pull/522) Fix pathInChanges bug ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.8.0 (2020-07-25)

#### :rocket: Enhancement
* [#520](https://github.com/poteto/ember-changeset/pull/520) FEATURE: validator class with validate method support ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.7.1 (2020-06-28)

#### :rocket: Enhancement
* [#510](https://github.com/poteto/ember-changeset/pull/510) rm notifyPropertyChange from specific spots ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.7.0 (2020-06-23)

#### :rocket: Enhancement
* [#513](https://github.com/poteto/ember-changeset/pull/513) #512 pendingData property to get resulting object with changes applied ([@RuslanZavacky](https://github.com/RuslanZavacky))
* [#514](https://github.com/poteto/ember-changeset/pull/514) Throw error if merging e-d objects ([@snewcomer](https://github.com/snewcomer))

#### :memo: Documentation
* [#511](https://github.com/poteto/ember-changeset/pull/511) Fix typo ([@oo6](https://github.com/oo6))

#### Committers: 3
- Milo Lee ([@oo6](https://github.com/oo6))
- Ruslan Zavacky ([@RuslanZavacky](https://github.com/RuslanZavacky))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.6.1 (2020-06-15)

#### :rocket: Enhancement
* [#509](https://github.com/poteto/ember-changeset/pull/509) Add dependentKeyCompat to isValid/isInvalid ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.6.0 (2020-06-15)

#### :rocket: Enhancement
* [#508](https://github.com/poteto/ember-changeset/pull/508) Unwrap proxy values before sending value into validation func and when passing through #get ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#508](https://github.com/poteto/ember-changeset/pull/508) Unwrap proxy values before sending value into validation func and when passing through #get ([@snewcomer](https://github.com/snewcomer))

#### :memo: Documentation
* [#505](https://github.com/poteto/ember-changeset/pull/505) docs: use `addError` in server errors example ([@knownasilya](https://github.com/knownasilya))

#### Committers: 2
- Ilya Radchenko ([@knownasilya](https://github.com/knownasilya))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.5.7 (2020-06-12)

#### :rocket: Enhancement
* [#506](https://github.com/poteto/ember-changeset/pull/506) Fix failing #set and #get for null belongsTo ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#506](https://github.com/poteto/ember-changeset/pull/506) Fix failing #set and #get for null belongsTo ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.5.6 (2020-06-11)

#### :bug: Bug Fix
* [#503](https://github.com/poteto/ember-changeset/pull/503) Add failing test for accessing belongsTo relationship ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.5.5 (2020-06-05)

#### :bug: Bug Fix
* [#501](https://github.com/poteto/ember-changeset/pull/501) Protect if no obj passed to template helper ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.5.4 (2020-06-05)

#### :rocket: Enhancement
* [#500](https://github.com/poteto/ember-changeset/pull/500) Properly discern undefined key that was wiped out as a result of a change ([@snewcomer](https://github.com/snewcomer))
* [#496](https://github.com/poteto/ember-changeset/pull/496) Update ember ([@andreyfel](https://github.com/andreyfel))

#### :bug: Bug Fix
* [#500](https://github.com/poteto/ember-changeset/pull/500) Properly discern undefined key that was wiped out as a result of a change ([@snewcomer](https://github.com/snewcomer))

#### Committers: 2
- Andrey Fel ([@andreyfel](https://github.com/andreyfel))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.5.3 (2020-06-03)

#### :rocket: Enhancement
* [#494](https://github.com/poteto/ember-changeset/pull/494) Remove unused util methods ([@andreyfel](https://github.com/andreyfel))

#### :bug: Bug Fix
* [#497](https://github.com/poteto/ember-changeset/pull/497) Allow "value" as a key in a changeset object ([@snewcomer](https://github.com/snewcomer))

#### Committers: 2
- Andrey Fel ([@andreyfel](https://github.com/andreyfel))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.5.2 (2020-06-03)

#### :bug: Bug Fix
* [#493](https://github.com/poteto/ember-changeset/pull/493) Ensure Ember.get doesnt fail with undefined ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.5.1 (2020-06-02)

#### :rocket: Enhancement
* [#487](https://github.com/poteto/ember-changeset/pull/487) New API - enum of keys to set isDirty state ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#490](https://github.com/poteto/ember-changeset/pull/490) Unwrap Proxy before sending into validatorFun ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.5.0 (2020-05-28)

#### :rocket: Enhancement
* [#482](https://github.com/poteto/ember-changeset/pull/482) Failing test case for validating computed property ([@andreyfel](https://github.com/andreyfel))

#### :bug: Bug Fix
* [#482](https://github.com/poteto/ember-changeset/pull/482) Failing test case for validating computed property ([@andreyfel](https://github.com/andreyfel))

#### Committers: 1
- Andrey Fel ([@andreyfel](https://github.com/andreyfel))


## v3.4.1 (2020-05-25)

#### :bug: Bug Fix
* [#486](https://github.com/poteto/ember-changeset/pull/486) Fix isObject in set-deep ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.4.0 (2020-05-22)

#### :rocket: Enhancement
* [#484](https://github.com/poteto/ember-changeset/pull/484) Implement recursive object tree proxy to properly handle sibling keys ([@snewcomer](https://github.com/snewcomer))
* [#481](https://github.com/poteto/ember-changeset/pull/481) Add isDirty tests ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#484](https://github.com/poteto/ember-changeset/pull/484) Implement recursive object tree proxy to properly handle sibling keys ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.3.8 (2020-05-16)

#### :bug: Bug Fix
* [#479](https://github.com/poteto/ember-changeset/pull/479) Validate nested fields validate/0 ([@snewcomer](https://github.com/snewcomer))

#### :memo: Documentation
* [#476](https://github.com/poteto/ember-changeset/pull/476) Update README.md ([@basz](https://github.com/basz))

#### Committers: 2
- Bas Kamer ([@basz](https://github.com/basz))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.3.7 (2020-05-16)

#### :bug: Bug Fix
* [#471](https://github.com/poteto/ember-changeset/pull/471) Safe set for setDeep ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.3.6 (2020-05-15)

#### :rocket: Enhancement
* [#475](https://github.com/poteto/ember-changeset/pull/475) Bump 0.4.7 validated-changeset ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.3.5 (2020-05-15)

#### :bug: Bug Fix
* [#473](https://github.com/poteto/ember-changeset/pull/473) Ensure dont lose sibling keys when ask for top level object and child… ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.3.4 (2020-05-03)

#### :rocket: Enhancement
* [#467](https://github.com/poteto/ember-changeset/pull/467) Use Ember.get if key is dot separated ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.3.3 (2020-05-03)

#### :rocket: Enhancement
* [#466](https://github.com/poteto/ember-changeset/pull/466) Leaf detection when merging sibling keys ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#466](https://github.com/poteto/ember-changeset/pull/466) Leaf detection when merging sibling keys ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.3.2 (2020-05-02)

#### :bug: Bug Fix
* [#465](https://github.com/poteto/ember-changeset/pull/465) Ensure get doesnt take into account keys in CHANGES ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.3.0 (2020-04-25)

#### :rocket: Enhancement
* [#462](https://github.com/poteto/ember-changeset/pull/462) Bump v-c to return primitive from lookup validator ([@snewcomer](https://github.com/snewcomer))
* [#456](https://github.com/poteto/ember-changeset/pull/456) Add form isValid/isInvalid states to button to ensure tracking works ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#462](https://github.com/poteto/ember-changeset/pull/462) Bump v-c to return primitive from lookup validator ([@snewcomer](https://github.com/snewcomer))

#### :house: Internal
* [#460](https://github.com/poteto/ember-changeset/pull/460) Use lookup-validator from validated-changeset in test ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.2.0 (2020-03-24)

#### :rocket: Enhancement
* [#447](https://github.com/poteto/ember-changeset/pull/447) Fix various bugs with validated-changeset ([@snewcomer](https://github.com/snewcomer))
* [#445](https://github.com/poteto/ember-changeset/pull/445) Bump ember-data 3.16 ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#447](https://github.com/poteto/ember-changeset/pull/447) Fix various bugs with validated-changeset ([@snewcomer](https://github.com/snewcomer))

#### :memo: Documentation
* [#446](https://github.com/poteto/ember-changeset/pull/446) Improve README and add @tracked to dummy app ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.1.0 (2020-03-21)

#### :bug: Bug Fix
* [#444](https://github.com/poteto/ember-changeset/pull/444) Serialize error object to handle circular objects ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.9 (2020-03-19)

#### :bug: Bug Fix
* [#443](https://github.com/poteto/ember-changeset/pull/443) Fix set Date on Changeset ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.8 (2020-03-10)

#### :rocket: Enhancement
* [#433](https://github.com/poteto/ember-changeset/pull/440) validated-changeset 0.2.2 ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.7 (2020-03-09)

#### :rocket: Enhancement
* [#439](https://github.com/poteto/ember-changeset/pull/439) prevent changelist properties from being proxyed to underlying object.  ([@arenoir](https://github.com/arenoir))
* [#438](https://github.com/poteto/ember-changeset/pull/438) 3.17 tests ([@snewcomer](https://github.com/snewcomer))
* [#435](https://github.com/poteto/ember-changeset/pull/435) Use function based Changeset in helper ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#439](https://github.com/poteto/ember-changeset/pull/439) prevent changelist properties from being proxyed to underlying object.  ([@arenoir](https://github.com/arenoir))

#### Committers: 2
- Aaron Renoir ([@arenoir](https://github.com/arenoir))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.6 (2020-02-28)

#### :rocket: Enhancement
* [#433](https://github.com/poteto/ember-changeset/pull/433) validated-changeset 0.2.1 ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.5 (2020-02-27)

#### :rocket: Enhancement
* [#430](https://github.com/poteto/ember-changeset/pull/430) docs: set isChangeset import to validated-changeset ([@oliverlj](https://github.com/oliverlj))

#### Committers: 2
- Oliver Lj ([@oliverlj](https://github.com/oliverlj))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.4 (2020-02-12)

#### :rocket: Enhancement
* [#428](https://github.com/poteto/ember-changeset/pull/428) enhancement Add types to app folder as well ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#428](https://github.com/poteto/ember-changeset/pull/428) enhancement Add types to app folder as well ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.3 (2020-02-11)

#### :rocket: Enhancement
* [#427](https://github.com/poteto/ember-changeset/pull/427) enhancement declare typings ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.2 (2020-02-06)

#### :rocket: Enhancement
* [#425](https://github.com/poteto/ember-changeset/pull/425) Moar types ([@snewcomer](https://github.com/snewcomer))
* [#426](https://github.com/poteto/ember-changeset/pull/426) Set up release-it and lerna-changelog ([@herzzanu](https://github.com/herzzanu))

#### Committers: 2
- Sabin Hertanu ([@herzzanu](https://github.com/herzzanu))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.1 (2020-02-05)

#### :rocket: Enhancement
* [#423](https://github.com/poteto/ember-changeset/pull/423) Reexport validated-changeset types ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#423](https://github.com/poteto/ember-changeset/pull/423) Reexport validated-changeset types ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.0 (2020-02-02)

#### :rocket: Enhancement
* [#391](https://github.com/poteto/ember-changeset/pull/391) validated-changeset - exit beta ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#421](https://github.com/poteto/ember-changeset/pull/421) add fallback for getOwnPropertyDescriptors ([@bekzod](https://github.com/bekzod))

#### Committers: 2
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))
- [@bekzod](https://github.com/bekzod)


## v3.0.0-beta.17 (2020-01-22)

#### :rocket: Enhancement
* [#409](https://github.com/poteto/ember-changeset/pull/409) Extend test coverage to sync relationships ([@andreyfel](https://github.com/andreyfel))

#### :bug: Bug Fix
* [#409](https://github.com/poteto/ember-changeset/pull/409) Extend test coverage to sync relationships ([@andreyfel](https://github.com/andreyfel))

#### Committers: 1
- Andrey Fel ([@andreyfel](https://github.com/andreyfel))


## v3.0.0-beta.16 (2020-01-21)

#### :rocket: Enhancement
* [#418](https://github.com/poteto/ember-changeset/pull/418) Export Changeset class to allow overriding ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#419](https://github.com/poteto/ember-changeset/pull/419) If argument is null to Changeset check ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.0-beta.15 (2020-01-20)

#### :rocket: Enhancement
* [#414](https://github.com/poteto/ember-changeset/pull/414) Bring back changeset-get for nested getter ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#417](https://github.com/poteto/ember-changeset/pull/417) Fix false values ([@snewcomer](https://github.com/snewcomer))
* [#416](https://github.com/poteto/ember-changeset/pull/416) Ensure key in obj works with dot separated ([@snewcomer](https://github.com/snewcomer))

#### :house: Internal
* [#415](https://github.com/poteto/ember-changeset/pull/415) Add failing test for nested properties with booleans ([@josemarluedke](https://github.com/josemarluedke))

#### Committers: 2
- Josemar Luedke ([@josemarluedke](https://github.com/josemarluedke))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.0-beta.14 (2020-01-18)

#### :bug: Bug Fix
* [#413](https://github.com/poteto/ember-changeset/pull/413) Follow up: Check array type as well ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.0-beta.13 (2020-01-17)

#### :rocket: Enhancement
* [#412](https://github.com/poteto/ember-changeset/pull/412) Handle null cases ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#412](https://github.com/poteto/ember-changeset/pull/412) Handle null cases ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.0-beta.12 (2020-01-17)

#### :bug: Bug Fix
* [#411](https://github.com/poteto/ember-changeset/pull/411) PublicErrors type ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.0-beta.11 (2020-01-17)

#### :bug: Bug Fix
* [#408](https://github.com/poteto/ember-changeset/pull/408) Fix a bug with unsafe properties ([@andreyfel](https://github.com/andreyfel))
* [#404](https://github.com/poteto/ember-changeset/pull/404) Fix changeset get for nested properties with changes ([@josemarluedke](https://github.com/josemarluedke))

#### :house: Internal
* [#401](https://github.com/poteto/ember-changeset/pull/401) Add set test ([@snewcomer](https://github.com/snewcomer))

#### Committers: 3
- Andrey Fel ([@andreyfel](https://github.com/andreyfel))
- Josemar Luedke ([@josemarluedke](https://github.com/josemarluedke))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.0-beta.10 (2020-01-14)

#### :bug: Bug Fix
* [#406](https://github.com/poteto/ember-changeset/pull/406) Failing test for ember data model. ([@luketheobscure](https://github.com/luketheobscure))

#### Committers: 1
- luke.js ([@luketheobscure](https://github.com/luketheobscure))


## v3.0.0-beta.9 (2020-01-11)

#### :bug: Bug Fix
* [#402](https://github.com/poteto/ember-changeset/pull/402) Properly manage error keys ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.0-beta.8 (2020-01-11)

#### :bug: Bug Fix
* [#399](https://github.com/poteto/ember-changeset/pull/399)  Collect errors correctly ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.0-beta.7 (2020-01-10)

#### :bug: Bug Fix
* [#397](https://github.com/poteto/ember-changeset/pull/397) Another safeSet for Ember happiness ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.0-beta.6 (2020-01-10)

#### :bug: Bug Fix
* [#395](https://github.com/poteto/ember-changeset/pull/395) Add safeSet for Ember tracking context ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.0-beta.5 (2020-01-09)

#### :bug: Bug Fix
* [#393](https://github.com/poteto/ember-changeset/pull/393) Fix TS type for changeset.errors ([@josemarluedke](https://github.com/josemarluedke))

#### Committers: 1
- Josemar Luedke ([@josemarluedke](https://github.com/josemarluedke))


## v3.0.0-beta.4 (2020-01-01)

#### :boom: Breaking Change
* [#392](https://github.com/poteto/ember-changeset/pull/392) Node 10 ([@snewcomer](https://github.com/snewcomer))

#### :memo: Documentation
* [#388](https://github.com/poteto/ember-changeset/pull/388) Update CHANGELOG.md ([@SergeAstapov](https://github.com/SergeAstapov))

#### Committers: 2
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))
- Sergey Astapov ([@SergeAstapov](https://github.com/SergeAstapov))


## v3.0.0-beta.3 (2019-12-13)

#### :rocket: Enhancement
* [#386](https://github.com/poteto/ember-changeset/pull/386) Async validate test ([@snewcomer](https://github.com/snewcomer))

#### :house: Internal
* [#385](https://github.com/poteto/ember-changeset/pull/385) [TEST] #get nested error with key path ([@snewcomer](https://github.com/snewcomer))

#### Committers: 2
- Josemar Luedke ([@josemarluedke](https://github.com/josemarluedke))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v3.0.0-beta.2 (2019-12-04)

#### :rocket: Enhancement
* [#384](https://github.com/poteto/ember-changeset/pull/384) allow multiple keys for .validate ([@bekzod](https://github.com/bekzod))

#### Committers: 1
- [@bekzod](https://github.com/bekzod)


## v3.0.0-beta.1 (2019-11-29)

#### :rocket: Enhancement
* [#382](https://github.com/poteto/ember-changeset/pull/382) Remove changeset-get helper ([@snewcomer](https://github.com/snewcomer))
* [#380](https://github.com/poteto/ember-changeset/pull/380) Bring back skipped tests ([@snewcomer](https://github.com/snewcomer))

#### Committers: 2
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))
- lauren ([@poteto](https://github.com/poteto))


## v3.0.0-beta.0 (2019-11-27)

#### :rocket: Enhancement
* [#379](https://github.com/poteto/ember-changeset/pull/379) [MAJOR]: rewrite for v3 ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v2.2.3 (2019-11-14)

#### :bug: Bug Fix
* [#378](https://github.com/poteto/ember-changeset/pull/378) [BUGFIX]: handling multiple validations ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v2.2.2 (2019-11-09)

#### :rocket: Enhancement
* [#374](https://github.com/poteto/ember-changeset/pull/374) Minor cleanup to native JS ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#377](https://github.com/poteto/ember-changeset/pull/377) Ensure can add array of strings to addError ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v2.2.1 (2019-11-04)

#### :rocket: Enhancement
* [#373](https://github.com/poteto/ember-changeset/pull/373) Ensure closure over validation map accepts objects first ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#373](https://github.com/poteto/ember-changeset/pull/373) Ensure closure over validation map accepts objects first ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v2.2.0 (2019-11-04)

#### :rocket: Enhancement
* [#372](https://github.com/poteto/ember-changeset/pull/372) [Minor]: Allow changeset to accept validation map ([@snewcomer](https://github.com/snewcomer))
* [#368](https://github.com/poteto/ember-changeset/pull/368) Cleanup ts build ([@snewcomer](https://github.com/snewcomer))

#### :house: Internal
* [#370](https://github.com/poteto/ember-changeset/pull/370) array set test ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v2.1.3 (2019-10-20)

#### :rocket: Enhancement
* [#366](https://github.com/poteto/ember-changeset/pull/366) Keep property descriptors on assign ([@snewcomer](https://github.com/snewcomer))
* [#367](https://github.com/poteto/ember-changeset/pull/367) Update 3.8 ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#366](https://github.com/poteto/ember-changeset/pull/366) Keep property descriptors on assign ([@snewcomer](https://github.com/snewcomer))
* [#365](https://github.com/poteto/ember-changeset/pull/365) Fix null/falsey results ([@snewcomer](https://github.com/snewcomer))

#### :memo: Documentation
* [#362](https://github.com/poteto/ember-changeset/pull/362) Update CHANGELOG.md ([@SergeAstapov](https://github.com/SergeAstapov))

#### Committers: 2
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))
- Sergey Astapov ([@SergeAstapov](https://github.com/SergeAstapov))


## v2.1.2 (2019-06-04)

#### :rocket: Enhancement
* [#355](https://github.com/poteto/ember-changeset/pull/355) Fix push errors to update error property pr ([@alexspeller](https://github.com/alexspeller))

#### Committers: 1
- Alex Speller ([@alexspeller](https://github.com/alexspeller))


## v2.1.1 (2019-05-24)

#### :bug: Bug Fix
* [#352](https://github.com/poteto/ember-changeset/pull/352) Fix validationMap type signature ([@matteodepalo](https://github.com/matteodepalo))

#### Committers: 1
- Matteo Depalo ([@matteodepalo](https://github.com/matteodepalo))


## v2.1.0 (2019-04-27)

#### :rocket: Enhancement
* [#351](https://github.com/poteto/ember-changeset/pull/351) Add changeset-get helper ([@josemarluedke](https://github.com/josemarluedke))

#### Committers: 1
- Josemar Luedke ([@josemarluedke](https://github.com/josemarluedke))


## v2.0.1 (2019-04-08)

#### :rocket: Enhancement
* [#343](https://github.com/poteto/ember-changeset/pull/343) Minor updates ([@snewcomer](https://github.com/snewcomer))
* [#341](https://github.com/poteto/ember-changeset/pull/341) Change app helper to ts ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#348](https://github.com/poteto/ember-changeset/pull/348) Optional key ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v2.0.0 (2019-02-03)

#### :rocket: Enhancement
* [#338](https://github.com/poteto/ember-changeset/pull/338) Update README ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v2.0.0-beta.0 (2019-01-07)

#### :rocket: Enhancement
* [#337](https://github.com/poteto/ember-changeset/pull/337) 2.0 beta ([@snewcomer](https://github.com/snewcomer))

#### Committers: 1
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))


## v1.6.0 (2018-12-11)

#### :rocket: Enhancement
* [#320](https://github.com/poteto/ember-changeset/pull/320) update ember-deep-set dependency ([@0xadada](https://github.com/0xadada))
* [#316](https://github.com/poteto/ember-changeset/pull/316) Move around tests and use new qunit apis ([@snewcomer](https://github.com/snewcomer))
* [#313](https://github.com/poteto/ember-changeset/pull/313) Change to use native typeof instead ([@homeslicesolutions-zz](https://github.com/homeslicesolutions-zz))
* [#312](https://github.com/poteto/ember-changeset/pull/312) Bring back m2m test ([@snewcomer](https://github.com/snewcomer))

#### :bug: Bug Fix
* [#328](https://github.com/poteto/ember-changeset/pull/328) Use deepSet when updating RUNNING_VALIDATIONS for nested key ([@SergeAstapov](https://github.com/SergeAstapov))
* [#318](https://github.com/poteto/ember-changeset/pull/318) fix when value is relation, but set as null ([@chengz](https://github.com/chengz))
* [#310](https://github.com/poteto/ember-changeset/pull/310) Rollback twice bugfix ([@snewcomer](https://github.com/snewcomer))

#### :house: Internal
* [#330](https://github.com/poteto/ember-changeset/pull/330) Fix deprecations related to Ember.merge and ember-native-dom-helpers ([@SergeAstapov](https://github.com/SergeAstapov))
* [#329](https://github.com/poteto/ember-changeset/pull/329) Fix failing build ([@SergeAstapov](https://github.com/SergeAstapov))

#### Committers: 5
- 0xADADA ([@0xadada](https://github.com/0xadada))
- Cheng Zhu ([@chengz](https://github.com/chengz))
- Joe Vu ([@homeslicesolutions-zz](https://github.com/homeslicesolutions-zz))
- Scott Newcomer ([@snewcomer](https://github.com/snewcomer))
- Sergey Astapov ([@SergeAstapov](https://github.com/SergeAstapov))
