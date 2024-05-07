# Aave Events Racer
Steam events on multiple networks and race chains based on activity. Each event is worth some amount of points and you need x amount of points to win. Select / "bet" on the chain you think will win by swapping network, no signing required.

I wasn't overly stoked with this build since I spent a lot of time and setup on my original idea and had to back track. Was a good learning process though. Learnt a lot about the v3 Portal and how that is intended to function and read the whitelist bridge proposals on the community page (and if I am not mistaken that it is set to be released in v4 instead now).

## Setup
I used my boilerplate code for this since it puts me in a position that I can start writing the challenge code straight away without having to do any setup. I sometimes use scaffold-eth for this but since I decided not to deploy any contracts for this challenge I went with my personal setup.

You will need an env file with all of the RPC addresses, I've included mine which has my alchemy keys (bad opsec I know) but thought I would just make it easy for you, you might get limited on some of the public ones so you can replace them if need.

### Run
`yarn or npm install`
then
`yarn dev or npm run dev`

### Build
`yarn build or npm run build`
Then use a static site server to serve the build package

## Features Event Racer
- helpful ui hooks for apps that want to integrate aave into their UI
- wagmi simplifies contract integration (get typed events)

### Improvements
- I wanted to expand on the points system. Instead of having basic addition, you could add various mechanics based on notional value of the Event in relation to previous events, add negative moves if the Event is considered "bad" (this one was an easy add but I removed it), negative move if competing chains got events (eg Arbitrum -0.5 if Optimism got a large Supply).


## (Original Idea) Aave Bridge Sluth
Building a bridge explorer which looks for transaction interacting with the Avara Portal to follow cross chain interactions.

### Features
Originally set out to implement the bridge sluth but after a couple of hours of digging I realised it might not be live just yet so pivoted to just a general event streamer / explorer
- user lookup to find bridged interactions (using contract event filters)
- live stream of events coming in and from which bridge

## Notes
- Everything on chain, I wanted to simplify the interactions and not use an external indexing service although this would be the option I would go for any long term project, weather its the graph (when it was free), now I would probably roll my own event streaming service
- took me a while to find that there was no Portal interactions happening
- am aware the tsc build is failing :(, in an ideal world I would have cleaned this up a lot more

## BrainStorming
Brainstorming ideas for the challenge
- aave explorer
- aave sluth. Track bridges across networks through the Portal. Attempt to track capital that is getting washed
- chrome plugin which allows you to highlight hashes and fetch information about them (aave specific)
- aave visualiser, breaking down certain flows as an education piece for less technical users
- position calculator (already exists)
- aave dashboard (already a pretty detailed one on dune analytics)
- cross chain position viewer (probably already exists)
