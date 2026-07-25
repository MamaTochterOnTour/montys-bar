import { useEffect, useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiImage,
  FiX,
} from "react-icons/fi";

import {
  galleryCategories,
  galleryItems,
} from "../data/gallery.js";

import "../styles/gallery.css";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const visibleItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory,
        );

  const selectedItem =
    selectedIndex !== null
      ? visibleItems[selectedIndex]
      : null;

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPreviousImage = () => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return currentIndex === 0
        ? visibleItems.length - 1
        : currentIndex - 1;
    });
  };

  const showNextImage = () => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return currentIndex === visibleItems.length - 1
        ? 0
        : currentIndex + 1;
    });
  };

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeCategory]);

  useEffect(() => {
    if (!selectedItem) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem, visibleItems.length]);

  return (
    <main className="gallery-page">
      {/* SEITENKOPF */}
      <section className="gallery-intro">
        <div className="gallery-container">
          <p className="gallery-eyebrow">
            Einblicke in Monty&apos;s
          </p>

          <div className="gallery-intro__content">
            <h1>Galerie</h1>

            <p>
              Eindrücke aus unserem Pub, aus der Küche und von den Menschen,
              die Monty&apos;s zu einem besonderen Ort machen.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="gallery-content">
        <div className="gallery-container">
          <div className="gallery-heading">
            <div>
              <p className="gallery-eyebrow">
                Atmosphäre, Küche & mehr
              </p>

              <h2>Ein kleiner Blick hinter die Kulissen.</h2>
            </div>

            <p>
              Wir zeigen hier bewusst nur ausgewählte große Bilder. So bleibt
              die Galerie ruhig, hochwertig und auf allen Geräten angenehm
              anzusehen.
            </p>
          </div>

          <div
            className="gallery-filters"
            role="group"
            aria-label="Galerie filtern"
          >
            {galleryCategories.map((category) => (
              <button
                type="button"
                key={category.id}
                className={
                  activeCategory === category.id
                    ? "gallery-filter active"
                    : "gallery-filter"
                }
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {visibleItems.map((item, index) => (
              <article
                key={item.id}
                className={`gallery-card gallery-card--${item.size} ${
                  item.placeholder
                    ? "gallery-card--placeholder"
                    : ""
                }`}
              >
                {item.placeholder ? (
                  <div className="gallery-card__placeholder">
                    <FiImage />

                    <strong>{item.title}</strong>

                    <span>{item.subtitle}</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="gallery-card__button"
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`${item.title} groß anzeigen`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="gallery-card__image"
                    />

                    <span className="gallery-card__overlay">
                      <small>{item.subtitle}</small>
                      <strong>{item.title}</strong>
                      <span>Bild öffnen</span>
                    </span>
                  </button>
                )}
              </article>
            ))}
          </div>

          <div className="gallery-note">
            <p>
              Weitere Bilder ergänzen wir, sobald aktuelle Aufnahmen vom Pub,
              vom Team und aus der Küche vorliegen.
            </p>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedItem && !selectedItem.placeholder && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="gallery-lightbox__close"
            onClick={closeLightbox}
            aria-label="Galerie schließen"
          >
            <FiX />
          </button>

          {visibleItems.filter((item) => !item.placeholder).length > 1 && (
            <>
              <button
                type="button"
                className="gallery-lightbox__navigation gallery-lightbox__navigation--previous"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousImage();
                }}
                aria-label="Vorheriges Bild"
              >
                <FiChevronLeft />
              </button>

              <button
                type="button"
                className="gallery-lightbox__navigation gallery-lightbox__navigation--next"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextImage();
                }}
                aria-label="Nächstes Bild"
              >
                <FiChevronRight />
              </button>
            </>
          )}

          <div
            className="gallery-lightbox__content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedItem.src}
              alt={selectedItem.alt}
              className="gallery-lightbox__image"
            />

            <div className="gallery-lightbox__caption">
              <span>{selectedItem.subtitle}</span>
              <strong>{selectedItem.title}</strong>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;