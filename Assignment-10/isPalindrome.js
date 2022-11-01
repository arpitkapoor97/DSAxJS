// https://leetcode.com/problems/palindrome-linked-list/submissions/

var isPalindrome = function (head) {
    // APPROACH:

    // find Middle
    // reverse linked list after middle
    // check both lists
    var reverseList = function (head) {
        if (!head || !head.next) {
            return head;
        }
        let prev = head;
        let curr = head.next;
        head.next = null;
        while (curr && curr.next) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        curr.next = prev;
        return curr;
    };

    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let mid = slow;
    let end;
    if (fast) {
        end = reverseList(mid);
    } else {
        end = reverseList(mid.next)
    }

    let start = head;
    let str1 = "";
    let str2 = "";

    while (end.next) {
        if (start.val !== end.val) {
            return false;
        }
        str1 += start.val;
        str2 += end.val;
        start = start.next;
        end = end.next;
    }
    // console.log(str1, str2);
    return true;

};