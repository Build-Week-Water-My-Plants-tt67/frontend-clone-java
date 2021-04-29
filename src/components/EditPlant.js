import React, {useState, useEffect} from 'react';
import schema from './schema/formSchema';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editPlant } from '../store/actions';

const initialFormErrors = {
  nickname: "",
  species: "",
  h20Frequency: "",
  image: "",
};

const initialDisabled = true;

const EditPlant = (props) => {
  
  const { user_id, error, plant, editPlant } = props;
  const push = useHistory();

  const initialFormValues = {
    nickname: plant.nickname,
    species: plant.species,
    h20Frequency: plant.h20Frequency,
    image: plant.image,
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors); 
  const [disabled, setDisabled] = useState(initialDisabled); 

  const inputChange = (name, value) => {
    yup
      .reach(schema, name) 
      .validate(value) 
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value, 
    });
  };

  const formSubmit = () => {
    const updatedPlant = {
      nickname: formValues.nickname.trim(),
      species: formValues.species.trim(),
      h20Frequency: formValues.h20Frequency.trim(),
      image: formValues.image
    };
    editPlant(`/plants/${plant.plant_id}`, updatedPlant);
    if (error === '') {
      push(`/user/${user_id}/plant/${plant.plant_id}`);
    }
  };
    
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const onChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
  }

  const onSubmit = evt => {
    evt.preventDefault();
    formSubmit();
  }

  return (

    <div>
      <h1>Edit Your {plant.nickname}</h1>

      <form onSubmit={onSubmit} id="create-form">
        <div className="errors">
            <em>
          <div>{formErrors.nickname}</div>
          <div>{formErrors.species}</div>
          <div>{formErrors.h20Frequency}</div>
          </em>
        </div>
        <div>
          <label><h4>Nickname: </h4>
            <input
              type="text"
              value={formValues.nickname}
              onChange={onChange}
              name="nickname"
              id="nickname-input"
              placeholder="Nickname"
              maxLength="30"
            />
          </label>

          <label><h4>Species: </h4>
            <input
              type="text"
              value={formValues.species}
              onChange={onChange}
              name="species"
              id="species-input"
              placeholder="Species"
              maxLength="30"
            />
          </label>

          <label><h4>Watering Frequency: </h4>
            <select value={formValues.h20Frequency} name="h20Frequency" onChange={onChange} id="frequency-dropdown">
              <option value="">-- Select --</option>
              <option value="daily">Daily</option>
              <option value="twicePerWeek">Twice Per Week</option>
              <option value="weekly">Weekly</option>
            </select>
          </label>
          <div>
            <label htmlFor="image"><h4>Select Image: </h4>
              <input
                type="text"
                value={formValues.image}
                onChange={onChange}
                name="image"
                id="image-input"
                placeholder="Image Location"
              />
            </label>
          </div>
          <div id="submit">
            <button id="submit" disabled={disabled}>Update Plant</button>
          </div>
        </div>
      </form>
   
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user_id: state.user.user.user_id,
    plant: state.plants.currentPlant,
    isCallingAPI: state.plants.isCallingAPI,
    error: state.plants.error
  }
}

export default connect(mapStateToProps, { editPlant })(EditPlant);