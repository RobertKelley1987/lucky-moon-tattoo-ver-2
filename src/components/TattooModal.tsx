import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTattoo } from "../hooks/useTattoo";
import { formatDate } from "../lib/dates";
import { nameToSlug } from "../lib/strings";
import Modal from "./Modal";
import Close from "./icons/Close";

function TattooModal() {
  const { selectedTattoo, setSelectedTattoo } = useTattoo();

  function renderImage() {
    if (selectedTattoo) {
      const { alt, image } = selectedTattoo.frontmatter;
      const imageData = getImage(image);

      return imageData ? (
        <GatsbyImage
          alt={alt}
          image={imageData}
          className="tattoo-modal-image"
        />
      ) : null;
    }
  }

  function renderModal() {
    const artist = selectedTattoo?.frontmatter.artist;
    return (
      <Modal onDismiss={() => setSelectedTattoo(null)}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="tattoo-modal-wrapper"
        >
          <div className="tattoo-modal-buttons-wrapper">
            <Link
              onClick={() => setSelectedTattoo(null)}
              className="tattoo-modal-logo"
              to="/"
            >
              LMT
            </Link>
            <button
              onClick={() => setSelectedTattoo(null)}
              className="tattoo-modal-close-button"
            >
              <Close className="tattoo-modal-svg" />
            </button>
          </div>
          <div className="tattoo-modal-content">
            {renderImage()}
            <div className="tattoo-modal-text-wrapper">
              <p className="tattoo-modal-text">
                Tattoo by{" "}
                <Link
                  to={`/artists/${nameToSlug(artist)}`}
                  onClick={() => setSelectedTattoo(null)}
                  className="para-link"
                >
                  {artist}
                </Link>
              </p>
              <p className="tattoo-modal-text">
                {formatDate(selectedTattoo?.frontmatter.date)}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    );
  }

  return selectedTattoo ? renderModal() : null;
}

export default TattooModal;
