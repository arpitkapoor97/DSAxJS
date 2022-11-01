// https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1

function segregate(head) {
    let zeros = 0;
    let ones = 0;
    let twos = 0;

    let curr = head;
    while (curr) {
        switch (curr.data) {
            case 0:
                zeros++;
                break;
            case 1:
                ones++;
                break;
            case 2:
                twos++;
                break;
        }
        curr = curr.next;
    }

    let temp = head;
    while (zeros > 0) {
        temp.data = 0;
        temp = temp.next;
        zeros--;
    }
    while (ones > 0) {
        temp.data = 1;
        temp = temp.next;
        ones--;
    }
    while (twos > 0) {
        temp.data = 2;
        temp = temp.next;
        twos--;
    }
    return head;
}


// Better Approach : If there are N segregations
segregate(head)
    {
        if (!head || !(head.next))
            return head;
      
        //creating three dummy nodes to point to beginning of the linked lists.
        let zeroD = new Node(0); 
        let oneD = new Node(0); 
        let twoD = new Node(0); 
      
        //initializing current pointers for three lists.
        let zero = zeroD, one = oneD, two = twoD; 
      
        let curr = head;
        //traversing over the list with a pointer.
        while (curr) {
            
            //we check data at current node and store the node in it's 
            //respective list and update the link part of that list.
            if (curr.data == 0) { 
                zero.next = curr; 
                zero = zero.next; 
                curr = curr.next; 
            } 
            else if (curr.data == 1) { 
                one.next = curr; 
                one = one.next; 
                curr = curr.next; 
            }
            else { 
                two.next = curr; 
                two = two.next; 
                curr = curr.next; 
            } 
        } 
      
        //attaching the three lists containing 0s,1s and 2s respectively.
        if(oneD.next){
            zero.next = oneD.next;
        }
        else{
            zero.next = twoD.next;
        }
        one.next = twoD.next; 
        two.next = null; 
      
        //updating the head of the list.
        head = zeroD.next; 
      
        //deleting dummy nodes.
        zeroD = null; 
        oneD = null; 
        twoD = null; 
      
        return head;
    }