// This file unfortunately has to be in the root of our project it is required by: "eslint-plugin-local" https://github.com/taskworld/eslint-plugin-local?tab=readme-ov-file#usage
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
