import { useState } from "react";
import { storage, db } from "../../firebase/firebaseService";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

import "./Dashboard.scss";

const Dashboard = () => {
  const [dataForm, setDataForm] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    image: "",
    categoria: "",
  });
  const [archivo, setArchivo] = useState(null);

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleUploadFile = (e) => {
    setArchivo(e.target.files[0]);
  };

  const uploadFile = async () => {
    //creamos una referencia de a donde se va a subir el archivo
    const storageRef = ref(storage, `/images/${dataForm.nombre}`);
    try {
      //subimos nuestro archivo
      const image = await uploadBytes(storageRef, archivo);
      //obtenemos la url del archivo ya subido
      const url = await getDownloadURL(image.ref);

      return url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    //primero subimos la imagen y obtenemos la url
    const urlImage = await uploadFile();
    //formateamos correctamente la data a subir
    const product = { ...dataForm, image: urlImage };
    //subimos el producto nuevo a la base de datos
    uploadProduct(product);
  };

  const uploadProduct = async (product) => {
    const productsRef = collection(db, "products");
    try {
      await addDoc(productsRef, product);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard">
      <h2>Agregar nuevo producto</h2>
      <Form
        dataForm={dataForm}
        handleChangeInput={handleChangeInput}
        handleUploadFile={handleUploadFile}
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
};
export default Dashboard;
