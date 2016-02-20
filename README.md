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

## Related

* [get-tweets][get-tweets] — get latest tweets
* [get-twitter-info][get-twitter-info] — get info about target username
* [get-twitter-followers][get-twitter-followers] — get followers for target username
* [tweet-links][tweet-links] — extract links from tweet
* [tweets-stats][tweets-stats] — get statistics from array of tweets
* [twitter-mentions][twitter-mentions] — get latest mentions for target username
* [twitter-profile-media][twitter-profile-media] — get twitter profile image and banner

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/twitter-tokens
[npm-image]: https://img.shields.io/npm/v/twitter-tokens.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/twitter-tokens
[depstat-image]: https://david-dm.org/iamstarkov/twitter-tokens.svg?style=flat-square

[get-tweets]: https://github.com/iamstarkov/get-tweets
[get-twitter-info]: https://github.com/iamstarkov/get-twitter-info
[get-twitter-followers]: https://github.com/iamstarkov/get-twitter-followers
[tweet-links]: https://github.com/iamstarkov/tweet-links
[tweets-stats]: https://github.com/iamstarkov/tweets-stats
[twitter-mentions]: https://github.com/iamstarkov/twitter-mentions
[twitter-profile-media]: https://github.com/andrepolischuk/twitter-profile-media
