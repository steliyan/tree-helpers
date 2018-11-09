var traverseTree = require("./traverseTree");

var noop = function() {};

var oneToOneCloneNode = function(node, parent) {
  var nodeCopy = {
    name: node.name,
    children: []
  };

  if (parent) {
    parent.children.push(nodeCopy);
  }

  return nodeCopy;
};

var cloneTree = function(node, cloneNode) {
  cloneNode = cloneNode || oneToOneCloneNode;
  var nodeCopy = cloneNode(node);

  traverseTree(
    { original: node, copy: nodeCopy },
    noop,
    function(node) {
      return node.original.children || [];
    },
    function(node, child, index) {
      return {
        original: child,
        copy: cloneNode(child, node.copy, index)
      };
    }
  );

  return nodeCopy;
};

module.exports = cloneTree;
