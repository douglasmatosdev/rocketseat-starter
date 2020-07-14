class App {
  constructor() {
    this.repositories = [];

    this.formElement = document.getElementById('repo-form');

    this.registerHandler();
  }

  registerHandler() {
    this.formElement.onsubmit = event => this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault();

    this.repositories.push({
      name: '',
      description: '',
      avatar_url: '',
      html_url: ''
    });

    console.log(this.repositories);
  }
}

new App();