import app from "firebase/app";
import firebaseConfig from "./config";
import "firebase/auth";

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
  }

  // registra un usuario

  async registrar(nombre, email, password) {
    const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    return await nuevoUsuario.user.updateProfile({
      displayName: nombre,
    });
  }

  // inicio sesion usuario
  async iniciarSesion(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // cerrar sesion
  async cerrarSesion() {
      await this.auth.signOut();
  }

}

const firebase = new Firebase();

export default firebase;
