# v5 update checklist

## Main changes

- Correct official publication titles and verified dates.
- DOI-based publication record + exact-DOI citation refresh.
- New public-safe medical AI case study with real project images.
- New DQL traffic-control case study with original thesis/presentation figures.
- Research-lineage timeline connecting thesis, object-detection publications and the new Deep Q-Learning traffic-control manuscript.
- New “manuscript in preparation” blog update without exposing unpublished method/result details.
- More authentic research thumbnails from the presentation.
- No 98% marketing claim on the homepage.

## Uploading on GitHub.com

1. Extract the ZIP.
2. Open the extracted `pouria-maleki-react-v5` folder.
3. Upload the **contents** of that folder to the root of the existing GitHub repository.
4. Make sure `.github/workflows/deploy.yml` is updated too.
5. Commit changes.
6. Open **Actions → Deploy to GitHub Pages** and wait for the build/deploy jobs to turn green.

## If GitHub Actions fails

Send the red error section from the **Build React website** step. The live-data step is designed to fall back safely if GitHub/Crossref/Semantic Scholar APIs are temporarily unavailable.
