---
slug: '/my-first-blog-post'
date: '2023-07-19'
title: 'Decorators'
---

# Table of Contents

1.  [Intent](#orga30e933)
2.  [Examples](#org4ab8af0)
    1.  [Chess with alternate rules](#org5ab5ce9)
    2.  [Notifier](#org7c9d799)

<a id="orga30e933"></a>

# Intent

A decorator design pattern allows for optional addition of new behaviors to an object.

Creating classes for a specific combination of behaviors that utilize the same data can become unwieldly, such as in the case of an object with multiple sets of rules stemming from a common point.

<a id="org4ab8af0"></a>

# Examples

<a id="org5ab5ce9"></a>

## Chess with alternate rules

I&rsquo;m currently implementing a chess game with alternate rules _based_ off of the standard ruleset of chess, in which players can decide multiple modes. In this case, some game modes will extend and add new behaviors to existing classes.

Pieces can still move, however they may have additional rules or modifiers that alter their movesets. A decorator/wrapper in place of the class itself will allow for attachment of new behaviors without repeating behavior for every combination, instead the behaviors stack.

<a id="org7c9d799"></a>

## Notifier

A general notification class that sends messages. Attaching behaviors to the notifier class depending on user preferences (slack, discord, sms, email). With decorators, the notification message will travel across sub-classes of behavior.
