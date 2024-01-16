# Diogos Page

## Overview

This project is inspired by my trying to answer questions that are usually covered in cover letters (I am this person, these are my values, yada). I thought I'd go for a simple website and drew inspiration from [Derek Sivers](https://sive.rs).

The goal here is to deploy an MVP and build from there.

## Tech

NextJS: very mature framework for full stack web apps.
Typescript: in my opinion a nicer experience than vanilla JS.
Tailwind: very thorough inline CSS classes. Easy to manage and implement responsiveness.
Cloudinary: host images with a generous free tier. Helps me keep my images out of my build.
Mapbox: display an interactive map in my page.
DeckGL: helps me easily manage data on my map in a "reacty" way.

## Deployment

I have it set up in such a way that when my `main` branch gets a commit, the app is deployed on Vercel.

TODO: I want to try a deployment with Docker and AWS.

## Info adapted from NextJS stock readme

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Run the development server and see the page on [http://localhost:3000](http://localhost:3000). Edit code and the page reloads live.

```bash
npm run dev
```