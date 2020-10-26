function normalizeName(name) {
  return name.toLowerCase().replace(/[^a-z]/g, '');
}

function buildProdPublicPath({ domain, name, version }) {
  const v = version.replace(/[^0-9a-z]/g, '');

  return `${domain}/${name}/${v}/`;
}

function buildProdRemote({ domain, fileName, name, version }) {
  const v = version.replace(/[^0-9a-z]/g, '');
  const n = normalizeName(name);

  return {
    [name]: `${n}@${domain}/${n}/${v}/${fileName}`,
  };
}

function buildDevRemote({ domain, fileName, name }) {
  const n = normalizeName(name);

  return {
    [name]: `${n}@${domain}/${fileName}`,
  };
}

module.exports = {
  buildProdPublicPath,
  normalizeName,
  buildProdRemote,
  buildDevRemote,
};
