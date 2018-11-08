const traverseTree = (rootNode, func, getChildren, createNode) => {
  const stack = [rootNode];
  while (stack.length) {
    const node = stack.pop();
    func(node);

    getChildren(node).forEach((c, index) =>
      stack.push(createNode(node, c, index))
    );
  }
};

module.exports = traverseTree;
