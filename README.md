# UED Journal of Social Sciences, Humanities and Education

[![Live site](https://img.shields.io/badge/site-live-111111)](https://base27-cvnss.github.io/jsshe/)
[![ISSN](https://img.shields.io/badge/ISSN-1859--4603-60605c)](https://portal.issn.org/resource/ISSN/1859-4603)
[![License: MIT](https://img.shields.io/badge/source-MIT-8a8a84)](LICENSE)

A monochrome, English-only scholarly index for **UED Journal of Social Sciences, Humanities and Education (UED-JSHE)**. The interface presents the current issue through five essential fields: article title, authors, DOI or original-source link, abstract, and keywords.

This presentation layer does not replace the journal's Open Journal Systems installation. Submission, peer review, publishing records, and full texts remain on the [official JSHE website](https://jshe.vn/index.php/jshe).

## Design principles

- Compact monochrome editorial system with a small sans-serif type scale and a centered issue column.
- One English-language interface with no theme or language controls.
- OJS Novelty-inspired two-level masthead with Home, About, Current Issue, Archives, Articles, Editorial Team, and Submissions navigation plus integrated issue search.
- Ten articles from Volume 15, Issue 2 (2025).
- DOI links resolve through `https://doi.org/` to the source record.
- Articles without a published DOI use a clearly labelled original-article link.
- Instant filtering by title, author, abstract, or keyword; press `/` to focus search.
- Responsive semantic HTML, keyboard focus states, reduced-motion support, and print styles.
- No framework, package install, build step, analytics, or external font request.

## Run locally

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Structure

```text
.
├── assets/
│   ├── app.js
│   ├── styles.css
│   ├── favicon.svg
│   └── social-card.svg
├── index.html
├── 404.html
├── manifest.webmanifest
├── robots.txt
└── sitemap.xml
```

## Content note

Article metadata and source links are based on the official journal issue. Abstracts on this front end are concise editorial summaries; full publisher text remains on JSHE. No article PDFs are copied into this repository.

The interface is inspired by the restrained, open-scholarly-publishing principles associated with [Public Knowledge Project](https://pkp.sfu.ca/), without copying a proprietary theme or visual asset.

## License

Interface source: MIT © 2026 Long Ngo. Article content remains subject to the journal's and authors' publication terms.
