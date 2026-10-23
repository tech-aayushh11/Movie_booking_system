/**
 * CineBook — Shared Application Logic
 * ─────────────────────────────────────
 * Navigation helpers, session-state management,
 * and shared UI utilities used across all pages.
 */

"use strict";

// ──────────────────────────────────────────────
// SESSION STATE
// Stores the in-progress booking selection across pages.
// ──────────────────────────────────────────────

const Session = {
  KEYS: {
    MOVIE:    "cinebook_session_movie",
    THEATRE:  "cinebook_session_theatre",
    DATE:     "cinebook_session_date",
    SHOW:     "cinebook_session_show",
    SEATS:    "cinebook_session_seats",
    BOOKING:  "cinebook_session_last_booking"
  },

  set(key, value) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },

  get(key) {
    try {
      const v = sessionStorage.getItem(key) || localStorage.getItem(key);
      return v ? JSON.parse(v) : null;
    } catch { return null; }
  },

  setMovie(movieId) { this.set(this.KEYS.MOVIE, movieId); },
  getMovie()        { return this.get(this.KEYS.MOVIE); },

  setTheatre(theatreId) { this.set(this.KEYS.THEATRE, theatreId); },
  getTheatre()          { return this.get(this.KEYS.THEATRE); },

  setDate(date) { this.set(this.KEYS.DATE, date); },
  getDate()     { return this.get(this.KEYS.DATE); },

  setShow(show) { this.set(this.KEYS.SHOW, show); },
  getShow()     { return this.get(this.KEYS.SHOW); },

  setSeats(seats) { this.set(this.KEYS.SEATS, seats); },
  getSeats()      { return this.get(this.KEYS.SEATS) || []; },

  setLastBooking(booking) { this.set(this.KEYS.BOOKING, booking); },
  getLastBooking()        { return this.get(this.KEYS.BOOKING); },

  clearSeats() { this.set(this.KEYS.SEATS, []); }
};

// ──────────────────────────────────────────────
// NAVIGATION HELPERS
// ──────────────────────────────────────────────

function navigateTo(page, params = {}) {
  const url = new URL(page, window.location.origin + window.location.pathname.replace(/[^/]*$/, ""));
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  window.location.href = url.toString();
}

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function goBack() {
  if (document.referrer && document.referrer.includes(window.location.hostname)) {
    history.back();
  } else {
    window.location.href = "index.html";
  }
}

// ──────────────────────────────────────────────
// DOM HELPERS
// ──────────────────────────────────────────────

function qs(sel, ctx = document)  { return ctx.querySelector(sel); }
function qsa(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function show(el)  { if (el) el.classList.remove("hidden"); }
function hide(el)  { if (el) el.classList.add("hidden"); }

function setHTML(sel, html, ctx = document) {
  const el = qs(sel, ctx);
  if (el) el.innerHTML = html;
}

function setText(sel, text, ctx = document) {
  const el = qs(sel, ctx);
  if (el) el.textContent = text;
}

// ──────────────────────────────────────────────
// TOAST NOTIFICATIONS
// ──────────────────────────────────────────────

function showToast(message, type = "info", duration = 3000) {
  const container = document.getElementById("toast-container") || createToastContainer();
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === "error" ? "✕" : type === "success" ? "✓" : "ℹ"}</span>
    <span class="toast-msg">${message}</span>
  `;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("toast-in"));
  setTimeout(() => {
    toast.classList.remove("toast-in");
    toast.classList.add("toast-out");
    setTimeout(() => toast.remove(), 350);
  }, duration);
}

function createToastContainer() {
  const div = document.createElement("div");
  div.id = "toast-container";
  document.body.appendChild(div);
  return div;
}

// ──────────────────────────────────────────────
// LOGO SVG
// ──────────────────────────────────────────────

const CINEBOOK_LOGO_SVG = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="28" height="28" rx="7" fill="#7650FF"/>
  <rect x="4" y="8" width="20" height="14" rx="2" fill="none" stroke="#fff" stroke-width="1.5"/>
  <path d="M4 12h2M22 12h2M4 16h2M22 16h2" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="14" cy="15" r="3" fill="#fff"/>
  <path d="M12.5 15L14 13.5L15.5 15L14 16.5Z" fill="#7650FF"/>
</svg>`;

// ──────────────────────────────────────────────
// THEATRE LOGO SVGs
// ──────────────────────────────────────────────

const THEATRE_LOGOS = {
  cinepolis: `<div class="theatre-logo cinepolis-logo"><span>cinépolis</span></div>`,
  inox: `<div class="theatre-logo inox-logo"><span>INOX</span></div>`,
  pvr:  `<div class="theatre-logo pvr-logo"><span>PVR</span></div>`
};

// ──────────────────────────────────────────────
// INIT
// ──────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  // Restore booking list from LocalStorage on every page load
  if (window.DSA) {
    window.DSA.restoreBookingList();
  }

  // Inject logo where needed
  qsa("[data-cinebook-logo]").forEach(el => {
    el.innerHTML = CINEBOOK_LOGO_SVG + el.innerHTML;
  });
});

// ──────────────────────────────────────────────
// EXPORTS
// ──────────────────────────────────────────────

if (typeof window !== "undefined") {
  window.App = {
    Session,
    navigateTo,
    getParam,
    goBack,
    qs, qsa,
    show, hide,
    setHTML, setText,
    showToast,
    CINEBOOK_LOGO_SVG,
    THEATRE_LOGOS
  };
}
