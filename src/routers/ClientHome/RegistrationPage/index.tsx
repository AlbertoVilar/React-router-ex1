import ButtonPgHome from "../../../components/ButtonPgHome/inex";
import Card from "../../../components/Card";
import Header from "../../../components/Header";
import "../styles.css"

export default function RegistrationPage() {
    return (
        
        <>
        <Header />
  
        <main className="size-page">
          <Card  name= "Página de inscrição"/>
          <ButtonPgHome text="Ver promoção"/>
        </main>
      </>
    )
}