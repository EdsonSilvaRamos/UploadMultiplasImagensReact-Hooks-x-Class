import React, { useState } from "react";
import "./Style.css";

interface Imagens {
  nome: string;
  url: string;
}

const HookImageUpload = () => {
  const [file, setFile] = useState<any>([]);
  //const [fileArray] = useState<EnumImagens>()
  const [filesPreview, setFilesPreview] = useState<any>([]);

  const fileArray: Imagens[] = [];
  const fileObj: any[] = [];

  const uploadMultipleFiles = (e: any) => {
    fileObj.push(e.target.files);

    for (let i = 0; i < fileObj[0].length; i++) {
      const nomeImagem = fileObj[0][i].name;
      if (!fileArray.includes(nomeImagem)) {
        const imagens: Imagens = {
          nome: nomeImagem,
          url: URL.createObjectURL(fileObj[0][i]),
        };
        fileArray.push(imagens);
      }
    }

    console.log("Valor de fileArray");
    console.log(fileArray);

    setFile(fileObj);
    setFilesPreview(fileArray);
  };

  function uploadFiles(e: any) {
    e.preventDefault();
    alert("Imagina que essas imagens foram para o servidor ^^")
    console.log(file);
  }

  return (
    <div>
      <h2>Upload de multiplas imagens e preview com Hooks</h2>
      <form>
        <div className="container">
          <div className="form-group">
            <label form="uploadImagens" className="btn-cta">
              Escolher Arquivos
              <img
                src="https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/action-upload-alt-512.png"
                width={25}
              />
              <input
                id="uploadImagens"
                type="file"
                className="form-control inputFile"
                onChange={(e) => {
                  uploadMultipleFiles(e);
                }}
                multiple
                form="uploadImagens"
              />
            </label>
          </div>
          <button
            type="button"
            className="btn btn-dark btn-block"
            onClick={uploadFiles}
          >
            Upload
          </button>

          
        </div>

        <div className="container-preview">
          {(filesPreview || []).map((url: any) => (
            <img
              key={url.nome}
              src={url.url}
              className="img-fluid centralizar"
              width={350}
              alt="..."
            ></img>
          ))}
        </div>
      </form>
    </div>
  );
};

export default HookImageUpload;
