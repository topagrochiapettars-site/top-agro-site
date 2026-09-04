# Top Agro — Codex Operating Rules

This file has the highest operational priority for work in this repository.

## 1. Project mission

Build and evolve the official Top Agro website as a fast, trustworthy, mobile-first commercial experience for agricultural machinery and implements.

Current launch goal:
- Generate qualified leads.
- Route interested visitors to a Top Agro salesperson on WhatsApp.
- Ship a strong first version quickly without overbuilding.

Future goal:
- Evolve the same architecture into a complete ecommerce platform.
- Do not implement ecommerce flows until explicitly requested.

Before implementation work, also read:
- `PROJECT_CONTEXT.md`
- `DESIGN_SYSTEM.md`
- `UX_RULES.md`
- `CONVERSION_RULES.md`
- `CONTENT_RULES.md`
- `SEO_RULES.md`
- `PRODUCT_ARCHITECTURE.md`

If a rule conflicts with this file, this file wins.

---

## 2. Safety: planning is not execution

When the user asks for planning, analysis, estimation, architecture, recommendations, review, brainstorming, or discussion only:

- DO NOT modify files.
- DO NOT execute implementation commands.
- DO NOT install packages.
- DO NOT create or modify credentials.
- DO NOT create commits.
- DO NOT push to GitHub.
- DO NOT deploy or publish.
- DO NOT change hosting, domains, analytics, or environment variables.
- Return the plan first and wait for explicit implementation authorization.

When the user explicitly asks to implement a change:
- You may edit the minimum necessary project files.
- You may run finite local validation commands.
- Do not commit, push, deploy, publish, or change infrastructure unless the user separately and explicitly authorizes that action.

Never interpret "make a plan", "organize this", "estimate", "what should we do", "review this", or similar wording as permission to implement.

---

## 3. Ask before consequential decisions

Ask the user before proceeding when a choice could materially affect:
- Business positioning.
- Product architecture.
- Brand identity.
- Navigation structure.
- Conversion strategy.
- Pricing display.
- Ecommerce behavior.
- Analytics/tracking.
- SEO URL structure.
- Hosting or deployment.
- Dependencies/frameworks.
- Data model or backend architecture.
- Destructive file changes.

For small, reversible implementation details:
- Follow existing project conventions.
- Prefer the simplest solution.
- Avoid unnecessary questions.

If a requirement is ambiguous and two interpretations produce meaningfully different outcomes, ask.

---

## 4. Never run away with a task

Commands must be finite and purposeful.

- Do not leave long-running deployment/status loops running.
- Do not repeatedly poll deployment status.
- Do not start background/watch processes unless explicitly needed.
- Do not run a command for hours waiting for completion.
- If a command appears stalled or produces no useful progress for roughly 3 minutes, stop it and report what happened.
- If a build or install is genuinely expected to take longer, explain why before continuing.
- Prefer one scoped command at a time over large chained command sequences.

---

## 5. Preserve the existing stack

Current stack, based on `package.json`:
- React `19.2.6`
- React DOM `19.2.6`
- TypeScript `5.9.3`
- Tailwind CSS `4.2.1`
- Vite `8.0.13`
- Vinext `1.0.0-beta.5`
- pnpm
- Node.js `>=22.13.0`
- shadcn / Base UI
- Lucide React
- Cloudflare Vite plugin / Wrangler
- OpenAI Sites Vite plugin

Important:
- This is NOT a standard Next.js project even though `app/` and `next.config.ts` exist.
- Do not migrate the project to Next.js, Remix, Astro, plain Vite, or another framework unless explicitly requested.
- Do not replace pnpm with npm, yarn, or bun.
- Do not remove Vinext because another framework is more familiar.
- Do not change Cloudflare/Vercel/hosting strategy without explicit approval.
- Do not modify `.openai/hosting.json` unless the task specifically requires it and the user approves.

Use existing scripts:
- `pnpm dev`
- `pnpm build`
- `pnpm lint`
- `pnpm format`
- `pnpm start` only when the built Wrangler environment is actually required.

---

## 6. Dependency discipline

Before adding a package:
1. Check whether the project already has a suitable dependency.
2. Prefer native platform capabilities and existing components.
3. Explain why a new dependency is necessary if it materially increases complexity.
4. Ask before adding major libraries, analytics SDKs, CMSs, databases, ecommerce packages, or state-management frameworks.

Never add a dependency only to solve a small styling issue.

---

## 7. Git and repository safety

The repository is private and remote-backed.

Rules:
- Never commit secrets, tokens, passwords, API keys, credentials, or private customer data.
- `.env*` files must remain ignored.
- Do not commit generated folders such as `node_modules`, `.next`, `.vinext`, `dist`, `.wrangler`, `outputs`, or temporary work folders.
- Do not use `git reset --hard`, `git clean -fd`, destructive checkout/restore commands, history rewrites, or force pushes without explicit approval.
- Before destructive Git operations, state exactly what would be lost.
- Do not create a commit unless explicitly requested.
- Do not push unless explicitly requested.
- Do not deploy merely because a push succeeded.

When asked to save progress, prefer:
1. Show changed files.
2. Run validation.
3. Ask for commit authorization if not already granted.
4. Commit with a clear message.
5. Ask separately before push/deploy if not already authorized.

---

## 8. Scope control

Implement only the requested scope.

Do not:
- Redesign unrelated sections.
- "Improve" approved parts without being asked.
- Replace working components because a new approach seems cleaner.
- Refactor large areas during a small visual adjustment.
- Create future pages just because they appear in `PRODUCT_ARCHITECTURE.md`.

Architecture files describe where the project is going, not permission to build everything now.

---

## 9. Product and factual integrity

Top Agro sells real agricultural equipment.

Never invent:
- A machine.
- A brand.
- A model.
- A specification.
- A capacity.
- A warranty.
- A price.
- A delivery promise.
- A financing condition.
- A testimonial.
- A stock status.
- A compatibility claim.
- A regional agronomic claim.

If data is missing:
- Use a neutral placeholder in development, or
- Ask for the real information.

Never present generated visual content as a real product photo.

---

## 10. Image integrity

Use real, approved Top Agro/manufacturer/product photography whenever possible.

Allowed:
- Crop.
- Resize.
- Compress.
- Remove irrelevant background clutter.
- Correct exposure/white balance.
- Clean the floor/background.
- Subtle image cleanup that preserves the actual product.

Not allowed without explicit approval:
- Inventing a machine or attachment.
- Adding product features that do not exist.
- Changing machine geometry.
- Changing brand/model identity.
- Creating a misleading "real" product scene with AI.
- Replacing a real product with an AI-generated approximation.

If an image asset is uncertain, ask before publishing it.

---

## 11. Mobile-first implementation

A large share of traffic is expected from mobile, paid social, organic social, and WhatsApp-oriented journeys.

For every UI change:
- Check mobile first.
- Then tablet.
- Then desktop.
- Avoid desktop-only interactions.
- Do not rely on hover for essential actions.
- Ensure touch targets are comfortably tappable.
- Prevent horizontal scrolling.
- Keep primary CTA visible and understandable on small screens.

---

## 12. Validation before reporting completion

For implementation work, run the smallest relevant checks.

Default checks when appropriate:
- `pnpm lint`
- `pnpm build`

Also inspect:
- No TypeScript errors introduced.
- No broken imports.
- No missing assets.
- No obvious mobile overflow.
- No duplicate CTA conflicts.
- No accidental placeholder text.
- No invented product facts.

If a check cannot be run, say so.

Do not claim a task is complete if validation failed.

---

## 13. Completion report

After implementation, report concisely:
- What changed.
- Which files changed.
- What was validated.
- Any unresolved question.
- Whether Git commit/push/deploy was NOT performed.

Never hide side effects or unrelated changes.

---

## 14. Design decision principles

Use these as default design heuristics:
- Make the page understandable at a glance.
- Strong visual hierarchy before decoration.
- Contrast, repetition, alignment, and proximity should organize information.
- Use spacing to group related content and separate unrelated content.
- Prefer fewer borders and less visual noise.
- Use established web conventions unless there is a strong usability reason not to.
- Optimize for scanning, not careful reading.
- Primary actions should be visually dominant; secondary actions should not compete.
- Avoid filling every empty area.
- Consistency beats novelty.

These principles are adapted from the design/usability references supplied with the project:
- *Refactoring UI*
- *Don't Make Me Think, Revisited*
- *The Non-Designer's Design Book*
