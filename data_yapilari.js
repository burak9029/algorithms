class Node {
	// constructor
	constructor(element) {
		this.element = element;
		this.next = null
	}
}
// link sınıfı
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// list elementinin sonuna ekle
	
	add(element) {
		//yeni bir mod oluştur.
		var node = new Node(element);

		// şuanki modu depola
		var current;

		// liste boşsa bir element ekle ve o element head olsun.
		// element and make it head
		if (this.head == null)
			this.head = node;
		else {
			current = this.head;

			// listenin sonunu tekrarla.
			while (current.next) {
				current = current.next;
			}

			// not ekle.
			current.next = node;
		}
		this.size++;
	}

	
	insertAt(element, index) {
		if (index < 0 || index > this.size)
			return console.log("Please enter a valid index.");
		else {
			// yenin node oluştur.
			var node = new Node(element);
			var curr, prev;

			curr = this.head;

			// ilk indexe element ekle.
			if (index == 0) {
				node.next = this.head;
				this.head = node;
			} else {
				curr = this.head;
				var it = 0;

				// tekrarlayarak başlangıç kısmının tespiti
				
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// element ekleme
				node.next = curr;
				prev.next = node;
			}
			this.size++;
		}
	}

	// belirli bir yerdeki elemeanı kaldırmak silmek için:
	removeFrom(index) {
		if (index < 0 || index >= this.size)
			return console.log("Please Enter a valid index");
		else {
			var curr, prev, it = 0;
			curr = this.head;
			prev = curr;

			// ilk elementi silmek için kullanılır.
			if (index === 0) {
				this.head = curr.next;
			} else {
				// listeyi tekrarlayarak belirlenen elementi silmek çıkarmak
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// elementi çıkarmak
				prev.next = curr.next;
			}
			this.size--;

			// silinen elementi eklemmek
			return curr.element;
		}
	}

	// listedeki elementi silmek
	removeElement(element) {
		var current = this.head;
		var prev = null;

		// bütün listeyi yenilemek
		while (current != null) {
			// silinen elemen ile şimdiki elemanın karşılaştırılması
			if (current.element === element) {
				if (prev == null) {
					this.head = current.next;
				} else {
					prev.next = current.next;
				}
				this.size--;
				return current.element;
			}
			prev = current;
			current = current.next;
		}
		return -1;
	}


	// element index ini bulmak 
	indexOf(element) {
		var count = 0;
		var current = this.head;

		// iterate over the list
		while (current != null) {
			// her bir elementi birbiri ile karşılaştırmak
			if (current.element === element)
				return count;
			count++;
			current = current.next;
		}

		// bulunamaz ise
		return -1;
	}

	// boş elemanları kontrol et.
	isEmpty() {
		return this.size == 0;
	}

	// liste büyüklüğü verir.
	size_of_list() {
		console.log(this.size);
	}


	// liste itemini yazdırır.
	printList() {
		var curr = this.head;
		var str = "";
		while (curr) {
			str += curr.element + " ";
			curr = curr.next;
		}
		console.log(str);
	}

}

// linked yani bağlanmış list için yeni bir eleman üretip eklemek için kullanılır.
var ll = new LinkedList();


console.log(ll.isEmpty());

// elementi listeye eklemek için kullanılır.
ll.add(10);

// prints 10
ll.printList();

// returns 1
console.log(ll.size_of_list());

// lsiteye eleman eklemek 
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
ll.printList();

//
console.log("is element removed ?" + ll.removeElement(50));

// prints 10 20 30 40
ll.printList();

// returns 3
console.log("Index of 40 " + ll.indexOf(40));

// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);

ll.printList();

// returns yanlış gelir. çünkü li doludur.
console.log("is List Empty ? " + ll.isEmpty());

// listedeki 3. elemanı sildi, çıkardı.
console.log(ll.removeFrom(3));

// prints 10 20 60 40
ll.printList();
