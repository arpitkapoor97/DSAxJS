// https://leetcode.com/problems/reverse-linked-list/

var reverseList = function(head) {
    if(!head || !head.next){
        return head;
    }
    let prev = head;
    let curr = head.next;   
    head.next = null;
    while(curr && curr.next){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    curr.next = prev;
    return curr;
};