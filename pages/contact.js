import Layout from "../components/Layout";

const contacto = () => (
  <Layout>
    <div class="container py-5 w">
      <h1>Pongamonos en contacto!</h1>

      <form class="p-md-5 border rounded-3 bg-body-tertiary">
        <div class="form-floating mb-3">
          <input type="text" id="form4Example1" class="form-control" />

          <label class="form-label" for="form4Example1">
            Nombre
          </label>
        </div>

        <div class="form-floating mb-3">
          <input type="email" id="form4Example2" class="form-control" />

          <label class="form-label" for="form4Example2">
            Email
          </label>
        </div>

        <div class="form-floating mb-3">
          <textarea class="form-control" id="form4Example3" rows="4"></textarea>
          <label class="form-label" for="form4Example3">
            Mensaje
          </label>
        </div>
        <div class="form-check d-flex justify-content-left mb-3">
          <input
            class="form-check-input me-2"
            type="checkbox"
            value=""
            id="form4Example4"
            checked
          />

          <label class="form-check-label" for="form4Example4">
            Enviame una copia de este mensaje
          </label>
        </div>

        <button type="submit" class="w-100 btn btn-lg btn-dark">
          Enviar
        </button>
      </form>
    </div>
  </Layout>
);

export default contacto;
