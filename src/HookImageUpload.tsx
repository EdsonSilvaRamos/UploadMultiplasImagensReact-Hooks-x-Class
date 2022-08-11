import React, { useState } from "react";
import './Style.css';

const HookImageUpload = () => {

    const [file, setFile] = useState<any>([])
    //const [fileObj] = useState<any[]>([])
    const [fileArray] = useState<string[]>([])
    const [filesPreview, setFilesPreview] = useState<any>([])

    const fileObj:any[] = [];

    const limparCarregarArrayFileObj = (fileObj:any, e:any) => {
        console.log("Tamanho file fileObj dentro da funcção");
        console.log(fileObj.length);
        fileObj.splice(0, fileObj.length);
        fileObj.push(e.target.files)
    }

    const uploadMultipleFiles = (e:any) => {

        //setFileObj(e.target.files);

        console.log("Tamanho file fileObj inicial");
        console.log(fileObj.length);
        
        console.log("e.target.files");
        console.log(e.target.files);
        
        console.log("fileObj antes do if");
        console.log(fileObj.length);

        if(fileObj === []){
            console.log("Passou pelo if");
            fileObj.push(e.target.files)
        }else{
            console.log("Passou pelo else");
            limparCarregarArrayFileObj(fileObj, e)
        } 

        console.log("Tamanho file fileObj depois de carregado");
        console.log(fileObj.length); 

        // console.log("fileObj");
        // console.log(fileObj);       

        //let lista:any = [];
        
        // fileObj.forEach(function(item)
        // {   
        //     console.log("item - Blob")
        //     console.log(item)
        //     // const itemLista = URL.createObjectURL(item);
        //     // lista.push(itemLista);

        //     //lista.push(URL.createObjectURL(new Blob(item, {type: "image/*"})))         
        //     //console.log(itemLista)
            
        //     // let reader = new FileReader();
        //     // reader.readAsText(item);
        //     // console.log(reader.result)

        // })

        

        //console.log(fileObj.length)

        for (let i = 0; i < fileObj.length; i++) {
            
            console.log("item - Blob")
            let teste = fileObj[0][i];
            console.log(teste)

        }


        //console.log(lista)

        

        //fileObj.forEach()

        for (let i = 0; i < fileObj.length; i++) {            

            //binaryData.push(fileObj[0][i]);
           // binaryData.push(i);
            //let teste = URL.createObjectURL(new Blob(binaryData, {type: "image/*"}));
            //let teste = i;
            
            //console.log("objeto teste")
            //console.log(teste)
            //fileArray.push(URL.createObjectURL(fileObj[0]));
            //fileArray.push(fileObj[i]);
        }

        //console.log("binaryData")
        //console.log(binaryData)

        setFile(fileObj)

        // console.log("fileArray");
        // console.log(fileArray);
        setFilesPreview(fileArray)

        // console.log("filesPreview");
        // console.log(filesPreview);
    }

    function uploadFiles(e:any) {
        e.preventDefault();
        console.log(file);
    }

  return (
    <div>
      <h2>Teste de upload de imagens com Hooks</h2>
      <form>
      <div className="form-group">
          <input
            type="file"
            className="form-control"
            onChange={e => {uploadMultipleFiles(e)}}
            multiple
          />
        </div>
        <button
          type="button"
          className="btn btn-danger btn-block"
          onClick={uploadFiles}
        >
          Upload
        </button>

        <div className="form-group multi-preview centralizar">

        {(filesPreview || []).map((url:any) => (
            <img key={url} src={url} className="img-fluid centralizar" width={1000} alt="..."></img>
        ))}

        </div>        
      </form>
    </div>    
  );
}

export default HookImageUpload;
