# twitter-tokens

[![NPM version][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]

> get twitter tokens

Use with [twitter][tw1] or [twit][tw2] package. Twitter tokens is basically
an object of twitter tokens exported from environment.
At some point of twitter api usage I become tired to copy-pasted `tokens.js`
file in a lot of my projects, so I decided to extract this file to separate npm package.

You need to get [Twitter API tokens][how-to-get] first to be able to use this package.

## Install

    npm install --save twitter-tokens

## Usage

```js
import Twitter from 'twitter'; // or 'twit'. it works with both of them

/* Before:
const tokens = {
  consumer_key:        process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:     process.env.TWITTER_CONSUMER_SECRET,
  access_token:        process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_key:    process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
}); */

// Now:
import tokens from 'twitter-tokens';

const client = new Twitter(tokens);
const params = { screen_name: 'nodejs' };
client.get('statuses/user_timeline', params, (err, tweets) => {
  if (err) throw err;
  console.log(tweets);
});
```

[tw1]: http://npmjs.org/package/twitter
[tw2]: http://npmjs.org/package/twit
[how-to-get]: https://iamstarkov.com/get-twitter-tokens/

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/twitter-tokens
[npm-image]: https://img.shields.io/npm/v/twitter-tokens.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/twitter-tokens
[depstat-image]: https://david-dm.org/iamstarkov/twitter-tokens.svg?style=flat-square
