class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  isAdmin() {
    return this.admin;
  }

}

class Admin extends Usuario {
  constructor() {
    super();
    this.admin = true;
  }

}


const User1 = new Usuario('user@mail.com', 'user123');
console.log(User1.isAdmin());

const Adm1 = new Admin('admin@mail.com', 'admin123');
console.log(Adm1.isAdmin());
