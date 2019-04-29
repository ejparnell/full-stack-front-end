# Pokemon Game

## Introduction
This is a small game done in Javascript and Ruby on Rails. The fighting system is
done in a simple rock, paper, scissors method with a random number that picks a
winner if there is no clear winner. When you encounter a "wild" pokemon it's just
using a random number again to pick one for you.

## Planning
With this project I took most of my week before hand planning what I wanted to
do with this game. First I knew I wanted to be able to see all pokemon in a pokedex
format. After that I wanted to caught a pokemon and save it to my bag. Then to battle
them with random pokemon.

## The back end
The back end of this project is a simple Rails framework. I have a users table,
monsters(pokemon) table, and a bag table. The user has many pokemon through the bag
table and pokemon can have many users through the bag table.

The repo for the back end is located here:
https://github.com/ejparnell/back-end-full-stack

## Technologies Used
* Javascript ES6
* Jquery
* CSS 3
* FlexBox
* BootStrap v4.3
* Sass


## The future and bugs
I would like to have gym battles and multiplayer modes. Also instead of clicking
a button to encounter pokemon I would like to have a small html game so you can
run around and encounter pokemon in some tall grass just like the old gameboy games.

## User Stories and wireframe
* As a user I want to sign in/out/up/change password.
* As a user I want to get all pokemon.
* As a user I want to have 6 poke slots.
* As a user I want to catch a pokemon.
* As a user I want to change my 6 captured pokemon.
* As a user I want to battle pokemon.

You can view my wireframe at: https://i.imgur.com/PIWs8VR.jpg
