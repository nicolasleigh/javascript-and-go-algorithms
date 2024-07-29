package main

/*   Below is the interface for Iterator, which is already defined for you.
 *
 *   type Iterator struct {
 *
 *   }
 *
 *   func (this *Iterator) hasNext() bool {
 *		// Returns true if the iteration has more elements.
 *   }
 *
 *   func (this *Iterator) next() int {
 *		// Returns the next element in the iteration.
 *   }
 */

func advanceIterator(pIter *PeekingIterator) {
	if pIter.iter.hasNext() {
		pIter.nextVal = pIter.iter.next()
	} else {
		pIter.isEmpty = true
	}
}

type PeekingIterator struct {
	iter    *Iterator
	nextVal int
	isEmpty bool
}

func Constructor(iter *Iterator) *PeekingIterator {
	pIter := new(PeekingIterator)
	pIter.iter = iter
	advanceIterator(pIter)
	return pIter
}

func (this *PeekingIterator) hasNext() bool {
	return !this.isEmpty
}

func (this *PeekingIterator) next() int {
	nxt := this.nextVal
	advanceIterator(this)
	return nxt
}

func (this *PeekingIterator) peek() int {
	return this.nextVal
}
