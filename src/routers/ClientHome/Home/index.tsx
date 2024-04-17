import { Outlet } from "react-router-dom";
import ButtonPgHome from "../../../components/ButtonPgHome/inex";
import Card from "../../../components/Card";
import Header from "../../../components/Header";


export default function Home() {
  return (
    <>
      <Header />

      <main className="size-page">
        <Card name="Página inicial" />
        <ButtonPgHome text="Ver Promoção" />
      </main>
      <Outlet />
    </>
  );
}