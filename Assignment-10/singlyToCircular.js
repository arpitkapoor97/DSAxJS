function singlyToCircular(head) {
    let temp = head;
    while (!temp.next){
        temp = temp.next;
    }
    temp.next = head;
    return head;
}