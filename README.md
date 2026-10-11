# 🚀 LeetCode Starter Guide

A comprehensive presentation and systematic methodology for mastering algorithmic problem-solving and preparing for technical software engineering interviews, featuring a step-by-step breakdown of LeetCode #1 (**Two Sum**).

---

## 📌 About the Project

This repository contains all presentation materials, interactive web slides, presenter notes, and automation scripts for the **LeetCode Starter Guide** presentation. It is designed to guide software engineers through a structured learning path—transitioning from feeling overwhelmed by algorithmic problems to systematically analyzing and solving them.

### Key Presentation Topics
1. **Why LeetCode in Modern Technical Interviews**:
   - Structured thinking and problem decomposition under pressure
   - Proactive edge case discovery (empty inputs, negatives, duplicates)
   - Thoughtful trade-off analysis (Time vs. Space complexity)
   - Clean, modular, and defensible code standards
2. **Systematic 4-Step Problem-Solving Methodology**:
   - Deeply understanding inputs/outputs and clarifying constraints
   - Starting with a Brute Force baseline and analyzing Big-O
   - Strategic optimization using appropriate data structures (Hash Maps, Two Pointers, etc.)
   - Implementation and manual dry-running before executing code
3. **In-Depth Case Study: LeetCode #1 (Two Sum)**:
   - Analysis of the $\mathcal{O}(n^2)$ Brute Force approach
   - Optimization to an optimal $\mathcal{O}(n)$ single-pass Hash Map solution
   - Multi-language implementation nuances (Kotlin, Python, Java, etc.)
4. **Action Plan & Curated Roadmaps**:
   - Core algorithmic patterns (Sliding Window, Two Pointers, DFS/BFS, Binary Search)
   - Standard roadmaps and resources (NeetCode 150, Blind 75)

---

## 📂 Repository Structure

| File / Directory | Description |
| :--- | :--- |
| `leetcode-presentation.html` | Modern, interactive, dark-themed responsive presentation slides with custom styling |
| `speaker-notes.html` | Real-time synchronized presenter display for speaker notes and audience cues |
| `speaker-notes-data.js` | Comprehensive speaker script, slide-by-slide guidance, and anticipated audience questions |
| `generate_pptx.py` | Python automation script to generate the official 16:9 widescreen PowerPoint deck |
| `LeetCode_Starter_Guide.pptx` | The generated PowerPoint presentation file (16:9 Widescreen) |
| `fonts/` | Embedded typography assets (`yekan_bakh_fa_num_regular.ttf`) |

---

## 🛠 Getting Started

### 1. View Interactive Web Slides
Open `leetcode-presentation.html` in any modern web browser (Chrome, Safari, Firefox, Edge):
- **Right / Left Arrow keys**: Navigate between slides
- **F key**: Toggle Fullscreen mode
- Open `speaker-notes.html` in a secondary monitor or window to view live speaker notes synchronized with the talk.

### 2. Regenerate PowerPoint Presentation (Optional)
Prerequisites: Python 3 and the `python-pptx` library.
```bash
pip install python-pptx
python3 generate_pptx.py
```
This updates `LeetCode_Starter_Guide.pptx` according to the latest slide data in `generate_pptx.py`.

---

## 👤 Presenter
- **Milad Faridnia**
