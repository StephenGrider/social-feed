const { camelCase } = require('lodash');

function buildProdPublicPath({ domain, name, version }) {
  return `${domain}/${name}/${version}`;
}

function buildProdRemote({ domain, fileName, name, version }) {
  const v = version.replace(/[^0-9a-z]/g, '');
  const n = camelCase(name);

  return {
    [name]: `${n}@${domain}/${n}/${v}/${fileName}`,
  };
}

function buildDevRemote({ domain, fileName, name }) {
  const n = camelCase(name);

  return {
    [name]: `${n}@${domain}/${fileName}`,
  };
}

module.exports = {
  buildProdPublicPath,
  camelCase,
  buildProdRemote,
  buildDevRemote,
};
