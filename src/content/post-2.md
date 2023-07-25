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

# Table of Contents

1.  [INNER JOIN - 1-to-1 Relationships](#org0f13dd4)
    1.  [Text](#org9397308)
        1.  [Code](#org2bfcef5)
    2.  [Extra](#org5903859)
        1.  [Tables](#orgf52a188)
2.  [Multiple JOINs SQL](#org49ccab0)
    1.  [Text](#orgd834302)
        1.  [Code](#orgefb2015)
        2.  [Current Tables](#orga6c0f40)
    2.  [Extra](#org17d94f6)
3.  [INNER vs LEFT JOIN](#orgf60b536)
    1.  [Front](#org1073696)
    2.  [Back](#orgc167485)

Necessary for learning

<a id="org0f13dd4"></a>

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

## Extra

<a id="orgf52a188"></a>

### Tables

1.  character

    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

    <colgroup>
    <col  class="org-right" />

    <col  class="org-left" />
    </colgroup>
    <thead>
    <tr>
    <th scope="col" class="org-right">id</th>
    <th scope="col" class="org-left">name</th>
    </tr>
    </thead>

    <tbody>
    <tr>
    <td class="org-right">1</td>
    <td class="org-left">Doogie Howser</td>
    </tr>

    <tr>
    <td class="org-right">2</td>
    <td class="org-left">Barney Stinson</td>
    </tr>

    <tr>
    <td class="org-right">3</td>
    <td class="org-left">Lily Aldrin</td>
    </tr>

    <tr>
    <td class="org-right">4</td>
    <td class="org-left">Willow Rosenberg</td>
    </tr>
    </tbody>
    </table>

2.  character<sub>tv</sub><sub>show</sub>

    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

    <colgroup>
    <col  class="org-right" />

    <col  class="org-right" />

    <col  class="org-left" />
    </colgroup>
    <thead>
    <tr>
    <th scope="col" class="org-right">id</th>
    <th scope="col" class="org-right">character<sub>id</sub></th>
    <th scope="col" class="org-left">tv<sub>show</sub><sub>name</sub></th>
    </tr>
    </thead>

    <tbody>
    <tr>
    <td class="org-right">1</td>
    <td class="org-right">4</td>
    <td class="org-left">Buffy the Vampire Slayer</td>
    </tr>

    <tr>
    <td class="org-right">2</td>
    <td class="org-right">3</td>
    <td class="org-left">How I Met Your Mother</td>
    </tr>

    <tr>
    <td class="org-right">3</td>
    <td class="org-right">2</td>
    <td class="org-left">How I Met Your Mother</td>
    </tr>

    <tr>
    <td class="org-right">4</td>
    <td class="org-right">1</td>
    <td class="org-left">Doogie Howser, M.D.</td>
    </tr>
    </tbody>
    </table>

3.  character<sub>actor</sub>

    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

    <colgroup>
    <col  class="org-right" />

    <col  class="org-right" />

    <col  class="org-left" />
    </colgroup>
    <thead>
    <tr>
    <th scope="col" class="org-right">id</th>
    <th scope="col" class="org-right">character<sub>id</sub></th>
    <th scope="col" class="org-left">actor<sub>name</sub></th>
    </tr>
    </thead>

    <tbody>
    <tr>
    <td class="org-right">1</td>
    <td class="org-right">4</td>
    <td class="org-left">Alyson Hannigan</td>
    </tr>

    <tr>
    <td class="org-right">2</td>
    <td class="org-right">3</td>
    <td class="org-left">Alyson Hannigan</td>
    </tr>

    <tr>
    <td class="org-right">3</td>
    <td class="org-right">2</td>
    <td class="org-left">Neil Patrick Harris</td>
    </tr>

    <tr>
    <td class="org-right">4</td>
    <td class="org-right">1</td>
    <td class="org-left">Neil Patrick Harris</td>
    </tr>
    </tbody>
    </table>

<a id="org49ccab0"></a>

# Multiple JOINs SQL

<a id="orgd834302"></a>

## Text

Can you use two joins to pair each character name with the actor who plays them? Select the columns: character.name, actor.name?

<a id="orgefb2015"></a>

### Code

    SELECT character.name, actor.name
    FROM character
    {{c1::INNER JOIN character_actor
    ON character.id = character_id
    INNER JOIN actor
    ON actor_id = actor.id
    }}

<a id="orga6c0f40"></a>

### Current Tables

1.  character

    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

    <colgroup>
    <col  class="org-right" />

    <col  class="org-left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="org-right">id</td>
    <td class="org-left">name</td>
    </tr>

    <tr>
    <td class="org-right">1</td>
    <td class="org-left">Doogie Howser</td>
    </tr>

    <tr>
    <td class="org-right">2</td>
    <td class="org-left">Barney Stinson</td>
    </tr>

    <tr>
    <td class="org-right">3</td>
    <td class="org-left">Lily Aldrin</td>
    </tr>

    <tr>
    <td class="org-right">4</td>
    <td class="org-left">Willow Rosenberg</td>
    </tr>
    </tbody>
    </table>

2.  tv<sub>show</sub>

    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

    <colgroup>
    <col  class="org-right" />

    <col  class="org-left" />
    </colgroup>
    <thead>
    <tr>
    <th scope="col" class="org-right">id</th>
    <th scope="col" class="org-left">name</th>
    </tr>
    </thead>

    <tbody>
    <tr>
    <td class="org-right">1</td>
    <td class="org-left">Buffy the Vampire Slayer</td>
    </tr>

    <tr>
    <td class="org-right">2</td>
    <td class="org-left">How I Met Your Mother</td>
    </tr>

    <tr>
    <td class="org-right">3</td>
    <td class="org-left">Doogie Howser, M.D.</td>
    </tr>
    </tbody>
    </table>

3.  character<sub>tv</sub><sub>show</sub>

    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

    <colgroup>
    <col  class="org-right" />

    <col  class="org-right" />

    <col  class="org-right" />
    </colgroup>
    <thead>
    <tr>
    <th scope="col" class="org-right">id</th>
    <th scope="col" class="org-right">character<sub>id</sub></th>
    <th scope="col" class="org-right">tv<sub>show</sub><sub>id</sub></th>
    </tr>
    </thead>

    <tbody>
    <tr>
    <td class="org-right">1</td>
    <td class="org-right">1</td>
    <td class="org-right">3</td>
    </tr>

    <tr>
    <td class="org-right">2</td>
    <td class="org-right">2</td>
    <td class="org-right">2</td>
    </tr>

    <tr>
    <td class="org-right">3</td>
    <td class="org-right">3</td>
    <td class="org-right">2</td>
    </tr>

    <tr>
    <td class="org-right">4</td>
    <td class="org-right">4</td>
    <td class="org-right">1</td>
    </tr>
    </tbody>
    </table>

4.  actor

    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

    <colgroup>
    <col  class="org-right" />

    <col  class="org-left" />
    </colgroup>
    <thead>
    <tr>
    <th scope="col" class="org-right">id</th>
    <th scope="col" class="org-left">name</th>
    </tr>
    </thead>

    <tbody>
    <tr>
    <td class="org-right">1</td>
    <td class="org-left">Alyson Hannigan</td>
    </tr>

    <tr>
    <td class="org-right">2</td>
    <td class="org-left">Neil Patrick Harris</td>
    </tr>
    </tbody>
    </table>

5.  character<sub>actor</sub>

    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">

    <colgroup>
    <col  class="org-right" />

    <col  class="org-right" />

    <col  class="org-right" />
    </colgroup>
    <thead>
    <tr>
    <th scope="col" class="org-right">id</th>
    <th scope="col" class="org-right">character<sub>id</sub></th>
    <th scope="col" class="org-right">actor<sub>id</sub></th>
    </tr>
    </thead>

    <tbody>
    <tr>
    <td class="org-right">1</td>
    <td class="org-right">1</td>
    <td class="org-right">2</td>
    </tr>

    <tr>
    <td class="org-right">2</td>
    <td class="org-right">2</td>
    <td class="org-right">2</td>
    </tr>

    <tr>
    <td class="org-right">3</td>
    <td class="org-right">3</td>
    <td class="org-right">1</td>
    </tr>

    <tr>
    <td class="org-right">4</td>
    <td class="org-right">1</td>
    <td class="org-right">&#xa0;</td>
    </tr>
    </tbody>
    </table>

<a id="org17d94f6"></a>

## Extra

<a id="orgf60b536"></a>

# INNER vs LEFT JOIN

<a id="org1073696"></a>

## Front

What is the difference between INNER JOIN and LEFT JOIN?

<a id="orgc167485"></a>

## Back

INNER JOIN only includes rows that are in common, while LEFT JOIN will include the first table and leave null values for missing values in the second table.
