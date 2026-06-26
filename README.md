# Quarto Presentation Template

A clean Reveal.js talk template for [Quarto](https://quarto.org) with section tabs, a branded footer, and a consistent background — all driven by a single JS config file.

**[Live demo →](https://lkasselm.github.io/qmd-presentation-template/sample.html)**

## What you get

- **Section tabs** — browser-folder–style tabs above each slide, highlighted automatically via `data-section="..."` on each `##` heading
- **Footer** — speaker name, date, slide counter, and an institution logo on every slide
- **Background** — a single SVG background applied globally; override per-slide with `background-image:`
- **Zero layout boilerplate** — two-column layouts, incremental bullets, equations, and Python/matplotlib figures work out of the box

## Files

| File | Purpose |
|---|---|
| `sample.qmd` | Template source — copy and edit this |
| `talk-template.js` | All UI logic; edit the `CFG` block at the top to customise |
| `background.svg` | Slide background — replace with your own |
| `logo.svg` | Footer logo — replace with your institution's logo |

## Usage

### 1. Install Quarto

Download and install Quarto ≥ 1.4 from [quarto.org/docs/get-started](https://quarto.org/docs/get-started/).

Verify the installation:

```bash
quarto --version
```

### 2. Install Python dependencies

Required only if you keep the example figures. With `pip`:

```bash
pip install matplotlib numpy
```

Or with `conda`:

```bash
conda install matplotlib numpy
```

### 3. Get the template

Clone the repository (or download it as a ZIP via **Code → Download ZIP** on GitHub):

```bash
git clone https://github.com/lkasselm/qmd-presentation-template.git
cd qmd-presentation-template
```

### 4. Configure the template

Open `talk-template.js` and edit the `CFG` block at the top:

```js
var CFG = {
    sections: ['Introduction', 'Methods', 'Results', 'Conclusion'],
    speaker:  'Your Name',
    date:     'DD Month YYYY',
    logoSrc:  'logo.svg',   // path to your institution's logo
    // ...
};
```

Replace `background.svg` and `logo.svg` with your own assets (any SVG or PNG works).

### 5. Write your slides

In `sample.qmd`, tag each `##` heading with its section name so the tabs highlight correctly:

```markdown
## Slide Title {data-section="Methods"}
```

Update the YAML front matter at the top of the file with your title, subtitle, and author.

### 6. Render

```bash
quarto render sample.qmd
```

This produces `sample.html`. Open it in any browser — no server needed.

To preview with live reload while editing:

```bash
quarto preview sample.qmd
```

## Requirements

- [Quarto](https://quarto.org/docs/get-started/) ≥ 1.4
- Python + `matplotlib` / `numpy` (only if you keep the example figures)
