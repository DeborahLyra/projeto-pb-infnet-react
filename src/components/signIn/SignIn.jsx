import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChatsTeardrop } from "phosphor-react";
import './styles.css'

export default function SignIn() {
  return (
    <>
      <div className="signin-container">
        <div className="signin-heading">
          <ChatsTeardrop className="signin-logo" />
          <h2 className="signin-title">
            ForunTalk
          </h2>
        </div>
      </div>
      <form className="signin-form">
        <div className="signin-section">
          <h2 className="signin-section-title">
            Informações Pessoais
          </h2>

          <div className="form-info">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="signin-input-label"
              >
                Nome Completo
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="signin-input"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="signin-input-label"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="signin-input"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="signin-input-label"
              >
                Nome de usuário
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="signin-input"
                />
              </div>
            </div>



            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-white-900"
              >
                Sobre
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  placeholder="Escreva sobre você"
                  className="signin-about-textarea"
                  defaultValue={""}
                />
              </div>
      
            </div>


            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="signin-photo-label"
              >
                Foto de perfil
              </label>
              <div className="signin-photo-upload ">
                <div className="text-center">
                  <PhotoIcon
                    className="text-icon"
                    aria-hidden="true"
                  />
                  <div className="label-upload">
                    <label
                      htmlFor="file-upload"
                      className="signin-file-upload-label"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="signin-file-upload-input"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="photo-info">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          

          </div>
          
          
        </div>
        <div className="signin-buttons">
          <button
            type="button"
            className="signin-cancel-button"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="signin-save-button"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
