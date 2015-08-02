# twitter-tokens

[![NPM version][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]

> get twitter tokens


Use with [twitter][tw] package. Twitter tokens is basically an object of twitter tokens exported from environment. At some point of twitter api usage I become tired to copy-pasted `tokens.js` file in a lot of my projects, so I decided to extract this file to separate npm package.

[tw]: http://npmjs.org/package/twitter

## Install

    npm install --save twitter-tokens

## Usage

```js
import Twitter from 'twitter';

/**
 * Before:
const tokens = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
 */
// Now:
import tokens from 'twitter-tokens';

const client = new Twitter(tokens);
const params = { screen_name: 'nodejs' };
client.get('statuses/user_timeline', params, (err, tweets) => {
  if (err) throw err;
  console.log(tweets);
});
```

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/twitter-tokens
[npm-image]: https://img.shields.io/npm/v/twitter-tokens.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/twitter-tokens
[depstat-image]: https://david-dm.org/iamstarkov/twitter-tokens.svg?style=flat-square
