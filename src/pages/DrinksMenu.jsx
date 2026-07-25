import { drinkCategories, drinkNavigation } from "../data/drinks.js";
import "../styles/drinks.css";

function DrinkItem({ item }) {
  return (
    <div
      className={`drinks-item ${
        item.featured ? "drinks-item--featured" : ""
      }`}
    >
      <div className="drinks-item__content">
        <h3>{item.name}</h3>

        {item.description && (
          <p>{item.description}</p>
        )}

        {item.alcoholFreePrice && (
          <span className="drinks-item__alternative">
            {item.alcoholFreePrice}
          </span>
        )}
      </div>

      {item.prices ? (
        <div className="drinks-item__prices">
          {item.prices.map((price, index) => (
            <strong key={`${item.name}-${price}-${index}`}>
              {price}
            </strong>
          ))}
        </div>
      ) : (
        <strong
          className={`drinks-item__price ${
            item.pricePending
              ? "drinks-item__price--pending"
              : ""
          }`}
        >
          {item.price}
        </strong>
      )}
    </div>
  );
}

function DrinkCategory({ category, variant = "" }) {
  const categoryClasses = [
    "drinks-category",
    variant ? `drinks-category--${variant}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      id={category.id}
      className={categoryClasses}
    >
      <header className="drinks-category__header">
        <div>
          <p className="drinks-category__eyebrow">
            {category.group}
          </p>

          <h2>{category.title}</h2>
        </div>

        <div className="drinks-category__details">
          {category.size && (
            <span>{category.size}</span>
          )}

          {category.price && (
            <strong>{category.price}</strong>
          )}

          {category.note && (
            <span>{category.note}</span>
          )}
        </div>
      </header>

      {category.priceLabels && (
        <div className="drinks-category__price-headings">
          <span />

          {category.priceLabels.map((label) => (
            <strong key={label}>
              {label}
            </strong>
          ))}
        </div>
      )}

      <div className="drinks-category__items">
        {category.items?.map((item) => (
          <DrinkItem
            key={`${category.id}-${item.name}-${item.description ?? ""}`}
            item={item}
          />
        ))}
      </div>
    </article>
  );
}

function LongdrinkCategory({ category }) {
  return (
    <article
      id={category.id}
      className="drinks-category drinks-category--full drinks-longdrinks"
    >
      <header className="drinks-category__header">
        <div>
          <p className="drinks-category__eyebrow">
            {category.group}
          </p>

          <h2>{category.title}</h2>
        </div>

        <strong className="drinks-longdrinks__price">
          {category.price}
        </strong>
      </header>

      <div className="drinks-longdrinks__layout">
        <section>
          <h3>Spirituose wählen</h3>

          <ul>
            {category.spirits.map((spirit) => (
              <li key={spirit}>{spirit}</li>
            ))}
          </ul>
        </section>

        <div
          className="drinks-longdrinks__plus"
          aria-hidden="true"
        >
          +
        </div>

        <section>
          <h3>Filler wählen</h3>

          <ul>
            {category.fillers.map((filler) => (
              <li key={filler}>{filler}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}

function DrinksMenu() {
  const getCategory = (id) =>
    drinkCategories.find(
      (category) => category.id === id,
    );

  const water = getCategory("wasser");
  const softdrinks = getCategory("softdrinks");
  const juices = getCategory("saefte");
  const icedTea = getCategory("eistee");
  const homemadeLimos = getCategory("homemade-limos");
  const effect = getCategory("effect");

  const beer = getCategory("bier");
  const salitos = getCategory("salitos");

  const aperitif = getCategory("aperitif");
  const whiteWine = getCategory("weisswein");
  const redWine = getCategory("rotwein");
  const rose = getCategory("rose");
  const wineSpritzer = getCategory("weinschorle");

  const cocktails = getCategory("cocktails");
  const alcoholFreeCocktails = getCategory(
    "alkoholfreie-cocktails",
  );

  const longdrinks = getCategory("longdrinks");
  const shots = getCategory("shots");
  const fineBrandies = getCategory("edelbraende");

  const coffee = getCategory("kaffee");
  const tea = getCategory("tee");
  const milkshakes = getCategory("milchshakes");
  const desserts = getCategory("nachspeisen");

  return (
    <main className="drinks-page">
      <section className="drinks-intro">
        <div className="drinks-container">
          <p className="drinks-intro__eyebrow">
            Monty&apos;s Pub & Kitchen
          </p>

          <div className="drinks-intro__content">
            <h1>Getränkekarte</h1>

            <p>
              Von frisch gezapftem Bier über Cocktails
              und Longdrinks bis zu alkoholfreien
              Getränken und Heißgetränken.
            </p>
          </div>
        </div>
      </section>

      <section className="drinks-content">
        <div className="drinks-container">
          <section
            id="alkoholfrei"
            className="drinks-group"
          >
            <div className="drinks-group__heading">
              <p>Erfrischend & alkoholfrei</p>
              <h2>Alkoholfreie Getränke</h2>
            </div>

            <div className="drinks-layout">
              {water && (
                <DrinkCategory category={water} />
              )}

              {softdrinks && (
                <DrinkCategory category={softdrinks} />
              )}
            </div>

            <div className="drinks-layout">
              {juices && (
                <DrinkCategory category={juices} />
              )}

              {icedTea && (
                <DrinkCategory category={icedTea} />
              )}
            </div>

            <div className="drinks-layout">
              {homemadeLimos && (
                <DrinkCategory
                  category={homemadeLimos}
                />
              )}

              {effect && (
                <DrinkCategory category={effect} />
              )}
            </div>
          </section>

          <section className="drinks-group">
            <div className="drinks-group__heading">
              <p>Vom Fass & aus der Flasche</p>
              <h2>Bier</h2>
            </div>

            {beer && (
              <DrinkCategory
                category={beer}
                variant="full"
              />
            )}

            <div className="drinks-layout drinks-layout--single-small">
              {salitos && (
                <DrinkCategory category={salitos} />
              )}
            </div>
          </section>

          <section className="drinks-group">
            <div className="drinks-group__heading">
              <p>Prickelnd & ausgewählt</p>
              <h2>Aperitif & Wein</h2>
            </div>

            {aperitif && (
              <DrinkCategory
                category={aperitif}
                variant="full"
              />
            )}

            <div className="drinks-layout">
              {whiteWine && (
                <DrinkCategory category={whiteWine} />
              )}

              {redWine && (
                <DrinkCategory category={redWine} />
              )}
            </div>

            <div className="drinks-layout">
              {rose && (
                <DrinkCategory category={rose} />
              )}

              {wineSpritzer && (
                <DrinkCategory
                  category={wineSpritzer}
                />
              )}
            </div>
          </section>

          <section className="drinks-group">
            <div className="drinks-group__heading">
              <p>Gemischt & serviert</p>
              <h2>Cocktails</h2>
            </div>

            {cocktails && (
              <DrinkCategory
                category={cocktails}
                variant="full"
              />
            )}

            <div className="drinks-layout drinks-layout--single-small">
              {alcoholFreeCocktails && (
                <DrinkCategory
                  category={alcoholFreeCocktails}
                />
              )}
            </div>
          </section>

          <section className="drinks-group">
            <div className="drinks-group__heading">
              <p>Spirituose plus Filler</p>
              <h2>Longdrinks</h2>
            </div>

            {longdrinks && (
              <LongdrinkCategory
                category={longdrinks}
              />
            )}
          </section>

          <section className="drinks-group">
            <div className="drinks-group__heading">
              <p>Für die kurze Runde</p>
              <h2>Shots & Edel-Brände</h2>
            </div>

            <div className="drinks-layout">
              {shots && (
                <DrinkCategory category={shots} />
              )}

              {fineBrandies && (
                <DrinkCategory
                  category={fineBrandies}
                />
              )}
            </div>
          </section>

          <section className="drinks-group">
            <div className="drinks-group__heading">
              <p>Heiß & gemütlich</p>
              <h2>Kaffee & Tee</h2>
            </div>

            <div className="drinks-layout">
              {coffee && (
                <DrinkCategory category={coffee} />
              )}

              {tea && (
                <DrinkCategory category={tea} />
              )}
            </div>
          </section>

          <section className="drinks-group">
            <div className="drinks-group__heading">
              <p>Zum Abschluss</p>
              <h2>Milchshakes</h2>
            </div>

            <div className="drinks-layout">
              {milkshakes && (
                <DrinkCategory
                  category={milkshakes}
                />
              )}

            </div>
          </section>

          <div className="drinks-legal-note">
            <p>
              Änderungen und Irrtümer vorbehalten.
              Die Getränkekarte wird aktuell noch
              überarbeitet.
            </p>

            <span>
              Bei einzelnen Produkten fehlen in der
              derzeitigen Vorlage noch Preise oder
              eindeutige Größenangaben.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DrinksMenu;