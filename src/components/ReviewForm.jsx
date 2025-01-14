import { useContext, useState } from "react";
import axios from "axios";
import GlobalContext from "../contexts/golbalContext";
export default function ReviewForm({ id, onSuccess = () => {} }) {
  const initialFormData = {
    vote: 1,
    name: "",
    text: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const { setIsLoading } = useContext(GlobalContext);

  function onFormChange(e) {
    const { value, name } = e.target;
    console.log("changhe", value, name);
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function storeReview(e) {
    setIsLoading(true);
    console.log("salva review sul server");
    e.preventDefault();
    axios
      .post(`http://localhost:3000/api/movies/${id}/reviews`, formData)
      .then((res) => {
        console.log(res);
        setFormData(initialFormData);
        onSuccess();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <form onSubmit={storeReview}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Nome"
            onChange={onFormChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            recensione
          </label>
          <textarea
            type="text"
            className="form-control"
            id="text"
            name="text"
            rows={4}
            placeholder="Scrivi la tua recensione"
            value={formData.text}
            onChange={onFormChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="vote" className="form-label">
            Voto
          </label>
          <select
            className="form-control"
            id="vote"
            name="vote"
            value={formData.vote}
            onChange={onFormChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
