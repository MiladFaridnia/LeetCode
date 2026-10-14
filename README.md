# 🚀 LeetCode Starter Guide: Algorithmic Problem Solving & Technical Interview Mastery

A structured presentation and comprehensive guide designed to help software engineers cultivate a systematic problem-solving mindset, master core data structures and algorithmic patterns, and excel in technical interview assessments.

---

## 💡 Executive Summary & Core Mindset

This presentation demystifies algorithmic problem-solving. It addresses the common frustration software engineers experience when encountering LeetCode problems for the first time, establishing that **LeetCode is a trainable skill with a clear methodology, not an IQ test**.

While software development frameworks and libraries evolve rapidly, fundamental computer science concepts—such as data structures, algorithmic complexity, and memory management—remain timeless.

### What Technical Interviewers Actually Evaluate
1. **Thought Process Under Ambiguity**: How you ask clarifying questions and break down complex problems before jumping into code.
2. **Proactive Edge-Case Engineering**: Anticipating empty inputs, negative numbers, duplicates, and boundary limits.
3. **Trade-Off Analysis**: Explicitly evaluating Time vs. Space complexity ($\mathcal{O}(N)$ vs. $\mathcal{O}(1)$).
4. **Clean, Modular Code**: Writing readable, self-documenting, and defensible code under timed conditions.

---

## 🎯 5 Core Learning Principles

### 1. Beyond Reading Solutions (The Empty Editor Rule)
Watching solution videos or reading editorials creates an **Illusion of Competence**. A problem is only truly solved when you can write the solution from scratch in an empty editor, resolving all syntax, boundary, and edge-case issues independently.

### 2. Spaced Repetition
Solving a problem once is insufficient for long-term retention. To retain patterns, a 3-stage review cycle is essential:
- **Review 1 (3 days later)**: Rapid memory retrieval check.
- **Review 2 (1 week later)**: Pattern consolidation into long-term memory.
- **Review 3 (3 weeks later)**: Complete implementation independence test.

### 3. Mastering Core Patterns over Problem Quantity
Solving 500 random problems without understanding fundamental patterns leads to diminishing returns. Engineers should master foundational algorithms until their implementation becomes second nature:
- **Binary Search**: Boundary conditions (`low <= high`) and pointer adjustments.
- **Two Pointers & Sliding Window**: Dynamic interval management.
- **DFS & BFS**: Tree/graph traversals using stacks and queues.
- **Hash Maps & Sets**: $\mathcal{O}(1)$ constant-time lookup strategies.

### 4. Asking "Why?", Not Memorizing
Understanding the decision rationale behind every line of code is critical. For example, in a two-pointer approach on a sorted array, decrementing the right pointer when `currentSum > target` works because the array is sorted, making smaller values accessible only from the left. Understanding *why* prevents panic when interviewers introduce variations.

### 5. Analog Tools First (Pen & Paper)
Never start typing code upon reading a problem description. Tracing sample arrays, drawing state diagrams, and manually updating variables on paper prevents syntax distraction and reveals edge cases in seconds rather than spending minutes debugging in an IDE.

---

## ⏱ Algorithmic Efficiency & Big-O Notation

Big-O notation serves as the universal engineering language for measuring how execution time or memory requirements grow relative to input size ($N$), independent of underlying hardware or programming language.

### The $10^8$ Operations/Second Rule
Online evaluation platforms (and interview environments) typically enforce a **~1-second execution limit**. Modern CPUs execute approximately $10^8$ operations per second:

| Input Size ($N$) | Big-O Complexity | Expected Operations | Execution Time | Result |
| :--- | :--- | :--- | :--- | :--- |
| $N = 10^5$ | $\mathcal{O}(N)$ | $\approx 10^5$ | $0.001\text{ s}$ | ✅ Accepted |
| $N = 10^5$ | $\mathcal{O}(N \log N)$ | $\approx 1.6 \times 10^6$ | $0.02\text{ s}$ | ✅ Accepted |
| $N = 10^5$ | $\mathcal{O}(N^2)$ | $\approx 10^{10}$ | $> 100\text{ s}$ | ❌ Time Limit Exceeded (TLE) |

---

## 🔍 Detailed Case Studies & Algorithmic Breakdown

The presentation guides audience members through three progressively challenging real-world problems from LeetCode, demonstrating how to evolve from naive approaches to optimal engineering solutions.

---

### Case Study 1: LeetCode #1 — Two Sum / جمع دو تایی (Easy)

- **Problem**: Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
- **Constraint**: Input size $N \le 10^4$. Exact single solution guaranteed.

#### 1. Brute Force Approach ($\mathcal{O}(N^2)$ Time, $\mathcal{O}(1)$ Space)
- Nested loops checking all possible pairs $(i, j)$ where $i \neq j$.
- Requires $\frac{N(N-1)}{2}$ comparisons ($\approx 50 \text{ million}$ operations for $N = 10^4$), resulting in **Time Limit Exceeded (TLE)**.

#### 2. Optimal Single-Pass Hash Map ($\mathcal{O}(N)$ Time, $\mathcal{O}(N)$ Space)
- **Mental Paradigm Shift**: Instead of looking *forward* into the array with a second loop, look *backward* using a "memory of past elements" (Hash Map).
- **Algorithm**: For each element `currentNumber` at index `i`, compute the required complement: `neededNumber = target - currentNumber`.
- Query the Hash Map in $\mathcal{O}(1)$ average time. If `neededNumber` exists in memory, return its index along with `i`. Otherwise, store `currentNumber -> i` in the map and continue.

---

### Case Study 2: LeetCode #167 — Two Sum II / جمع دو تایی ۲ (Sorted Array) (Easy/Medium)

- **Problem**: Same as Two Sum (جمع دو تایی), but the input array `numbers` is already **sorted in non-decreasing order**.
- **Constraint**: Must use **$\mathcal{O}(1)$ constant auxiliary space**.

#### Why Previous Approaches Fail
- **Brute Force**: $\mathcal{O}(N^2)$ time fails time limit constraints and ignores the sorted property.
- **Hash Map**: $\mathcal{O}(N)$ space violates the strict $\mathcal{O}(1)$ auxiliary space constraint.

#### Optimal Two-Pointers Convergence ($\mathcal{O}(N)$ Time, $\mathcal{O}(1)$ Space)
- Initialize two pointers: `left = 0` (smallest element) and `right = N - 1` (largest element).
- Calculate `currentSum = numbers[left] + numbers[right]`:
  - If `currentSum == target`: Solution found!
  - If `currentSum > target`: Sum is too large $\rightarrow$ Decrement `right--` (eliminate the largest element).
  - If `currentSum < target`: Sum is too small $\rightarrow$ Increment `left++` (eliminate the smallest element).
- Guarantees finding the answer in at most $N$ steps using zero extra memory.

---

### Case Study 3: LeetCode #15 — 3Sum / جمع سه تایی (Medium Challenge)

- **Problem**: Given an integer array `nums`, return all unique triplets `[nums[i], nums[j], nums[k]]` such that $i \neq j \neq k$ and $nums[i] + nums[j] + nums[k] = 0$.
- **Key Challenges**: Preventing duplicate triplets without memory overhead; avoiding $\mathcal{O}(N^3)$ complexity.

#### Pitfalls of Naive Solutions
- **3-Loop Brute Force ($\mathcal{O}(N^3)$)**: For $N = 3,000$, requires $\approx 4.5 \times 10^9$ operations $\rightarrow$ Massive TLE.
- **HashSet Deduplication Trap**: Storing triplets in a `HashSet` causes heavy memory allocation and risks **Memory Limit Exceeded (MLE)**.

#### Problem Reduction Strategy ($\mathcal{O}(N^2)$ Time, $\mathcal{O}(1)$ Space)
1. **Sort the Array**: $\mathcal{O}(N \log N)$ sorting arranges duplicates adjacent to each other.
2. **Fix One Element & Reduce**: Iterate through the array, fixing `nums[i]`. Convert $a + b + c = 0$ into $b + c = -a$, reducing the remaining sub-array problem to **Two Sum II**.
3. **In-Place Deduplication**: Skip identical values in both the outer loop (`nums[i] == nums[i-1]`) and during pointer adjustments (`while (left < right && nums[left] == nums[left+1]) left++`).
4. **Early Exit Optimization**: If the fixed element `nums[i] > 0`, terminate immediately because the sum of three positive sorted numbers can never equal zero.

---

## 📋 The 45-Minute Technical Interview Protocol

A structured checklist to prevent panic and guide performance during real technical interview rounds:

1. **Clarification (3–5 min)**: Verify inputs, data types, value ranges, return formats, and potential edge cases with the interviewer.
2. **Analog Tracing (5–10 min)**: Trace a small sample test case on paper or a whiteboard manually.
3. **State the Naive Baseline (2–3 min)**: Briefly explain the Brute Force approach and state why its Time/Space complexity is suboptimal.
4. **Propose the Optimal Strategy (5 min)**: Pitch the chosen data structure/pattern and gain the interviewer's alignment before coding.
5. **Clean Implementation & Dry Run (15–20 min)**: Write clean, self-documenting code and manually trace it line-by-line with an edge-case example.

---

## 📅 Actionable 30-Day Preparation Plan

| Timeline | Focus Area | Key Activities |
| :--- | :--- | :--- |
| **Week 1** | Fundamentals: Arrays & Hash Tables | Solve 5 Easy problems from Blind 75 / LeetCode 75; master Hash Map mechanics. |
| **Week 2** | Two Pointers & Sliding Window | Practice Two-Pointer convergence and dynamic window sizing with spaced repetition. |
| **Week 3** | Stacks, Queues & Trees (DFS/BFS) | Master basic tree traversals (Pre-order, In-order, Post-order, Level-order). |
| **Week 4** | Medium Problems & Mock Interviews | Transition to Medium difficulty problems; simulate timed 45-minute mock interview rounds. |

---

## 👤 Presenter
- **Milad Faridnia**
