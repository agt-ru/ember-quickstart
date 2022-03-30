import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Bade Model', 'Kurt Mutter', 'Lance Corman'];
  }
}
