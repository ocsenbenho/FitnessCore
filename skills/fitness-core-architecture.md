---
name: Fitness Core Architecture & Data
description: Specific guidelines on how to handle the UI flow, state, and workout data structure for the Fitness Core project.
---

# Fitness Core Specific Guidelines

When modifying the Fitness Core application, follow these specific architectural and UI/UX rules to ensure consistency.

## 1. Workout Data Structure (`workoutPlan`)
- The data is currently an array of objects inside `App.jsx`.
- Each Day object must have: `day`, `title`, `focus`, `icon` (a Lucide component), and `exercises` (array).
- Each Exercise object must have:
  - `name`: String
  - `sets`: String (e.g., "3 hiệp x 12 lần")
  - `target`: String (muscle groups)
  - `wrong`: String (dangerous/incorrect form)
  - `right`: String (safe/correct form)
  - `fix`: String (pro tips for improvement)
  - `videoId`: String (YouTube video ID, e.g., "lRYBbchqxtI")

**Rule:** When adding new exercises, you MUST ensure all these fields are present and `videoId` is a valid 11-character YouTube ID.

## 2. State Management Flow
- The app relies on two main states:
  1. `activeDay`: Index of the selected day.
  2. `activeExerciseIdx`: Index of the selected exercise within that day.
- **Rule:** Whenever `activeDay` changes, you MUST reset `activeExerciseIdx` to `0` to avoid out-of-bounds errors and ensure the video updates correctly.

## 3. Video Player Iframe (YouTube)
- The video player uses an `iframe` embedding YouTube.
- **Crucial Rule:** Always apply `key={activeExercise.videoId}` to the `iframe` element. React needs this to force a complete re-mount of the iframe when switching exercises. Changing `src` alone often causes YouTube embeds to bug out or fail to autoplay the new video.

## 4. UI/UX & Theming
- **Colors for Feedback**:
  - `red-50` background + `red-500` text for "Thao tác SAI".
  - `emerald-50` background + `emerald-500` text for "Form CHUẨN".
  - `amber-50` background + `amber-500` text for "Cải thiện ngay".
- **Interactions**:
  - Selected elements (Tabs or Exercise Cards) should have an elevated look (e.g., `transform -translate-y-1` or `scale-[1.01]`) and an active border color (`border-emerald-500`).
  - Use `animate-in fade-in slide-in-from-top-2` for content expansion to keep interactions smooth.
