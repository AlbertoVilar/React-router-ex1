import ButtonPgHome from "../../../components/ButtonPgHome/inex";
import Card from "../../../components/Card";
import Header from "../../../components/Header";
import "../styles.css";

export default function PromotionPage() {
  return (
    <>
      <Header />

      <main className="size-page">
        <Card name="Página de Promoção" />
        <ButtonPgHome text="Quero participar" />
      </main>
    </>
  );
}
