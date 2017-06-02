# react-message-board

This is a reddit-like message board.

## Feature
Reddit style. Cool, huh?

A slight difference is that I removed the "cancel reply" button and merged it with the "reply" button of each comment.

See the demo [here](https://server-hnujwrlwbk.now.sh/).

## Todo
1. Implement "load more comments". Now it displays all child comments, which can deteriorate UX.
2. Modify "child count". Now it just shows the number of "child" rather than all descendants as Reddit.
3. Implement up- and down-vote.
4. Implement dynamic time string. Now the time string (sth like "a few seconds ago") only updates when there's something updated in the page, but it can be updated automatically after some time period in Reddit.

## Usage

#### Server
``` npm start ```

#### Front-end only
``` npm start ```

``` npm run build ``` to create an optimized version.