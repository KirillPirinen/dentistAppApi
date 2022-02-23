const models = require("../../db/models")

const graphiqlToSequelize = ({ selectionSet: { selections } }) => {
  const include = [];
  const attributes = [];

  selections.forEach(field => {
    const attrName = field.name.value
    const charCode = attrName.charCodeAt(0)

    if(charCode >= 65 && charCode <= 90) {
      include.push({
        model:models[attrName],
        ...graphiqlToSequelize(field)
      })
    } else {
      attributes.push(attrName)
    }

  });

  return { attributes, include }
  
};

module.exports = graphiqlToSequelize
