import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import axiosWithAuth from 'axios';
import { deletePlant } from '../store/actions';

const Plant = (props) => {

  const [plant, setPlant] = useState({});
  const { isCallingAPI, error, deletePlant } = props;
  const { user_id, plant_id } = useParams();
  const { push } = useHistory();

  useEffect(()=>{
    axiosWithAuth
      .get(`https://water-my-plants-tt67.herokuapp.com/api/plants/${plant_id}`)
      .then(res=>{
        console.log(res.data);
        setPlant(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
  }, [plant_id]);

  const handleEdit = (e) => {
    e.preventDefault();
    push(`/${user_id}/plants/${plant_id}/edit`);
  }
  
  const handleDelete = (e) => {
    e.preventDefault();
    deletePlant(`https://water-my-plants-tt67.herokuapp.com/api/plants/${plant_id}`);
    push(`/${user_id}/dashboard`);
  }


  return(
    <div className="plant">				
        <h3 className="plant-title">{plant.nickname} Details:</h3>
        
        <div className="plant-container">

          <section className="plant-details">
            <div className="image-wrapper">
              <img src={plant.image} alt={plant.nickname} />
            </div>
              <p>Species: <strong>{plant.species}</strong></p>
              <p>Watering Frequency: <strong>{plant.h20frequency}</strong></p>
          </section>
          
          <section>
            <button onClick={handleEdit}>
              Edit Plant
            </button>
            <button onClick={handleDelete}>
              Delete Plant
            </button>
          </section>

        </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isCallingAPI: state.plants.isCallingAPI,
    error: state.plants.error
  }
}

export default connect(mapStateToProps, { deletePlant })(Plant);
