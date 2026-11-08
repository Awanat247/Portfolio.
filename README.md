# Yetunde Shabi — Social Media Manager Portfolio

A static GitHub Pages version of Yetunde Shabi’s portfolio, with the original cream, charcoal and burnt orange palette, self-hosted typefaces and supplied work samples.

## Publish

The repository currently created by the owner is `Awanat247/Portfolio.` (including the trailing full stop). For the clean address `https://awanat247.github.io/Portfolio/`, rename the repository to `Portfolio` in Settings → General before enabling Pages. All site assets use relative URLs and support either repository name.

The ready-to-publish website is in `docs/`, with prerendered HTML and interactive React hydration. In **Settings → Pages**, select **Deploy from a branch**, choose the `main` branch and the `/docs` folder, then save. GitHub's Pages build deploys this folder automatically after future commits. No custom Actions workflow or third-party build service is needed.

A Pages address is not live until that setting has been saved and GitHub's deployment has succeeded.

## Edit and rebuild

Use Node 22.13 or newer and pnpm 11.25.0:

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm test
```

Commit source changes and the rebuilt `docs/` together. All public asset URLs are relative so the site works under `/Portfolio/` as well as an account root or custom domain.

## Included interactions

- Planpadi carousel, calendar and video preview tabs
- Full sample galleries, filters, project stories and keyboard navigation
- Original PDF and workbook downloads
- Native video controls
- Email and WhatsApp enquiry drafts that visitors review and send themselves

## Content and access

Only the website, supplied public-facing work and reusable source are included. There are no account credentials, hosting secrets, server functions or private project notes in this repository. The portfolio remains public when deployed through public GitHub Pages.

Metrics, testimonials and client details must remain grounded in actual evidence. Review plans in the case studies are explicitly prospective.
