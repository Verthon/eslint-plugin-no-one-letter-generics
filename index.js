module.exports = {
  rules: {
    'no-one-letter-generics': {
      create(context) {
        return {
          TSTypeParameter(node) {
            const typeName = node.name?.name || node.name;

            if (typeName.length === 1) {

              context.report({
                node,
                message: `Generic type parameters must have more than one letter for clarity`,
              });
            }
          },
        };
      },
    },
  },
};
