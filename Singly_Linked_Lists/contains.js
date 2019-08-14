// Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. Given a ListNode pointer and a val, return whether val is found in any node in the list.

// Continuation of last assignment.
    contains(value) {
        let current = this.head;

        while (current !== null) {
        if (current.value === value) {
            return true;
        }

        current = current.next;
        }

        return false;
    }
