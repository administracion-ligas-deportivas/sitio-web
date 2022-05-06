import axios from "axios";
// import Button from "../components/Button";
// import useSWR from 'swr';
import UserForm from "../components/formulario_back";

function HomePage() {
  return (
    <div>
      <UserForm />
    </div>
    /* <div>
    <form method="POST" action="/api/usuarios">
        <button> SEND </button>
        <Button variant="primary"> ENVIAR </Button>
    </form>
</div> */
  );
}

export default HomePage;
