const models = require("../../../db/models");
const isCapital = require("./is-capital");

const graphiqlToSequelizeSimple = ({ selectionSet: { selections } }) => {
  const attributes = [];

  selections.forEach(field => {
    const attrName = field.name.value
    if(!isCapital(attrName) && attrName[0] !== '_') {
      attributes.push(attrName)
    }
  });

  return attributes
  
};

const graphiqlToSequelizeNested = ({ selectionSet: { selections } }) => {
  const include = [];
  const attributes = [];

  selections.forEach(field => {
    const attrName = field.name.value

    if(isCapital(attrName)) {
      include.push({
        model:models[attrName],
        ...graphiqlToSequelizeNested(field)
      })
    } else if (attrName[0] !== '_') {
      attributes.push(attrName)
    }

  });

  return { attributes, include }
  
};

module.exports = {
  graphiqlToSequelizeNested,
  graphiqlToSequelizeSimple
}
