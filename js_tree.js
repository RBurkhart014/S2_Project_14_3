"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 12
   Case Problem 3

   Author: Ryan Burkhart
   Date: 4/8/19  

   Filename: js_tree.js

   Global Variables:
   nodeCount
      Running count of all nodes in the source document
   elementCount
      Running count of all element nodes in the source document
   textCount
      Running count of all text nodes in the source document
   wsCount
      Running count of all white space text nodes in the source document


   Functions List:
   makeTree() 
      Sets up and places the node tree within the HTML document and
      displays the node counts from the document

   makeBranches(treeNode, nestedList)
      Makes a list item or an ordered list based on the contents and type
      of node from the sourceNode parameter and then appends that list
      item or ordered list to nestedList. The function recursively calls 
      itself to navigate throught the node tree of the source document.

   isWhiteSpaceNode(tString)
      Returns true if tString represents the text of a white space text
      node and false if it doesn't
*/

window.onload = makeTree;

var nodeCount = 0;
var elemCount = 0;
var textCount = 0;
var wsCount = 0; 

function makeTree() {
     var aside = document.createElement("aside");
     aside.setAttribute("id", "treeBox");
     var h1 = document.createElement("h1");
     var hText = document.createTextNode("Node Tree");
     h1.appendChild(hText);
     aside.appendChild(h1);
     document.getElementById("main").appendChild(aside);

     var nodeList = document.createElement("ol");
     aside.appendChild(nodeList);

     var sourceArticle = document.querySelectorAll("#mainarticle");

     makeBranches(sourceArticle, nodeList);
}

function makeBranches(treeNode, nestedList) {
      nodeCount += 1;
      var liElem = document.createElement("li");
      var spanElem = document.createElement("span");
      liElem.appendChild(spanElem);
      nestedList.appendChild(liElem);
}





function isWhiteSpaceNode(tString) {
   return !(/[^\t\n\r ]/.test(tString));
}
