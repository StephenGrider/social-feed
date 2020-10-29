function normalizeName(name) {
  return name.toLowerCase().replace(/[^a-z]/g, '');
}

function buildProdPublicPath({ domain, name, version }) {
  const v = version.replace(/[^0-9a-z]/g, '');

  return `${domain}/${name}/${v}/`;
}

function buildProdRemote({ domain, name, version }) {
  const v = version.replace(/[^0-9a-z]/g, '');
  const n = normalizeName(name);
  const _fileName = 'remoteEntry.js' || fileName;

  return {
    [name]: `${n}@${domain}/${n}/${v}/${_fileName}`,
  };
}

function buildDevRemote({ domain, fileName, name }) {
  const n = normalizeName(name);
  const _fileName = 'remoteEntry.js' || fileName;

  return {
    [name]: `${n}@${domain}/${_fileName}`,
  };
}

module.exports = {
  buildProdPublicPath,
  normalizeName,
  buildProdRemote,
  buildDevRemote,
};
