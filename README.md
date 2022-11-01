# Car Specification from TextMagic

## Description

Within this task, please implement a configurator for car specifications.

Stories:

1. There should be some prebuilt specifications

2. Add functionality to create new individual specifications with the opportunity to choose: wheel rims size, interior materials, engine, car color with the type of paint, etc.

3. We assume that there could be any other config parameters.

Example of the specification:

```
Brand - N model Т
Engine - v6, petrol
Air suspension - no

Exterior:
Body color - white
Type of paint - gloss
Wheel size - 15 inches

Interior:
Seats - leather
```

Code requirements: Typescript, OOP, any UI framework. The application should be scalable.
![Mockup Image](./mockup.png)
UI requirements: minimal interactivity, UI has the smallest priority.

## Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `.env` or `data-source.ts` file
3. Run `npm start` command
