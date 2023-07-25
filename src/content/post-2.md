---
date: '2023-07-19'
title: 'INNER JOINS'
featuredImage: ../images/oven.png
datapoints:
  - label: Temperatures
    value: 120F-450F
  - label: Another Data Point
    value: 1234
---

# INNER JOIN - 1-to-1 Relationships

<a id="org9397308"></a>

## Text

From the following tables, how would you fill in the following code snippet to map character names to their tv show?

<a id="org2bfcef5"></a>

### Code

    SELECT character.name, character_tv_show.tv_show_name
    FROM character
    {{c1::INNER JOIN character_tv_show
    ON character.id = character_tv_show.character_id;
    }}

<a id="org5903859"></a>
