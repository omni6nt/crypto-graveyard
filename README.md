# Crypto Graveyard — Complete Corrected Evidence Pack

This is the consolidated replacement for the previous `crypto-graveyard-final-verification-pack.zip`.

## Included
- All eight case JSON candidates.
- Corrected Celsius case ID: `celsius-network`.
- Updated FTX source list with official D.I. 36748 and a clearly qualified D.I. 36919 entry.
- Updated Terraform source list with official D.I. 1392.
- Updated Celsius source list with official D.I. 8488.
- Canonical `data/schema.md`.
- Full case-by-case verification and publication assessment in `docs/research/FINAL-VERIFICATION-STATUS.md`.
- `scripts/validate-final-pack.mjs`.

## Installation
Extract into the project root, for example:

```powershell
$root = "C:\dev\crypto-graveyard"
$zip = "$HOME\Downloads\crypto-graveyard-complete-corrected-evidence-pack.zip"
Expand-Archive -Path $zip -DestinationPath $root -Force
Set-Location $root
node scripts/validate-final-pack.mjs
```

Back up the existing `data/cases` folder and `data/schema.md` before replacing them.

## Important status
This pack does not claim every case is fully verified or publication-approved. FTX, Mt. Gox, Terra/LUNA, BitConnect, OneCoin, 3AC and Celsius are conditional pending the targeted checks described in the verification report. Thodex remains on hold.

The new court filings improve the FTX, Terraform and Celsius evidence. They do not convert a pending motion into a court ruling, a claims determination into a payment, or an interim distribution report into a final recovery outcome.

The package replaces case JSON and schema/research documentation only. It does not replace application code, case index, assets, or Kiro log.
