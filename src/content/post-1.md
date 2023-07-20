---
slug: '/my-first-blog-post'
date: '2023-07-19'
title: 'The Blastotron 9000'
description:
---

# Table of Contents

1.  [INNER JOIN - 1-to-1 Relationships](#orga1ea56d)
    1.  [Text](#orge7e30c7)
        1.  [Code](#org36fcde5)
    2.  [Extra](#org439aa8e)
        1.  [Tables](#org74dfa9c)
2.  [Multiple JOINs SQL](#org27221a9)
    1.  [Text](#orgf5b0ffb)
        1.  [Code](#org17eaead)
        2.  [Current Tables](#org3f684d4)
    2.  [Extra](#org733bb2d)
3.  [INNER vs LEFT JOIN](#org94f1fa4)
    1.  [Front](#org32c9f3e)
    2.  [Back](#org3c46dee)

Necessary for learning

<a id="orga1ea56d"></a>

# INNER JOIN - 1-to-1 Relationships

<a id="orge7e30c7"></a>

## Text

From the following tables, how would you fill in the following code snippet to map character names to their tv show?

<a id="org36fcde5"></a>

### Code

    SELECT character.name, character_tv_show.tv_show_name
    FROM character
    {{c1::INNER JOIN character_tv_show
    ON character.id = character_tv_show.character_id;
    }}

<a id="org439aa8e"></a>

## Extra

<a id="org74dfa9c"></a>

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

<a id="org27221a9"></a>

# Multiple JOINs SQL

<a id="orgf5b0ffb"></a>

## Text

Can you use two joins to pair each character name with the actor who plays them? Select the columns: character.name, actor.name?

<a id="org17eaead"></a>

### Code

    SELECT character.name, actor.name
    FROM character
    {{c1::INNER JOIN character_actor
    ON character.id = character_id
    INNER JOIN actor
    ON actor_id = actor.id
    }}

<a id="org3f684d4"></a>

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

<a id="org733bb2d"></a>

## Extra

<a id="org94f1fa4"></a>

# INNER vs LEFT JOIN

<a id="org32c9f3e"></a>

## Front

What is the difference between INNER JOIN and LEFT JOIN?

<a id="org3c46dee"></a>

## Back

INNER JOIN only includes rows that are in common, while LEFT JOIN will include the first table and leave null values for missing values in the second table.