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

#### Front Matter

For each note, create a markdown file such as `subject-note-1.md`. At the top of each markdown file, use the front matter below:

```
---
layout: note
title: Subject Note 1
tag: Subject
---
```

#### Note Links

To link to other notes of the same `tag`  within the same directory, use the `include` tag:

```
{% include links.html tag=page.tag %}
```

#### Summary 

Blockquotes in the markdown file will be moved to the `Summary` section at the bottom. Add the `>` symbol in front of the text to denote them as summarization:

```
> Summary paragraph 1
> 
> Summary paragraph 2
```

#### Ideas

All `headers`, `<strong>`, and `<em>` tags will be extracted from the notes and linked to in the `Ideas` column. It is recommended to use different names for the ideas to avoid overlapping anchor links.



