/**
 * Created by adilet on 12/13/15.
 */

import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  'title'() { return faker.post.title(); },
  'body'() { return faker.post.body(); },
  'date'() {return faker.post.date(); }
});
