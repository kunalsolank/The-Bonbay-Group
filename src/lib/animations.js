/**
 * animations.js — shared framer-motion variants & constants for Dollrex
 *
 * Usage:
 *   import { ease, fadeUp, staggerContainer, cardVariant } from "../lib/animations";
 */

// ─── Core easing ─────────────────────────────────────────────────────────────
/** flydocs-style spring-like ease [0.22, 1, 0.36, 1] */
export const ease = [0.22, 1, 0.36, 1];

// ─── Basic reveal ─────────────────────────────────────────────────────────────
/** Fade up: opacity 0→1, y 30→0. Use with whileInView. */
export const fadeUp = (delay = 0, y = 30) => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease },
  },
});

/** Fade in only (no y movement). Useful for overlays and backgrounds. */
export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, delay, ease },
  },
});

/** Scale in: scale 0.8→1, opacity 0→1. Good for icons/badges. */
export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease },
  },
});

// ─── Stagger containers ───────────────────────────────────────────────────────
/**
 * Stagger parent — wrap a grid/list with this and use cardVariant on children.
 * @param {number} staggerChildren  — delay between each child (s)
 * @param {number} delayChildren    — initial delay before first child
 */
export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/**
 * Card child — use inside a staggerContainer parent.
 * y 60→0, opacity 0→1.
 */
export const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

// ─── Hero load sequence ───────────────────────────────────────────────────────
/** Staggered hero text — headline, sub, button each 0.12s apart */
export const heroText = (index = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: index * 0.12, ease },
  },
});

/** Hero background slow scale in: 1.08 → 1 */
export const heroBgScale = {
  initial: { scale: 1.08 },
  animate: {
    scale: 1,
    transition: { duration: 1.6, ease: "easeOut" },
  },
};

// ─── Floating loop ────────────────────────────────────────────────────────────
/** Globe / hero image gentle bob: y [0, -12, 0] on infinite loop */
export const floatLoop = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

// ─── Viewport defaults ────────────────────────────────────────────────────────
/** Standard once-true viewport for whileInView */
export const viewport = (amount = 0.3) => ({ once: true, amount });
