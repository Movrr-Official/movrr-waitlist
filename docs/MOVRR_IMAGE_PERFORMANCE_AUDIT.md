# MOVRR Image Performance Audit

Last reviewed: March 9, 2026

This note benchmarks the current source images used in the hero and product concept sections and records the optimization changes already applied in the UI.

## Scope

Images reviewed:
- `public/movrr-close-up-product-shot.png`
- `public/movrr-wheel-disc-advertising.png`
- `public/movrr-frame-panel-advertising.png`
- `public/movrr-rear-panel-advertising.png`
- `public/movrr-cargo-side-panel-advertising.png`

## Source Asset Weights

Measured directly from the repo on March 9, 2026.

| Asset | Dimensions | Source Weight |
| --- | --- | ---: |
| `movrr-close-up-product-shot.png` | 2048 x 2048 | 6.36 MB |
| `movrr-wheel-disc-advertising.png` | 2048 x 2048 | 8.21 MB |
| `movrr-frame-panel-advertising.png` | 2048 x 2048 | 7.04 MB |
| `movrr-rear-panel-advertising.png` | 2048 x 2048 | 6.92 MB |
| `movrr-cargo-side-panel-advertising.png` | 2048 x 2048 | 8.14 MB |

## Risk Assessment

### Hero
- The hero image is above the fold and directly affects perceived performance.
- Even though `next/image` will optimize delivery in production, the source file is still very large.
- This is a likely LCP risk if image optimization is bypassed, misconfigured, or if cache warmup is poor.

### Product Concept Accordion
- The product images are below the fold, so they are lower risk for LCP.
- The source files are still heavy enough to affect bandwidth, cache usage, and image processing cost.
- Multiple large PNGs in the accordion can still increase scroll-time loading cost on slower devices.

## Changes Applied

### Hero image
- Kept `priority` because the hero image is above the fold.
- Added explicit `quality={82}`.
- Kept a constrained `sizes` value for responsive delivery.

### Product concept images
- Removed `priority` behavior from the accordion images.
- Added explicit responsive `sizes` values for active vs inactive panels.
- Added `quality={78}` to reduce delivered payload.

## What This Means

The runtime setup is now safer than before, but the source assets are still oversized for a production landing page.

The current implementation is acceptable for launch if:
- Next.js image optimization is active in production
- CDN caching is working correctly
- no raw PNGs are being served directly into the layout

## Recommended Next Step

Replace the current PNG source files with compressed WebP or AVIF versions.

Recommended targets:
- hero image: under `500 KB`
- each product concept image: under `350 KB`

If visual fidelity is critical, a safe fallback target is:
- hero image: under `800 KB`
- each product image: under `500 KB`

## LCP Note

No browser-based Lighthouse or real-user LCP trace was captured in this pass, so this document is a source-asset audit, not a measured field-performance report.

If you want a true LCP benchmark next, run:
- Lighthouse on mobile
- WebPageTest on a throttled mobile profile
- Vercel Analytics or RUM-based Web Vitals if available
