# CineBook 🎬

**A fully functional movie ticket booking system** built as a college mini project for **Fundamentals of Data Structures (FDS)** at **JSPM's Rajarshi Shahu College of Engineering, Pune**.

> **Demo Data Notice:** All showtime, seat, and availability data is a snapshot reference from the supplied screenshots (23 Oct, Fri). No live booking system, payment gateway, or real API is used.

---

## 🚀 Quick Start

No server or build step required. This is a pure HTML/CSS/JavaScript application.

```bash
# Option 1: Open directly in a browser
# Double-click index.html or open it with your browser

# Option 2: Serve with Python (recommended for consistent behaviour)
python -m http.server 8080
# Then open http://localhost:8080

# Option 3: Use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

---

## 📁 Project Structure

```
FDS_Miniproject/
├── index.html          — Home & movie discovery
├── movie.html          — Movie details (Udta Teer)
├── theatres.html       — Theatre & showtime selection
├── seats.html          — Cinema seat map & selection
├── checkout.html       — Booking details & confirmation
├── confirmation.html   — Booking success page
├── bookings.html       — Booking history
├── dsa.html            — FDS DSA Lab (interactive demos)
│
├── styles.css          — Complete shared stylesheet
├── data.js             — Movie, theatre, showtime & seat data
├── data-structures.js  — Custom DSA implementations + booking logic
├── app.js              — Shared utilities & session management
│
├── poster.jpg          — Udta Teer movie poster
├── backdrop.jpg        — Udta Teer cinematic backdrop
└── README.md           — This file
```

---

## 🎬 Movie & Theatre Data (from screenshots)

### Movie: Udta Teer
| Field | Value |
|-------|-------|
| Language | Hindi |
| Certification | UA13+ |
| Runtime | 2h 18m |
| Released | 23rd October |
| Cast | Ayushmann Khurrana, Sara Ali Khan |
| Director | Akash A. Kaushik |
| Genres | Spy, Comedy |
| Hype | 5.6k+ fans |

### Theatres & Showtimes (23 Oct snapshot)
| Theatre | Showtime | Price | Format |
|---------|----------|-------|--------|
| Cinepolis Seasons Mall, Hadapsar | 11:00 PM | ₹290 onwards | QSC 7.1 |
| Cinepolis Seasons Mall, Hadapsar | 11:45 PM | ₹310 onwards | QSC 7.1 |
| INOX Megaplex, Wakad | 9:30 PM | ₹310 onwards | — |
| INOX Megaplex, Wakad | 10:30 PM | ₹310 onwards | — |
| INOX Megaplex, Wakad | 11:00 PM | ₹750 onwards | INSIGNIA |
| PVR Grand Highstreet Mall, Hinjawadi | 10:00 PM | ₹300 onwards | PXL |
| PVR Grand Highstreet Mall, Hinjawadi | 11:55 PM | ₹99 onwards | — |
| INOX Elpro City Square, Chinchwad | 10:55 PM | ₹130 onwards | — |
| INOX Elpro City Square, Chinchwad | 11:55 PM | ₹130 onwards | — |

### Seat Categories (Cinepolis)
| Category | Price |
|----------|-------|
| Premium Plus (rows A–C) | ₹330 |
| Premium (rows D–G) | ₹310 |
| Executive (rows H–K) | ₹300 |
| Normal (rows L–O) | ₹290 |

---

## 📚 Data Structures & Algorithms Implemented

All implementations are in [`data-structures.js`](data-structures.js) with full educational comments.

### 1. Arrays
- Used for: movies, theatres, showtimes, seat rows
- Access: **O(1)** by index
- Demonstrated on: DSA Lab → Arrays tab

### 2. Singly Linked List (`BookingLinkedList`)
```javascript
class BookingNode {
  constructor(data) {
    this.data = data;   // booking record
    this.next = null;   // pointer to next node
  }
}
```
- `insertAtHead()` → **O(1)**
- `insertAtTail()` → **O(n)**
- `traverse()` → **O(n)**
- `searchById()` → **O(n)**
- `deleteById()` → **O(n)**
- Used for: entire booking history; restored from LocalStorage on page load

### 3. Linear Search
- Time: **O(n)** worst case
- Used for: home page search bar (`linearSearch(MOVIES, query, "title")`)

### 4. Binary Search
- Time: **O(log n)** — requires sorted array
- Used for: finding movie by rating in the sorted dataset
- Precondition: array must be sorted ascending by the key field

### 5. Bubble Sort
- Time: **O(n²)** average/worst, **O(n)** best (with early exit)
- Swaps: Many (up to n² / 2)
- Used for: sorting movies by rating on home page grid

### 6. Selection Sort
- Time: **O(n²)** always (no early exit)
- Swaps: At most **n-1** (efficient for costly writes)
- Used for: sorting theatres by price in theatre selection

---

## 🔄 Complete Booking Flow

```
index.html         → Home + movie discovery
  ↓ View Details
movie.html         → Udta Teer details, synopsis, cast
  ↓ Book Tickets
theatres.html      → Theatre & showtime selection (with date/filter)
  ↓ Click a showtime
seats.html         → Interactive cinema seat map
  ↓ Select seats + Continue
checkout.html      → Booking review + customer form
  ↓ Confirm Booking
confirmation.html  → Booking ID + ticket card + demo QR
  ↓ View My Bookings
bookings.html      → Booking history (linked list), cancel, refresh
```

**Data persistence:**
- Booking records → `cinebook_bookings` (LocalStorage, serialized linked list)
- Seat availability → `cinebook_seats_{theatreId}_{showId}` (LocalStorage)
- In-progress selection → `sessionStorage`

---

## 🧠 Viva Preparation Q&A

**Q1: What is a singly linked list? How is it different from an array?**
> A singly linked list is a chain of nodes where each node holds data and a pointer to the next node. Arrays use contiguous memory with O(1) index access; linked lists use scattered nodes with O(1) head insertion but O(n) search.

**Q2: What is the time complexity of searching in a linked list?**
> O(n) in both average and worst case — we must traverse from the head node.

**Q3: Why does Binary Search require a sorted array?**
> Because it compares the target to the middle element and eliminates half the array each step. If unsorted, the middle element gives no information about which half to search.

**Q4: What is the difference between Bubble Sort and Selection Sort in terms of swaps?**
> Bubble Sort can make O(n²) swaps (every adjacent pair may swap many times). Selection Sort makes at most n-1 swaps — one per pass — because it always places the minimum/maximum directly in its final position.

**Q5: What is the space complexity of all the sorting algorithms implemented here?**
> O(1) — all are in-place sorting algorithms using only a constant amount of extra variables (loop counters, a temp for swaps).

**Q6: How are bookings stored and retrieved?**
> Confirmed bookings are inserted at the head of a BookingLinkedList (O(1)). The list is serialized to JSON and saved in LocalStorage. When any page loads, the list is restored by calling `bookingList.fromArray(storedArray)` which does n tail-insertions — O(n) total.

**Q7: What is the worst-case complexity of Linear Search?**
> O(n) — the target element is at the last index or not present, requiring inspection of all n elements.

**Q8: What is the purpose of the early-exit optimization in Bubble Sort?**
> If a complete pass over the array results in zero swaps, the array is already sorted. We break early, achieving O(n) best-case time instead of O(n²).

---

## 🎨 Technology Stack

| Technology | Usage |
|-----------|-------|
| HTML5 | Structure, semantic markup |
| CSS3 (Vanilla) | Design system, animations, responsive layout |
| JavaScript (ES6+) | Logic, DSA implementations, DOM manipulation |
| LocalStorage | Booking persistence across browser sessions |
| sessionStorage | In-progress booking state across pages |
| Google Fonts (Inter) | Typography |

---

## ✅ Test Checklist

- [x] Home opens correct movie details page
- [x] Udta Teer metadata matches reference data
- [x] Theatre names and showtimes match supplied data
- [x] Changing dates updates showtimes correctly
- [x] Cinepolis seat map matches reference layout
- [x] Seat selection and deselection work
- [x] Six-seat limit enforced
- [x] Seat prices calculated correctly per category
- [x] Occupied seats cannot be clicked
- [x] Duplicate bookings prevented (seat availability check)
- [x] Checkout shows all correct booking information
- [x] Confirmation page requires a real booking
- [x] Bookings survive browser refresh (LocalStorage)
- [x] Cancellation updates status and releases seats
- [x] Linked list supports insert, traverse, search, delete
- [x] Linear Search demonstrates step count
- [x] Binary Search requires sorted data (validated)
- [x] Bubble Sort shows comparisons, swaps, passes
- [x] Selection Sort shows ≤ n-1 swaps
- [x] DSA Lab complexity table is accurate
- [x] All navigation and Back buttons work
- [x] Mobile and desktop layouts usable

---

*CineBook — FDS Mini Project · JSPM's Rajarshi Shahu College of Engineering, Pune*
