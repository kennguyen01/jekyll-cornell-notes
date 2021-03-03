# Jekyll Cornell Notes

Interactive Cornell Notes system hosted on Github Pages.

Demo: [Jekyll Cornell Notes](https://raisingexceptions.com/jekyll-cornell-notes/)

## Images

![Jekyll Cornell Notes Homepage](https://i.imgur.com/Chu2ow7.jpg)

![Note Example](https://i.imgur.com/rpzRb9s.png)

## Quickstart

### Project URL

Go to `_config.yml` and change the `baseurl` to your project name:

```
baseurl: /project-name
```

### Subject Directory

To make a new subject, create a directory with the subject name in the `_notes` directory.

### Note Format

For each note, create a markdown file such as `subject-note-1.md`. At the top of each markdown file, include:

```
---
layout: note
title: Subject Note 1
---
```

To link to other notes within the same directory, use relative links with the names of the generated HTML file:

```
[Link to Another Note](link-to-another-note.html)
```

Blockquotes in the markdown file will be moved to the `Summary` section at the bottom. Add the `>` symbol in front of the text to denote them as summarization:

```
> Summary paragraph 1
> 
> Summary paragraph 2
```

All `headers`, `<strong>`, and `<em>` tags will be extracted from the notes and linked to in the `Ideas` column. It is recommended to use different names for the ideas to avoid overlapping anchor links.



