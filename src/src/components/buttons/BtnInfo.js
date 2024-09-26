import React, { useEffect, useState, useCallback } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../buttons/buttons.css"
import "../modals/modal.css"

function BtnInfo({ message }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleKeyDown = useCallback(event => {
    if (event.key === "Escape") {
      handleCloseModal()
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
    } else {
      document.removeEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  return (
    <>
      <button className="btnInfo animationFundido" onClick={handleOpenModal}>
        <StaticImage
          className="icon-info"
          src="../../images/icons/icon-info.png"
          alt="info"
        />
      </button>
      {isOpen && (
        <div className="modalInfo" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
            <button className="close-button-info" onClick={handleCloseModal}>❌</button>
              <h2 className="h2">Cómo funciona el Creador de QR</h2>
            </div>
            <div className="modal-body">
              <p className="eosc">
                El Creador de QR es una herramienta interactiva que te permite
                generar códigos QR personalizados con facilidad. Aquí te
                explicamos cómo funciona:
              </p>
              <br />
              <br />
              <span className="instruccion-modal-uso-qr sosc">
                1- Introduce el contenido:
              </span>{" "}
              <p className="eosc">
                En el campo de texto, introduce el contenido que deseas que se
                muestre en el código QR. Puedes elegir entre diferentes tipos de
                contenido, como URLs, texto explicativo, imágenes o coordenadas
                geográficas.
              </p>
              <br />
              <br />
              <span className="instruccion-modal-uso-qr sosc">
                2-Personaliza el diseño:
              </span>{" "}
              <p className="eosc">
                Utiliza las opciones de personalización para cambiar el color y
                el tamaño del código QR. Puedes elegir entre diferentes colores
                y tamaños para adaptar el código QR a tus necesidades.
              </p>
              <br />
              <br />
              <span className="instruccion-modal-uso-qr sosc">
                3-Visualiza el código QR:
              </span>{" "}
              <p className="eosc">
                Una vez que hayas introducido el contenido y personalizado el
                diseño, el código QR se generará automáticamente. Puedes
                visualizarlo en la sección de visualización.
              </p>
              <br />
              <br />
              <span className="instruccion-modal-uso-qr sosc">
                4-Descarga el código QR:
              </span>{" "}
              <p className="eosc">
                Cuando estés satisfecho con el código QR, puedes descargarlo en
                diferentes formatos, como PNG, JPEG o SVG.
                <br />
                <br />
                El Creador de QR es una herramienta fácil de usar y accesible
                para todos. ¡Comienza a crear tus códigos QR ahora!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BtnInfo
