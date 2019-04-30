/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * 先序
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
   if(!root) {
    return []
   }
   let relust = []
   const callback = (val) => {
      relust.push(val)
   }
   const preorder = (node, cb) => {
      if(node){
         cb(node.val)
         node.left && preorder(node.left, cb)
         node.right && preorder(node.right, cb)
      }
   }
   preorder(root, callback)
   return relust;
};


/**
 * 中序
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
   if(!root) {
      return []
     }
     let relust = []
     const callback = (val) => {
        relust.push(val)
     }
     const inorder = (node, cb) => {
        if(node){
           node.left && inorder(node.left, cb)
           cb(node.val)
           node.right && inorder(node.right, cb)
        }
     }
     inorder(root, callback)
     return relust;
};

/**
 * 后序
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
   if(!root) {
      return []
     }
     let relust = []
     const callback = (val) => {
        relust.push(val)
     }
     const postorder = (node, cb) => {
        if(node){
           node.left && postorder(node.left, cb)
           node.right && postorder(node.right, cb)
           cb(node.val)
        }
     }
     postorder(root, callback)
     return relust;
};

/**
 * 层级遍历 广度优先搜索
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
   if(!root) {
      return []
   }
   let relust = []
   const callback = (val, index) => {
      if( !relust[index]) {
         relust[index] = []
      }
      relust[index].push(val)
   }
   const level = (node, cb, tier) => {
      if(node){
         cb(node.val, tier)
         ++tier 
         node.left && level(node.left, cb, tier)
         node.right && level(node.right, cb, tier) 
      }
   }
   level(root, callback, 0)
   return relust;
};

// levelOrder({val: 3, left: {val: 9}, right: {val:20, left: {val: 15}, right: {val: 7}}})

/**
 * 获取二叉树深度
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
   return levelOrder(root).length
};

/**
 * 检测是否为对称二叉树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
};