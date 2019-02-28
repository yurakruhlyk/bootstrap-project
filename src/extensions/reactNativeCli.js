const { attachExtensions, condStr } = require('../utils');

module.exports = (toolbox) => {
  function checkCli() {
    // eslint-disable-next-line global-require
    const commandExists = require('command-exists');

    return commandExists('react-native');
  }

  function init({ name, shouldUseNpm, version }) {
    // prettier-ignore
    return toolbox.system.run(
      // eslint-disable-next-line max-len
      `react-native init ${name} ${condStr(shouldUseNpm, '--npm')} ${condStr(version, `--version ${version}`)}`,
    );
  }

  attachExtensions(toolbox, 'rn', {
    checkCli,
    init,
  });
};
