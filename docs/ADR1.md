# ADR 1: Architecture Overview & Technology Choices

## Status
Accepted by default.

## Context (why did I decide to build a portfolio now?)

As someone who wants a job i see it fit that i should have a public page for
prospective employers to be able to find me easily and have a look at my work
even before meeting with me. I think this will simplify their work and mine.
Another strong motivation behind this move is insight i got from reading "Growing Object Oriented Softare Guided By Tests" by Nat Pryce; the book has opened up my mind about softare testing which is one step i have always fesred diving into as i though it was never necessary for programming but have come to change my mind after deploying my first app without testing frameworks in place.

## Decision

Backend: NodeJs 
Frontend: React with TS 
DB: Sql 
Communication: REST API calls between frontend & backend


## Raionale

this far in my lifetime i have managed to build one fully working end to end application (web) and i did this for my final year project in uni. I built it using NodeJs for my backend, React from my frontend and postgresql for the db. Honestly, there is no technical consideration that went into picking these technologies other than familiarity. I started learning programming using Js, and i made a decision to use it as the vehicel to deeepen my programming understanding by continuously trying to break it down to uderstand how it operates and how it interacts with the OS. Hopefully one day i will be proficient enough to start choosing languages freely. It is like in Primary school between class 1-4 we were restructed to only using pencil for writing and the transition to using biros or fountain pens came in class 5 when the teachers decided that we finally had 'enough maturity'. I am trying to be so good at understanding how my pencil works before picking fountain pens.




## Consequences

This makes frontend and backend deployment simple for me since I will be deploying frontend to github pages and backend to Azure at least for the first year of this portfolio. Thank you github for the student developer pack.

Second is just readability, having such separation  of backend and frontend reads better in to my eyes.

Third i think this makes my work double hard for having to maintain deployment pipelines for two.

This separation enables me to switch frontend technologies without affecting backend too.