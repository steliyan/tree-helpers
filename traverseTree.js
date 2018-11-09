var traverseTree = function(rootNode, func, getChildren, createNode) {
  var stack = [rootNode];
  while (stack.length) {
    var node = stack.pop();
    func(node);

    getChildren(node).forEach(function(c, index) {
      stack.push(createNode(node, c, index));
    });
  }
};

module.exports = traverseTree;
