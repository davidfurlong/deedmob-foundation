import Link from "next/link";

import Layout from "../components/Layout";
import Banner from "../components/Banner";

export default () => (
  <Layout>
    <div>
      <Banner />

      <div id="main">
        {/*
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
                        <header className="major">
                            <h3>Aliquam</h3>
                            <p>Ipsum dolor sit amet</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                        <header className="major">
                            <h3>Tempus</h3>
                            <p>feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                        <header className="major">
                            <h3>Magna</h3>
                            <p>Lorem etiam nullam</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic04.jpg')`}}>
                        <header className="major">
                            <h3>Ipsum</h3>
                            <p>Nisl sed aliquam</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic05.jpg')`}}>
                        <header className="major">
                            <h3>Consequat</h3>
                            <p>Ipsum dolor sit amet</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic06.jpg')`}}>
                        <header className="major">
                            <h3>Etiam</h3>
                            <p>Feugiat amet tempus</p>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                </section>
            */}
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>What we believe in</h2>
            </header>
            <p>
              The Deedmob Foundation was founded in order to facilitate the
              creation and adoption of technology in the nonprofit sector, as
              well as to organize and facilitate volunteering initiatives to
              engage young people with doing good.
              <br />
              <br />
              We strive to be a organization that is effective in allocating
              resources and is able to communite our impact. In order to achieve
              this mission we believe in collaboration, transparency and
              evaluation. We were founded by Effective Altruists - read more
              about what that is{" "}
              <a href="https://www.effectivealtruism.org/articles/introduction-to-effective-altruism/">
                here
              </a>
              <br />
              <br />
              This website will in the future contain easy access to our
              financials, updates in our projects and critical evaluations of
              our impact.
              <br />
              <br />
              We will also explore best practices of trying to be a tech forward
              nonprofit based in the Netherlands, sharing how we operate and use
              technology to engage the community, volunteers and donors.
            </p>
            <Link href="/about">
              <a className="button next">More information</a>
            </Link>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
