/**
 * CineBook — Central Data Store
 * ─────────────────────────────
 * All movie, theatre, showtime, and seat-layout data lives here.
 * This is a demonstration snapshot, NOT live availability data.
 * Data is sourced from reference screenshots dated 23 Oct (Fri).
 */

"use strict";

// ──────────────────────────────────────────────
// MOVIES
// ──────────────────────────────────────────────
const MOVIES = [
  {
    id: "udta-teer",
    title: "Udta Teer",
    language: "Hindi",
    certification: "UA13+",
    runtime: "2h 18m",
    releaseDate: "23rd October",
    releaseDateFull: "23 Oct 2026",
    director: "Akash A. Kaushik",
    cast: ["Ayushmann Khurrana", "Sara Ali Khan"],
    genres: ["Spy", "Comedy"],
    hypeCount: "5.6k+",
    synopsis:
      "Ayushmann Khurrana and Sara Ali Khan lead this high-energy spy comedy, directed by Akash A. Kaushik. Packed with laugh-out-loud moments and unexpected twists, the film follows a bumbling spy who forgets he works for Pakistan and accidentally starts working against his own bosses. A rollercoaster of mistaken identities, double agents, and comic chaos.",
    synopsisShort:
      "Ayushmann Khurrana and Sara Ali Khan lead this high-energy spy comedy, directed by Akash A. Kaushik. Packed with a…",
    highlights: [
      {
        icon: "⭐⭐⭐",
        title: "Ayushmann's spy has a memory problem",
        description:
          "He forgets he works for Pakistan and starts working against his own bosses"
      },
      {
        icon: "🎥",
        title: "From writer's room to director",
        description:
          "Akash A Kaushik has written comedies since 2011, now directs his own screenplay"
      }
    ],
    posterBg: "#1a2a3a",
    posterColor: "#f5a623",
    backdropBg: "linear-gradient(135deg, #0d1b2a 0%, #1a2a3a 40%, #2d4a6a 100%)",
    featured: true,
    rating: 7.8,
    votes: 1240
  },
  {
    id: "lagna-aani",
    title: "Lagna Aani Barach Kahi",
    language: "Marathi",
    certification: "UA13+",
    runtime: "2h 05m",
    releaseDate: "18th October",
    genres: ["Romance", "Drama"],
    hypeCount: "23.9k+",
    synopsis: "A heartwarming Marathi romantic drama about love and marriage.",
    posterBg: "#8B1A1A",
    posterColor: "#FFD700",
    featured: false,
    rating: 7.2,
    votes: 890
  },
  {
    id: "fast-furious-7",
    title: "Fast & Furious 7",
    language: "English",
    certification: "UA13+",
    runtime: "2h 17m",
    releaseDate: "Re-release",
    genres: ["Action", "Thriller"],
    hypeCount: "10+",
    synopsis: "The legendary action franchise returns with bigger stunts and heart.",
    posterBg: "#1a1a2e",
    posterColor: "#e94560",
    featured: false,
    rating: 7.1,
    votes: 4200
  }
];

// ──────────────────────────────────────────────
// DATES
// ──────────────────────────────────────────────
const SHOW_DATES = [
  { id: "fri-23", label: "Today", day: "Fri, 23 Oct", short: "23 Oct", active: true },
  { id: "sat-24", label: "Tomorrow", day: "Sat, 24 Oct", short: "24 Oct", active: false },
  { id: "sun-25", label: "25 Oct", day: "Sun, 25 Oct", short: "25 Oct", active: false }
];

// ──────────────────────────────────────────────
// THEATRES & SHOWTIMES
// ──────────────────────────────────────────────
const THEATRES = [
  {
    id: "cinepolis-seasons",
    name: "Cinepolis Seasons Mall",
    location: "Hadapsar, Pune",
    fullName: "Cinepolis Seasons Mall, Hadapsar, Pune",
    distance: "28.6 km",
    rating: "4.3",
    ratingSource: "Google",
    cancellation: true,
    cancellationText: "Cancellation",
    logoType: "cinepolis",
    bookmarkColor: "#FF6B35",
    previouslyBooked: false,
    shows: {
      "23 Oct": [
        {
          id: "cinepolis-23-2300",
          time: "11:00 PM",
          time24: "23:00",
          price: 290,
          priceLabel: "₹290 onwards",
          format: "QSC 7.1",
          availability: "available",
          seatLayout: "cinepolis-premium"
        },
        {
          id: "cinepolis-23-2345",
          time: "11:45 PM",
          time24: "23:45",
          price: 310,
          priceLabel: "₹310 onwards",
          format: "QSC 7.1",
          availability: "available",
          seatLayout: "cinepolis-premium"
        }
      ],
      "24 Oct": [
        {
          id: "cinepolis-24-2300",
          time: "11:00 PM",
          time24: "23:00",
          price: 290,
          priceLabel: "₹290 onwards",
          format: "QSC 7.1",
          availability: "available",
          seatLayout: "cinepolis-premium"
        },
        {
          id: "cinepolis-24-2345",
          time: "11:45 PM",
          time24: "23:45",
          price: 310,
          priceLabel: "₹310 onwards",
          format: "QSC 7.1",
          availability: "available",
          seatLayout: "cinepolis-premium"
        }
      ],
      "25 Oct": [
        {
          id: "cinepolis-25-2300",
          time: "11:00 PM",
          time24: "23:00",
          price: 290,
          priceLabel: "₹290 onwards",
          format: "QSC 7.1",
          availability: "available",
          seatLayout: "cinepolis-premium"
        }
      ]
    }
  },
  {
    id: "inox-wakad",
    name: "INOX Megaplex, Phoenix Mall of the Millennium",
    location: "Wakad, Pune",
    fullName: "INOX Megaplex, Phoenix Mall of the Millennium, Wakad, Pune",
    distance: "2.5 km",
    rating: "4.3",
    ratingSource: "Google",
    cancellation: true,
    cancellationText: "Cancellation",
    logoType: "inox",
    previouslyBooked: true,
    shows: {
      "23 Oct": [
        {
          id: "inox-wakad-23-2130",
          time: "9:30 PM",
          time24: "21:30",
          price: 310,
          priceLabel: "₹310 onwards",
          format: null,
          availability: "available",
          seatLayout: "inox-standard"
        },
        {
          id: "inox-wakad-23-2230",
          time: "10:30 PM",
          time24: "22:30",
          price: 310,
          priceLabel: "₹310 onwards",
          format: null,
          availability: "available",
          seatLayout: "inox-standard"
        },
        {
          id: "inox-wakad-23-2300",
          time: "11:00 PM",
          time24: "23:00",
          price: 750,
          priceLabel: "₹750 onwards",
          format: "INSIGNIA",
          availability: "available",
          seatLayout: "inox-insignia"
        }
      ],
      "24 Oct": [
        {
          id: "inox-wakad-24-2130",
          time: "9:30 PM",
          time24: "21:30",
          price: 310,
          priceLabel: "₹310 onwards",
          format: null,
          availability: "available",
          seatLayout: "inox-standard"
        },
        {
          id: "inox-wakad-24-2300",
          time: "11:00 PM",
          time24: "23:00",
          price: 750,
          priceLabel: "₹750 onwards",
          format: "INSIGNIA",
          availability: "available",
          seatLayout: "inox-insignia"
        }
      ],
      "25 Oct": [
        {
          id: "inox-wakad-25-2130",
          time: "9:30 PM",
          time24: "21:30",
          price: 310,
          priceLabel: "₹310 onwards",
          format: null,
          availability: "available",
          seatLayout: "inox-standard"
        }
      ]
    }
  },
  {
    id: "pvr-hinjawadi",
    name: "PVR Grand Highstreet Mall",
    location: "Hinjawadi, Pune",
    fullName: "PVR Grand Highstreet Mall, Hinjawadi, Pune",
    distance: "5.3 km",
    rating: "4.4",
    ratingSource: "Google",
    cancellation: true,
    cancellationText: "Cancellation",
    logoType: "pvr",
    previouslyBooked: true,
    shows: {
      "23 Oct": [
        {
          id: "pvr-hinjawadi-23-2200",
          time: "10:00 PM",
          time24: "22:00",
          price: 300,
          priceLabel: "₹300 onwards",
          format: "PXL",
          availability: "available",
          seatLayout: "pvr-standard"
        },
        {
          id: "pvr-hinjawadi-23-2355",
          time: "11:55 PM",
          time24: "23:55",
          price: 99,
          priceLabel: "₹99 onwards",
          format: null,
          availability: "available",
          seatLayout: "pvr-standard"
        }
      ],
      "24 Oct": [
        {
          id: "pvr-hinjawadi-24-2200",
          time: "10:00 PM",
          time24: "22:00",
          price: 300,
          priceLabel: "₹300 onwards",
          format: "PXL",
          availability: "available",
          seatLayout: "pvr-standard"
        },
        {
          id: "pvr-hinjawadi-24-2355",
          time: "11:55 PM",
          time24: "23:55",
          price: 99,
          priceLabel: "₹99 onwards",
          format: null,
          availability: "available",
          seatLayout: "pvr-standard"
        }
      ],
      "25 Oct": [
        {
          id: "pvr-hinjawadi-25-2200",
          time: "10:00 PM",
          time24: "22:00",
          price: 300,
          priceLabel: "₹300 onwards",
          format: "PXL",
          availability: "available",
          seatLayout: "pvr-standard"
        }
      ]
    }
  },
  {
    id: "inox-chinchwad",
    name: "INOX Elpro City Square",
    location: "Chinchwad, Pune",
    fullName: "INOX Elpro City Square, Chinchwad, Pune",
    distance: "6.1 km",
    rating: "4.4",
    ratingSource: "Google",
    cancellation: true,
    cancellationText: "Cancellation",
    logoType: "inox",
    previouslyBooked: false,
    shows: {
      "23 Oct": [
        {
          id: "inox-chinchwad-23-2255",
          time: "10:55 PM",
          time24: "22:55",
          price: 130,
          priceLabel: "₹130 onwards",
          format: null,
          availability: "available",
          seatLayout: "inox-standard"
        },
        {
          id: "inox-chinchwad-23-2355",
          time: "11:55 PM",
          time24: "23:55",
          price: 130,
          priceLabel: "₹130 onwards",
          format: null,
          availability: "available",
          seatLayout: "inox-standard"
        }
      ],
      "24 Oct": [
        {
          id: "inox-chinchwad-24-2255",
          time: "10:55 PM",
          time24: "22:55",
          price: 130,
          priceLabel: "₹130 onwards",
          format: null,
          availability: "available",
          seatLayout: "inox-standard"
        },
        {
          id: "inox-chinchwad-24-2355",
          time: "11:55 PM",
          time24: "23:55",
          price: 130,
          priceLabel: "₹130 onwards",
          format: null,
          availability: "available",
          seatLayout: "inox-standard"
        }
      ],
      "25 Oct": [
        {
          id: "inox-chinchwad-25-2255",
          time: "10:55 PM",
          time24: "22:55",
          price: 130,
          priceLabel: "₹130 onwards",
          format: null,
          availability: "available",
          seatLayout: "inox-standard"
        }
      ]
    }
  },
  {
    id: "inox-akurdi",
    name: "INOX Jagi Ganesh Vision Mall",
    location: "Akurdi, Pune",
    fullName: "INOX Jagi Ganesh Vision Mall, Akurdi, Pune",
    distance: "8.2 km",
    rating: "4.2",
    ratingSource: "Google",
    cancellation: false,
    cancellationText: null,
    logoType: "inox",
    previouslyBooked: false,
    shows: {
      "23 Oct": [
        {
          id: "inox-akurdi-23-data-unavailable",
          time: null,
          price: null,
          priceLabel: null,
          format: null,
          availability: "data-unavailable",
          seatLayout: "inox-standard"
        }
      ],
      "24 Oct": [],
      "25 Oct": []
    }
  }
];

// ──────────────────────────────────────────────
// SEAT LAYOUTS
// ──────────────────────────────────────────────

/**
 * Seat Layout for Cinepolis Seasons Mall
 * Recreated from reference screenshots showing rows A–O
 * with split blocks, aisles, and category-based pricing.
 *
 * Categories:
 *   premium-plus  → ₹330  (rows A–C)
 *   premium       → ₹310  (rows D–G)
 *   executive     → ₹300  (rows H–K)
 *   normal        → ₹290  (rows L–O)
 *
 * Block layout per row (example from screenshot):
 *   left block (seats 1–4) | aisle | center block (seats 5–14) | aisle | right block (seats 15–18)
 *
 * Availability key:
 *   'available'  – can be booked
 *   'occupied'   – already taken
 *   'recommended' – suggested by system (best seats)
 *   'gap'        – intentional blank (no seat, structural)
 */

function generateCinepolisLayout() {
  const rows = [
    // Row, Category, Left block seats, Center block seats, Right block seats, Pre-occupied seats
    { row: "A", cat: "premium-plus",  price: 330, left: [1,2,3,4],      center: [5,6,7,8,9,10,11,12,13,14], right: [15,16,17,18], occupied: [6,7,13], recommended: [5,8,9,10] },
    { row: "B", cat: "premium-plus",  price: 330, left: [1,2,3,4],      center: [5,6,7,8,9,10,11,12,13,14], right: [15,16,17,18], occupied: [5,6,7,8,11,12], recommended: [9,10,13,14] },
    { row: "C", cat: "premium-plus",  price: 330, left: [1,2,3,4],      center: [5,6,7,8,9,10,11,12,13,14], right: [15,16,17,18], occupied: [1,2,3,5,6,9,10,15,16], recommended: [] },
    { row: "D", cat: "premium",       price: 310, left: [1,2,3,4],      center: [5,6,7,8,9,10,11,12,13,14], right: [15,16,17,18], occupied: [7,8,11,12], recommended: [5,6,9,10,13,14] },
    { row: "E", cat: "premium",       price: 310, left: [1,2,3,4],      center: [5,6,7,8,9,10,11,12,13,14], right: [15,16,17,18], occupied: [1,2,15,16,17], recommended: [] },
    { row: "F", cat: "premium",       price: 310, left: [1,2,3,4],      center: [5,6,7,8,9,10,11,12,13,14], right: [15,16,17,18], occupied: [3,4,13,14,18], recommended: [] },
    { row: "G", cat: "premium",       price: 310, left: [1,2,3,4],      center: [5,6,7,8,9,10,11,12,13,14], right: [15,16,17,18], occupied: [5,6,7,8], recommended: [] },
    { row: "H", cat: "executive",     price: 300, left: [1,2,3,4],      center: [5,6,7,8,9,10,11,12,13,14], right: [15,16,17,18], occupied: [9,10,11,12,13], recommended: [] },
    { row: "I", cat: "executive",     price: 300, left: [1,2,3,4],      center: [5,6,7,8,9,10,11,12,13,14], right: [15,16,17,18], occupied: [2,3,6,7], recommended: [] },
    { row: "J", cat: "executive",     price: 300, left: [1,2,3,4],      center: [5,6,7,8,9,10,11,12,13,14], right: [15,16,17,18], occupied: [15,16,17,18], recommended: [] },
    { row: "K", cat: "executive",     price: 300, left: [1,2,3,4],      center: [5,6,7,8,9,10,11,12,13,14], right: [15,16,17,18], occupied: [1,4], recommended: [] },
    { row: "L", cat: "normal",        price: 290, left: [1,2,3,4,5],    center: [6,7,8,9,10,11,12,13,14,15], right: [16,17,18,19,20], occupied: [3,4,5,6], recommended: [] },
    { row: "M", cat: "normal",        price: 290, left: [1,2,3,4,5],    center: [6,7,8,9,10,11,12,13,14,15], right: [16,17,18,19,20], occupied: [10,11,12,13,14,15], recommended: [] },
    { row: "N", cat: "normal",        price: 290, left: [1,2,3,4,5],    center: [6,7,8,9,10,11,12,13,14,15], right: [16,17,18,19,20], occupied: [1,2,3,19,20], recommended: [] },
    { row: "O", cat: "normal",        price: 290, left: [1,2,3,4,5],    center: [6,7,8,9,10,11,12,13,14,15], right: [16,17,18,19,20], occupied: [6,7,8,9,10], recommended: [] }
  ];

  const layout = [];
  rows.forEach(r => {
    const allSeats = [...r.left, ...r.center, ...r.right];
    const seatObjs = [];
    ["left", "center", "right"].forEach(block => {
      r[block].forEach(num => {
        const id = `${r.row}${num}`;
        let state = "available";
        if (r.occupied.includes(num)) state = "occupied";
        else if (r.recommended.includes(num)) state = "recommended";
        seatObjs.push({
          id,
          row: r.row,
          num,
          category: r.cat,
          price: r.price,
          block,
          state
        });
      });
    });
    layout.push({
      row: r.row,
      category: r.cat,
      price: r.price,
      seats: seatObjs
    });
  });
  return layout;
}

function generateStandardLayout(priceBase) {
  // Generic layout for INOX / PVR theatres without a detailed screenshot reference
  const rows = ["A","B","C","D","E","F","G","H","I","J","K","L"];
  const cats = {
    "A": { cat: "premium", price: priceBase + 40 },
    "B": { cat: "premium", price: priceBase + 40 },
    "C": { cat: "premium", price: priceBase + 40 },
    "D": { cat: "executive", price: priceBase + 20 },
    "E": { cat: "executive", price: priceBase + 20 },
    "F": { cat: "executive", price: priceBase + 20 },
    "G": { cat: "executive", price: priceBase + 20 },
    "H": { cat: "normal", price: priceBase },
    "I": { cat: "normal", price: priceBase },
    "J": { cat: "normal", price: priceBase },
    "K": { cat: "normal", price: priceBase },
    "L": { cat: "normal", price: priceBase }
  };

  return rows.map(row => {
    const c = cats[row];
    const seats = [];
    for (let n = 1; n <= 16; n++) {
      const occupied = Math.random() < 0.2; // ~20% pre-occupied for demo
      seats.push({
        id: `${row}${n}`,
        row,
        num: n,
        category: c.cat,
        price: c.price,
        block: n <= 4 ? "left" : n <= 12 ? "center" : "right",
        state: occupied ? "occupied" : "available"
      });
    }
    return { row, category: c.cat, price: c.price, seats };
  });
}

function generateInsigniaLayout() {
  // INSIGNIA is a luxury recliner format
  const rows = ["A","B","C","D","E","F"];
  return rows.map(row => {
    const seats = [];
    for (let n = 1; n <= 8; n++) {
      const occupied = Math.random() < 0.15;
      seats.push({
        id: `${row}${n}`,
        row,
        num: n,
        category: "insignia",
        price: 750,
        block: n <= 4 ? "left" : "right",
        state: occupied ? "occupied" : "available"
      });
    }
    return { row, category: "insignia", price: 750, seats };
  });
}

const SEAT_LAYOUTS = {
  "cinepolis-premium": generateCinepolisLayout(),
  "inox-standard":     generateStandardLayout(130),
  "inox-insignia":     generateInsigniaLayout(),
  "pvr-standard":      generateStandardLayout(99)
};

const SEAT_CATEGORIES = {
  "premium-plus": { label: "Premium Plus", color: "#7650FF" },
  "premium":      { label: "Premium",      color: "#5a8fd4" },
  "executive":    { label: "Executive",    color: "#4aaaa0" },
  "normal":       { label: "Normal",       color: "#92929C" },
  "insignia":     { label: "INSIGNIA",     color: "#f5a623" }
};

// ──────────────────────────────────────────────
// HELPER FUNCTIONS
// ──────────────────────────────────────────────

function getMovieById(id) {
  return MOVIES.find(m => m.id === id) || null;
}

function getTheatreById(id) {
  return THEATRES.find(t => t.id === id) || null;
}

function getShowsByTheatreAndDate(theatreId, date) {
  const theatre = getTheatreById(theatreId);
  if (!theatre) return [];
  return theatre.shows[date] || [];
}

function getShowById(theatreId, showId) {
  const theatre = getTheatreById(theatreId);
  if (!theatre) return null;
  for (const date in theatre.shows) {
    const show = theatre.shows[date].find(s => s.id === showId);
    if (show) return { show, date };
  }
  return null;
}

function getSeatLayout(layoutId) {
  // Return a deep copy so mutations don't corrupt the template
  return JSON.parse(JSON.stringify(SEAT_LAYOUTS[layoutId] || SEAT_LAYOUTS["inox-standard"]));
}

function getSeatLayoutKey(theatreId, showId) {
  const theatre = getTheatreById(theatreId);
  if (!theatre) return "inox-standard";
  for (const date in theatre.shows) {
    const show = theatre.shows[date].find(s => s.id === showId);
    if (show) return show.seatLayout;
  }
  return "inox-standard";
}

// ──────────────────────────────────────────────
// EXPORTS (global scope for browser)
// ──────────────────────────────────────────────
if (typeof window !== "undefined") {
  window.CineData = {
    MOVIES,
    THEATRES,
    SHOW_DATES,
    SEAT_LAYOUTS,
    SEAT_CATEGORIES,
    getMovieById,
    getTheatreById,
    getShowsByTheatreAndDate,
    getShowById,
    getSeatLayout,
    getSeatLayoutKey
  };
}
