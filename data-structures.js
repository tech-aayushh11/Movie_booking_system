/**
 * CineBook — Data Structures & Algorithms
 * ─────────────────────────────────────────
 * Genuine implementations for the FDS (Fundamentals of Data Structures)
 * syllabus at JSPM's Rajarshi Shahu College of Engineering, Pune.
 *
 * Implemented:
 *   1. Arrays (used throughout for movie/theatre/seat storage)
 *   2. Singly Linked List (BookingLinkedList) — for booking history
 *   3. Linear Search — O(n)
 *   4. Binary Search — O(log n) on sorted data
 *   5. Bubble Sort — O(n²)
 *   6. Selection Sort — O(n²)
 */

"use strict";

// ══════════════════════════════════════════════════════════
// 1. SINGLY LINKED LIST — Booking History
// ══════════════════════════════════════════════════════════

/**
 * BookingNode — a single node in the singly linked list.
 * Each node holds one booking record and a pointer to the next node.
 *
 * Memory model:
 *   [data | next] → [data | next] → [data | next] → null
 */
class BookingNode {
  /**
   * @param {Object} bookingData — the booking record object
   */
  constructor(bookingData) {
    this.data = bookingData; // payload
    this.next = null;        // pointer to next node
  }
}

/**
 * BookingLinkedList — Singly linked list of booking records.
 *
 * Operations and their time complexities:
 *   insertAtHead  → O(1)
 *   insertAtTail  → O(n)
 *   traverse      → O(n)
 *   searchById    → O(n)
 *   deleteById    → O(n)
 *   toArray       → O(n)
 *   size          → O(1) (tracked via counter)
 */
class BookingLinkedList {
  constructor() {
    this.head = null; // pointer to first node
    this.count = 0;   // track length in O(1)
  }

  /**
   * insertAtHead — Insert a new booking at the beginning of the list.
   * Time: O(1) — only the head pointer changes.
   * @param {Object} bookingData
   */
  insertAtHead(bookingData) {
    const newNode = new BookingNode(bookingData);
    newNode.next = this.head;
    this.head = newNode;
    this.count++;
    return newNode;
  }

  /**
   * insertAtTail — Insert a new booking at the end of the list.
   * Time: O(n) — must traverse to the last node.
   * @param {Object} bookingData
   */
  insertAtTail(bookingData) {
    const newNode = new BookingNode(bookingData);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.count++;
    return newNode;
  }

  /**
   * traverse — Visit every node in order and collect data.
   * Time: O(n)
   * @returns {Array} array of booking data objects
   */
  traverse() {
    const result = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  /**
   * searchById — Linear search through the list for a booking ID.
   * Time: O(n) — may visit every node in the worst case.
   * @param {string} bookingId
   * @returns {BookingNode|null}
   */
  searchById(bookingId) {
    let current = this.head;
    while (current !== null) {
      if (current.data.id === bookingId) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  /**
   * deleteById — Remove a node by booking ID.
   * Time: O(n) — may traverse to the node before the target.
   * @param {string} bookingId
   * @returns {Object|null} deleted booking data, or null if not found
   */
  deleteById(bookingId) {
    if (this.head === null) return null;

    // Special case: target is the head
    if (this.head.data.id === bookingId) {
      const deleted = this.head.data;
      this.head = this.head.next;
      this.count--;
      return deleted;
    }

    // General case: find the node just before the target
    let prev = this.head;
    let current = this.head.next;
    while (current !== null) {
      if (current.data.id === bookingId) {
        prev.next = current.next; // bypass the node
        this.count--;
        return current.data;
      }
      prev = current;
      current = current.next;
    }
    return null; // not found
  }

  /**
   * updateById — Find a node and update its data fields.
   * Time: O(n)
   * @param {string} bookingId
   * @param {Object} updates — fields to merge into the booking
   * @returns {boolean} true if updated, false if not found
   */
  updateById(bookingId, updates) {
    const node = this.searchById(bookingId);
    if (!node) return false;
    Object.assign(node.data, updates);
    return true;
  }

  /**
   * toArray — Convert the list to a plain JavaScript array.
   * Time: O(n)
   * @returns {Array}
   */
  toArray() {
    return this.traverse();
  }

  /**
   * size — Return the number of nodes.
   * Time: O(1) — tracked via counter.
   * @returns {number}
   */
  size() {
    return this.count;
  }

  /**
   * isEmpty — Check if the list has no nodes.
   * @returns {boolean}
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * fromArray — Rebuild the list from a serialized array.
   * Used to restore bookings from LocalStorage on page load.
   * Time: O(n)
   * @param {Array} arr
   */
  fromArray(arr) {
    this.head = null;
    this.count = 0;
    // Insert in original order (tail insertion preserves order)
    arr.forEach(item => this.insertAtTail(item));
  }
}

// ══════════════════════════════════════════════════════════
// 2. SEARCHING ALGORITHMS
// ══════════════════════════════════════════════════════════

/**
 * linearSearch — Find the index of a movie by title (case-insensitive).
 *
 * Algorithm: Check every element one by one from index 0 to n-1.
 * Best case:  O(1) — target is at index 0
 * Worst case: O(n) — target is at last index or absent
 * Space:      O(1) — no extra data structure needed
 *
 * @param {Array}  arr    — array of movie objects
 * @param {string} query  — search term
 * @param {string} field  — property to search on (default: 'title')
 * @returns {{ index: number, steps: number, found: boolean }}
 */
function linearSearch(arr, query, field = "title") {
  const q = query.toLowerCase();
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    steps++;
    const val = String(arr[i][field] || "").toLowerCase();
    if (val.includes(q)) {
      return { index: i, item: arr[i], steps, found: true };
    }
  }
  return { index: -1, item: null, steps, found: false };
}

/**
 * binarySearch — Find a movie by numeric ID on a SORTED array.
 *
 * Algorithm: Repeatedly halve the search space.
 *   mid = Math.floor((lo + hi) / 2)
 *   if arr[mid].id === target → found
 *   if arr[mid].id < target  → search right half
 *   if arr[mid].id > target  → search left half
 *
 * PRECONDITION: arr must be sorted in ascending order by the key field.
 * Best case:  O(1) — target is at the middle
 * Worst case: O(log n) — halving until 1 element remains
 * Space:      O(1) — iterative version uses no extra stack
 *
 * @param {Array}   arr    — sorted array
 * @param {number}  target — value to search for
 * @param {string}  key    — property name to compare (default: 'id')
 * @returns {{ index: number, steps: number, found: boolean }}
 */
function binarySearch(arr, target, key = "id") {
  let lo = 0;
  let hi = arr.length - 1;
  let steps = 0;
  const log = [];

  while (lo <= hi) {
    steps++;
    const mid = Math.floor((lo + hi) / 2);
    const midVal = arr[mid][key];
    log.push({ lo, hi, mid, midVal, comparison: midVal === target ? "==" : midVal < target ? "<" : ">" });

    if (midVal === target) {
      return { index: mid, item: arr[mid], steps, found: true, log };
    } else if (midVal < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return { index: -1, item: null, steps, found: false, log };
}

// ══════════════════════════════════════════════════════════
// 3. SORTING ALGORITHMS
// ══════════════════════════════════════════════════════════

/**
 * bubbleSort — Sort an array of objects by a numeric field.
 *
 * Algorithm: Repeatedly compare adjacent pairs; swap if out of order.
 *   After each full pass the largest unsorted element "bubbles" to the end.
 *   Optimization: stop early if no swaps occurred in a pass.
 *
 * Best case:  O(n)   — already sorted (with early-exit optimization)
 * Worst case: O(n²)  — reverse sorted
 * Space:      O(1)   — in-place, only a temp variable for swaps
 *
 * @param {Array}  arr       — array to sort (will be copied, not mutated)
 * @param {string} key       — numeric property to sort by
 * @param {string} order     — 'asc' or 'desc'
 * @returns {{ sorted: Array, steps: number, swaps: number, passes: number, log: Array }}
 */
function bubbleSort(arr, key = "price", order = "asc") {
  const a = arr.map(item => ({ ...item })); // shallow copy
  const n = a.length;
  let steps = 0;
  let swaps = 0;
  let passes = 0;
  const log = [];

  for (let i = 0; i < n - 1; i++) {
    passes++;
    let swappedInThisPass = false;
    for (let j = 0; j < n - 1 - i; j++) {
      steps++;
      const cmp = order === "asc"
        ? a[j][key] > a[j + 1][key]
        : a[j][key] < a[j + 1][key];
      log.push({ pass: i + 1, comparing: [j, j + 1], values: [a[j][key], a[j + 1][key]], swapped: cmp });
      if (cmp) {
        // swap
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swaps++;
        swappedInThisPass = true;
      }
    }
    if (!swappedInThisPass) break; // early exit — already sorted
  }

  return { sorted: a, steps, swaps, passes, log };
}

/**
 * selectionSort — Sort an array of objects by a numeric field.
 *
 * Algorithm: On each pass, find the minimum (or maximum) element
 *   in the unsorted portion and swap it into position.
 *
 * Best case:  O(n²) — always makes n*(n-1)/2 comparisons regardless
 * Worst case: O(n²)
 * Space:      O(1)  — in-place
 *
 * Unlike Bubble Sort, Selection Sort makes at most n-1 swaps,
 * which is useful when write operations are expensive.
 *
 * @param {Array}  arr   — array to sort (will be copied, not mutated)
 * @param {string} key   — numeric property to sort by
 * @param {string} order — 'asc' or 'desc'
 * @returns {{ sorted: Array, steps: number, swaps: number, passes: number, log: Array }}
 */
function selectionSort(arr, key = "price", order = "asc") {
  const a = arr.map(item => ({ ...item })); // shallow copy
  const n = a.length;
  let steps = 0;
  let swaps = 0;
  let passes = 0;
  const log = [];

  for (let i = 0; i < n - 1; i++) {
    passes++;
    let extremeIdx = i;
    for (let j = i + 1; j < n; j++) {
      steps++;
      const cmp = order === "asc"
        ? a[j][key] < a[extremeIdx][key]
        : a[j][key] > a[extremeIdx][key];
      log.push({ pass: i + 1, comparing: [j, extremeIdx], values: [a[j][key], a[extremeIdx][key]], newExtreme: cmp });
      if (cmp) extremeIdx = j;
    }
    if (extremeIdx !== i) {
      [a[i], a[extremeIdx]] = [a[extremeIdx], a[i]];
      swaps++;
      log.push({ pass: i + 1, swapped: [i, extremeIdx] });
    }
  }

  return { sorted: a, steps, swaps, passes, log };
}

// ══════════════════════════════════════════════════════════
// 4. COMPLEXITY TABLE (for DSA Lab display)
// ══════════════════════════════════════════════════════════

const COMPLEXITY_TABLE = [
  {
    algorithm: "Linear Search",
    purpose: "Find a movie by title in an unsorted list",
    best: "O(1)",
    average: "O(n)",
    worst: "O(n)",
    space: "O(1)",
    notes: "Checks each element until target is found or list ends. Simple but slow for large datasets."
  },
  {
    algorithm: "Binary Search",
    purpose: "Find a movie by ID in a sorted collection",
    best: "O(1)",
    average: "O(log n)",
    worst: "O(log n)",
    space: "O(1)",
    notes: "Requires a pre-sorted array. Eliminates half the search space on every comparison."
  },
  {
    algorithm: "Bubble Sort",
    purpose: "Sort movies by ticket price or rating",
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    notes: "Best case O(n) with early-exit when no swaps occur in a pass. Makes many swaps."
  },
  {
    algorithm: "Selection Sort",
    purpose: "Sort movies by ticket price or rating",
    best: "O(n²)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    notes: "Always makes n*(n-1)/2 comparisons. At most n-1 swaps — efficient when writes are costly."
  },
  {
    algorithm: "Linked List — Insert at Head",
    purpose: "Add a new booking to the history (newest first)",
    best: "O(1)",
    average: "O(1)",
    worst: "O(1)",
    space: "O(1) per node",
    notes: "Only the head pointer changes. Constant time regardless of list length."
  },
  {
    algorithm: "Linked List — Insert at Tail",
    purpose: "Append a booking to the end of history",
    best: "O(n)",
    average: "O(n)",
    worst: "O(n)",
    space: "O(1) per node",
    notes: "Must traverse the entire list to reach the last node. Use a tail pointer for O(1)."
  },
  {
    algorithm: "Linked List — Search by ID",
    purpose: "Find a specific booking to update or cancel",
    best: "O(1)",
    average: "O(n)",
    worst: "O(n)",
    space: "O(1)",
    notes: "Linear traversal through nodes. No random access like arrays."
  },
  {
    algorithm: "Linked List — Traversal",
    purpose: "Render full booking history on the screen",
    best: "O(n)",
    average: "O(n)",
    worst: "O(n)",
    space: "O(n) result",
    notes: "Must visit every node exactly once to collect all bookings."
  },
  {
    algorithm: "Array — Access by Index",
    purpose: "Get a specific seat or theatre instantly",
    best: "O(1)",
    average: "O(1)",
    worst: "O(1)",
    space: "O(1)",
    notes: "Arrays support constant-time random access via index — unlike linked lists."
  }
];

// ══════════════════════════════════════════════════════════
// 5. GLOBAL BOOKING LINKED LIST (singleton)
// ══════════════════════════════════════════════════════════

const bookingList = new BookingLinkedList();

/**
 * persistBookingList — Serialize the linked list to LocalStorage.
 */
function persistBookingList() {
  const arr = bookingList.toArray();
  localStorage.setItem("cinebook_bookings", JSON.stringify(arr));
}

/**
 * restoreBookingList — Load bookings from LocalStorage back into the linked list.
 * Called once on application start.
 */
function restoreBookingList() {
  try {
    const raw = localStorage.getItem("cinebook_bookings");
    if (raw) {
      const arr = JSON.parse(raw);
      bookingList.fromArray(arr);
    }
  } catch (e) {
    console.warn("CineBook: Could not restore booking list", e);
  }
}

/**
 * addBooking — Create and insert a booking record into the linked list and LocalStorage.
 * @param {Object} bookingData
 * @returns {Object} the booking data with its generated ID
 */
function addBooking(bookingData) {
  const id = "CB" + Date.now().toString(36).toUpperCase() + Math.random().toString(36).slice(2, 6).toUpperCase();
  const booking = { ...bookingData, id, createdAt: new Date().toISOString(), status: "confirmed" };
  bookingList.insertAtHead(booking);
  persistBookingList();
  return booking;
}

/**
 * cancelBooking — Mark a booking as cancelled and release its seats.
 * @param {string} bookingId
 * @returns {boolean}
 */
function cancelBooking(bookingId) {
  const updated = bookingList.updateById(bookingId, { status: "cancelled", cancelledAt: new Date().toISOString() });
  if (updated) persistBookingList();
  return updated;
}

/**
 * getAllBookings — Return the full booking list as a plain array.
 * @returns {Array}
 */
function getAllBookings() {
  return bookingList.toArray();
}

/**
 * getBookingById — Search the linked list for a booking by ID.
 * @param {string} bookingId
 * @returns {Object|null}
 */
function getBookingById(bookingId) {
  const node = bookingList.searchById(bookingId);
  return node ? node.data : null;
}

// ══════════════════════════════════════════════════════════
// 6. SEAT AVAILABILITY (via LocalStorage)
// ══════════════════════════════════════════════════════════

function getSeatAvailabilityKey(theatreId, showId) {
  return `cinebook_seats_${theatreId}_${showId}`;
}

function getOccupiedSeats(theatreId, showId) {
  const key = getSeatAvailabilityKey(theatreId, showId);
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function occupySeats(theatreId, showId, seatIds) {
  const current = getOccupiedSeats(theatreId, showId);
  const merged = [...new Set([...current, ...seatIds])];
  localStorage.setItem(getSeatAvailabilityKey(theatreId, showId), JSON.stringify(merged));
}

function releaseSeats(theatreId, showId, seatIds) {
  const current = getOccupiedSeats(theatreId, showId);
  const updated = current.filter(id => !seatIds.includes(id));
  localStorage.setItem(getSeatAvailabilityKey(theatreId, showId), JSON.stringify(updated));
}

function areSeatsAvailable(theatreId, showId, seatIds) {
  const occupied = getOccupiedSeats(theatreId, showId);
  return seatIds.every(id => !occupied.includes(id));
}

// ──────────────────────────────────────────────
// EXPORTS (global scope for browser)
// ──────────────────────────────────────────────
if (typeof window !== "undefined") {
  window.DSA = {
    // Classes
    BookingNode,
    BookingLinkedList,
    // Algorithms
    linearSearch,
    binarySearch,
    bubbleSort,
    selectionSort,
    // Metadata
    COMPLEXITY_TABLE,
    // Booking management
    bookingList,
    addBooking,
    cancelBooking,
    getAllBookings,
    getBookingById,
    persistBookingList,
    restoreBookingList,
    // Seat availability
    getOccupiedSeats,
    occupySeats,
    releaseSeats,
    areSeatsAvailable
  };
}
