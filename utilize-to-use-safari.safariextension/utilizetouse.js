// I stole all this stuff from here: https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js

walk(document.body);

function walk(node) {
  // I stole this function from here:
  // http://is.gd/mwZp7E
  var child, next;
  
  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;
    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode)  {
  var v = textNode.nodeValue;
  
  v = v.replace(/\bUtilize\b/g, "Use");
  v = v.replace(/\butilize\b/g, "use");
  v = v.replace(/\bUtilise\b/g, "Use");
  v = v.replace(/\butilise\b/g, "use");
  
  v = v.replace(/\bUtilized\b/g, "Used");
  v = v.replace(/\butilized\b/g, "used");
  v = v.replace(/\bUtilised\b/g, "Used");
  v = v.replace(/\butilised\b/g, "used");
  
  v = v.replace(/\bObligate\b/g, "Oblige");
  v = v.replace(/\bobligate\b/g, "oblige");
  
  textNode.nodeValue = v;
}
