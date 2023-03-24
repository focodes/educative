function showChild (node, index){
  let c = node.children;
  if (index < 0 || (c && index >= c.length)){
    return "Wrong Index";
  }
  else if (node.childNodes[index] === undefined){
    return "Wrong Node Type";
  }
  else{
    return node.childNodes[index].nodeName;
  }
}