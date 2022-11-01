// Implement Linked List

class Node {
    constructor(val, next = null){
        this.val = val;
        this.next  = next;
    }
}

// const n1 = new Node(100);
// console.log(n1);

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Insert at Start 
    insertAtStart(val){
        this.head = new Node(val, this.head);
        this.size++;
    }

    // Insert at End
    insertAtEnd(val){
        const node = new Node(val);
        let curr;
        if(!this.head){
            this.head = node;
        } else {
            curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    // Insert at index
    insertAtIndex(val, idx){
        // Out of range
        if(idx > 0 && idx > this.size){
            return;
        }
        // First Index
        if(idx === 0){
            this.insertAtStart(val);
            return;
        }
        const node = new Node(val);
        let prev;
        let curr = this.head;
        let cnt = 0;
        while(cnt < idx){
            prev = curr;
            cnt++;
            curr = curr.next;
        }
        node.next = curr;
        prev.next = node;
    }

    // Get at index
    getAtIndex(idx){
        let curr = this.head;
        let cnt = 0;
        while(curr){
            if(cnt == idx){
                console.log(curr.val);
            }
            cnt++;
            curr = curr.next;
        }
        return null;
    }

    // Remove at index
    removeAtIndex(idx){
        if(idx > 0 && idx > this.size);
        let curr = this.head;
        let prev;
        let cnt = 0;
        if(idx === 0){
            this.head = curr.next;
        } else {
            while(cnt < idx){
                cnt++;
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next;
        }
        this.size--;
    }


    // Clear list
    clearList(){
        this.size = 0;
        this.head = null;
    }

    // Print Linked List
    print(){
        let curr = this.head;
        while(curr){
            console.log(curr.val);
            curr = curr.next;
        }
        console.log("<<<<<<<<< End of Linked List. Items == ", this.size);
    }

}

const myLinkedList = new LinkedList();

myLinkedList.insertAtStart(100);
myLinkedList.insertAtEnd(200);
myLinkedList.insertAtIndex(150, 1);
myLinkedList.insertAtIndex(50, 0);
myLinkedList.removeAtIndex(1);
// myLinkedList.getAtIndex(0);

myLinkedList.print();



