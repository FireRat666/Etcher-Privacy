module.exports = {
  getGitReferenceFromVersion: 'v-prefix',

  addEntryToChangelog: {
    preset: 'prepend',
    fromLine: 5,
  },

  template: 'default',

  includeCommitWhen: () => true,
  getIncrementLevelFromCommit: () => 'patch',
};
