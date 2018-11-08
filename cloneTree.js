const traverseTree = require("./traverseTree");

const noop = () => {};

const oneToOneCloneNode = (node, parent) => {
  const nodeCopy = {
    name: node.name,
    children: []
  };

  if (parent) {
    parent.children.push(nodeCopy);
  }

  return nodeCopy;
};

const cloneTree = (node, cloneNode = oneToOneCloneNode) => {
  const nodeCopy = cloneNode(node);

  traverseTree(
    { original: node, copy: nodeCopy },
    noop,
    ({ original: { children = [] } }) => children,
    ({ copy }, child, index) => ({
      original: child,
      copy: cloneNode(child, copy, index)
    })
  );

  return nodeCopy;
};

module.exports = cloneTree;
