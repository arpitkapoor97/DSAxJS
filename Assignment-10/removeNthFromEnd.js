// https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/

var removeNthFromEnd = function(head, n) {
    let len = 0;
    let curr = head;
    while(curr){
        len++;
        curr = curr.next;
    }
    let curr1 = head;
    let pos = len - n;
    
    if(pos == 0){
        return head.next;
    }
    
    while(pos > 1){
        curr1 = curr1.next;
        pos--;
    }
    curr1.next = curr1.next.next;
    return head;
};