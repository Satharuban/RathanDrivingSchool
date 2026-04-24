#!/usr/bin/env python3
"""Generate WebP copies of key PNGs in public/ (run via npm prebuild). Requires Pillow."""

from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("generate-webp: Pillow not installed; skip WebP generation (pip install Pillow)")
    raise SystemExit(0)

ROOT = Path(__file__).resolve().parent.parent / "public"
NAMES = [
    "logo.png",
    "rathan-car-hero.png",
    "rathan-car-lessons.png",
    "about-instructor.png",
    "areas-liverpool-coverage.png",
    "contact-get-in-touch.png",
    "lessons-pricing-hero.png",
    "hero-driving-lesson.png",
]


def main() -> None:
    for name in NAMES:
        src = ROOT / name
        if not src.exists():
            continue
        out = src.with_suffix(".webp")
        im = Image.open(src)
        if im.mode not in ("RGB", "RGBA"):
            im = im.convert("RGBA")
        im.save(out, "WEBP", quality=82, method=6)
        print(f"Wrote {out.relative_to(ROOT.parent)}")


if __name__ == "__main__":
    main()
