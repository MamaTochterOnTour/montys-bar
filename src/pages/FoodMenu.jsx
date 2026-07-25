import { LuLeaf } from "react-icons/lu";
import { foodCategories, sideChoices } from "../data/food.js";
import "../styles/menu.css";

function MenuItem({ item, priceLabels }) {
  return (
    <div
      className={`menu-item ${
        item.featured ? "menu-item--featured" : ""
      }`}
    >
      <div className="menu-item__content">
        <div className="menu-item__title-row">
          <h3>{item.name}</h3>

          {item.vegan && (
            <LuLeaf
              className="menu-item__vegan"
              aria-label="Vegan"
              title="Vegan"
            />
          )}
        </div>

        {item.description && (
          <p className="menu-item__description">
            {item.description}
          </p>
        )}
      </div>

      {item.prices ? (
        <div
          className="menu-item__prices"
          aria-label={
            priceLabels
              ? `${priceLabels.join(" und ")}`
              : "Preise"
          }
        >
          {item.prices.map((price, index) => (
            <strong key={`${item.name}-${index}`}>
              {price}
            </strong>
          ))}
        </div>
      ) : (
        <strong className="menu-item__price">
          {item.price}
        </strong>
      )}
    </div>
  );
}

function MenuCategory({
  category,
  variant = "",
}) {
  const classNames = [
    "menu-category",
    variant ? `menu-category--${variant}` : "",
    category.featured ? "menu-category--featured" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      id={category.id}
      className={classNames}
    >
      <header className="menu-category__header">
        <div>
          <p className="menu-category__eyebrow">
            Monty&apos;s Pub & Kitchen
          </p>

          <h2>{category.title}</h2>
        </div>

        {category.note && (
          <span className="menu-category__note">
            {category.note}
          </span>
        )}
      </header>

      {category.priceLabels && (
        <div className="menu-category__price-headings">
          <span />

          {category.priceLabels.map((label) => (
            <strong key={label}>
              {label}
            </strong>
          ))}
        </div>
      )}

      <div className="menu-category__items">
        {category.items.map((item) => (
          <MenuItem
            key={item.name}
            item={item}
            priceLabels={category.priceLabels}
          />
        ))}
      </div>
    </article>
  );
}

function SideChoice() {
  return (
    <aside className="menu-side-note">
      <div className="menu-side-note__heading">
        <p>Zu Burgern, Schnitzeln & Pulled Pork</p>
        <h2>Wähle deine Beilage</h2>
      </div>

      <div className="menu-side-note__list">
        {sideChoices.map((side) => (
          <span key={side.name}>
            {side.name}
            {side.extraPrice && (
              <strong> + {side.extraPrice}</strong>
            )}
          </span>
        ))}
      </div>

      <p className="menu-side-note__hint">
        Bitte gib deine Wahl beim Bestellen an.
      </p>
    </aside>
  );
}

function FoodMenu() {
  const getCategory = (id) =>
    foodCategories.find(
      (category) => category.id === id,
    );

  const burger = getCategory("burger");
  const schnitzel = getCategory("schnitzel");
  const pulledPork = getCategory("pulled-pork");
  const pubSnacks = getCategory("pub-snacks");
  const salate = getCategory("salate");
  const loadedFries = getCategory("loaded-fries");
  const extraSides = getCategory("extra-beilagen");
  const clubSandwiches = getCategory("clubsandwiches");
  const spareRibs = getCategory("spare-ribs");
  const desserts = getCategory("desserts");

  return (
    <main className="menu-page">
      <section className="menu-intro">
        <div className="menu-container">
          <p className="menu-intro__eyebrow">
            Monty&apos;s Pub & Kitchen
          </p>

          <div className="menu-intro__content">
            <h1>Speisekarte</h1>

            <p>
              Burger, Schnitzel, Pub-Klassiker,
              Salate, Snacks und Desserts –
              frisch zubereitet und ehrlich
              serviert.
            </p>
          </div>
        </div>
      </section>

      <section className="menu-content">
        <div className="menu-container">
          {burger && (
            <MenuCategory
              category={burger}
              variant="full"
            />
          )}

          <div className="menu-layout menu-layout--primary">
            {schnitzel && (
              <MenuCategory category={schnitzel} />
            )}

            <div className="menu-layout__stack">
              {pulledPork && (
                <MenuCategory
                  category={pulledPork}
                  variant="compact"
                />
              )}

              <SideChoice />
            </div>
          </div>

          <div className="menu-layout">
            {clubSandwiches && (
              <MenuCategory
                category={clubSandwiches}
              />
            )}

            {pubSnacks && (
              <MenuCategory category={pubSnacks} />
            )}
          </div>

          <div className="menu-layout">
            {salate && (
              <MenuCategory category={salate} />
            )}

            {loadedFries && (
              <MenuCategory
                category={loadedFries}
              />
            )}
          </div>

          <div className="menu-layout">
            {extraSides && (
              <MenuCategory
                category={extraSides}
              />
            )}

            <div className="menu-layout__stack">
              {spareRibs && (
                <MenuCategory
                  category={spareRibs}
                  variant="compact"
                />
              )}

              {desserts && (
                <MenuCategory
                  category={desserts}
                  variant="compact"
                />
              )}
            </div>
          </div>

          <div className="menu-legal-note">
            <p>
              Änderungen und Irrtümer
              vorbehalten. Informationen zu
              Allergenen und Zusatzstoffen
              erhaltet ihr bei unserem Team.
            </p>

            <span>
              Alle Preise verstehen sich
              inklusive der gesetzlichen
              Mehrwertsteuer.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FoodMenu;