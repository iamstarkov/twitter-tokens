import { equal } from 'assert';
import twitterTokens from './index';

it('should twitterTokens', () => {
  equal(twitterTokens('unicorns'), 'unicorns');
});
