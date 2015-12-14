/**
 * Created by adilet on 12/13/15.
 */

import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  'name'() { return faker.blog.name(); },
  'description'() { return faker.blog.description(); },
  'author'() {return faker.blog.author(); },
  'posts'() {return faker.blog.posts(); }
});
