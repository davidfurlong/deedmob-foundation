import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import BannerLanding from "../components/BannerLanding";

export default () => (
  <Layout>
    <Head>
      <title>More Information</title>
      <meta
        name="description"
        content="More information about deedmob foundation"
      />
    </Head>

    <div>
      <BannerLanding />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Omschrijving van de doelstelling van de ANBI</h2>
            </header>
            <p>
              De stichting heeft als doel de beste technologie zoals het vinden,
              registeren, beheren, ondersteunen, contacteren, social media
              intergratie van het Deedmob platform kosteloos aan te bieden aan
              organisaties (zoals goede doelen en sociale instellingen) die
              prudent omgaan met vrijwilligers. De stichting houdt toezicht op
              en bewaakt de kwaliteit van het Deedmob platform. Hiermee hebben
              goede doelen en sociale instellingen die laatste tools tot hun
              beschikking om actief en op de juiste manier vrijwilligers van
              dienst te kunnen zijn.
            </p>
          </div>
        </section>
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>De hoofdlijnen van het beleidsplan</h2>
            </header>
            <p>
              De hoofdlijn van het actuele Beleidsplan 2018 (5 juni 2018 tot 31
              december 2018) zijn gericht op de inrichting van de activiteiten
              van de Stichting Deedmob Foundation en haar uitrol binnen de
              sociale sector. Hieronder vallen de activiteiten voor goede
              doelen, het ondersteunen van vrijwilligersactiviteiten en het
              ontwikkelen van blockchain activiteiten.
            </p>
          </div>
        </section>
        <section id="three">
          <div className="inner">
            <header className="major">
              <h2>Missie & Visie</h2>
            </header>
            <p>
              <b>Missie</b> Alle goede doelen in staat stellen om gebruik te
              maken van de beste IT voor het vinden, binden en vergroten van
              impact van vrijwilligerswerk en het realiseren van die doelen.
            </p>
            <p>
              <b>Visie</b> De technische oplossing bieden om sociale impact te
              ondersteunen en het effect van het doen van goede doel te
              vergroten.
            </p>
          </div>
        </section>
        <section id="three">
          <div className="inner">
            <p>
              <b>Het bestuur</b>
              <br /> Voorzitter: David Furlong BSc <br /> Vice voorzitter:
              Boudewijn Wijnands MSc <br /> Secretaris: Hendrik-Jan Overmeer MSc<br />
              Penningmeester: Tycho Onnasch BSc <br />
            </p>
            <p>
              <b>Beloningsbeleid</b> Het Bestuur van de Stichting is
              onbezoldigd.
            </p>
            <p>
              <b>Verslag van de uitgeoefende activiteiten</b>&nbsp;
              <a
                href="/static/files/Beleidsplan Stichting Deedmob Foundation 2018.pdf"
                download
              >
                Beleidsplan Stichting Deedmob
              </a>
            </p>
            <p>
              <b>Financiële verantwoording</b>
              Deedmob Foundation heeft drie pilaren om haar doelen te
              bewerkstelligen. Ieder met hun eigen budget:
              <img src="/static/images/Begroting Stichting Deedmob Foundation 2018.png" />
            </p>
            <p>
              <i>Uitgaven</i>
              <br />Het Bestuur van de Stichting is onbezoldigd. Wanneer de
              Stichting geld heeft verworven via giften en donaties wordt
              gestart met de uitvoer van de activiteiten. De verwachting is dat
              in het najaar van 2018 kan worden begonnen met deze activiteiten.
            </p>
            <p>
              <i>De Projectcommissie</i>
              <br />De projectcommissie bestaat uit twee bestuursleden van de
              Stichting en twee externe personen. De commissie toets of de
              activiteiten passen binnen de doelstelling van de Stichting en of
              de uitgaven voldoende onderbouwd zijn. Alle activiteiten die de
              Stichting gaat uitvoeren dienen eerst te worden goedgekeurd door
              de projectcommissie.
            </p>
            <p>
              <i>Vermogen</i>
              <br />De Stichting is opgericht op 5 juni 2018 en heeft momenteel
              geen vermogen. De Stichting zal in de toekomst slechts in beperkte
              mate reserves vormen, voor zover noodzakelijk om de continuïteit
              te kunnen waarborgen. In de statuten is opgenomen dat bij
              ontbinding van de stichting een batig liquidatiesaldo wordt
              besteed ten behoeve van een algemeen nut beogende instelling
              (ANBI) met een soortgelijke doelstelling of van een buitenlandse
              instelling die uitsluitend of nagenoeg uitsluitend het algemeen
              nut beoogt en die een soortgelijke doelstelling heeft. Het bestuur
              zal komende tijd kijken welke ANBI’s hiervoor in aanmerking zullen
              komen.
            </p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
