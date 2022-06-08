# Speaker design, enclosure and crossover calculator

This project is based on a set of javascript functions from google docs. It's purpose is to serve a simple approach to evaluate enclosure sizes and crossover component specifications. Some basic theory is included also regarding amplifier designing.  

Currently only metric system is supported, but imperial will be added also.

Hosted currently atleast at: [SDEC](https://speakers.vjvalima.com)

## Branch naming

If you wish to contribute to this calculator, here are some guidelines for opening a PR:
- All tests must pass
- All new features must include tests
- Branch naming should comply to either:
    - improvement-abc
    - issue-xx
    - bug-xx
    
## Commit messages

When generating commit messages please refrain to patterns below:
- For issues: issue-xx: converted component to handle problem with incorrect qts
- For improvements: improvement: my contribution for speaker building
- For anything else: something sensible with a simple prefix complying to branch naming

## Hosting

Since this project doesn't need any integrations with a backend it can be staticly hosted from platforms like AWS S3 with CDN in front (example template will be linked later).


## Available Scripts

### `npm start`

Start local environment in port 3000

### `npm test`

Run tests

### `npm run build`

Builds the app for production to the `build` folder.\

## Based on

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
