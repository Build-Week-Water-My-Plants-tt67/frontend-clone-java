import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPlants } from '../store/actions';

const UserDashboard = (props) => {
  const { plants, isCallingAPI, error, user_id, username, getPlants } = props;
  const { push } = useHistory();

  useEffect(()=>{
    getPlants(`https://water-my-plants-tt67.herokuapp.com/api/plants/${user_id}`);
  }, [user_id]);

  const handleClick = (ev, plant) => {
    ev.preventDefault();
    push(`/${user_id}/${plant.plant_id}`);
  }

  return (
    <div className='dashboard'>
      { (isCallingAPI) ? (<h3>Loading Dashboard</h3>) :
        <h2>Welcome to your Plant Watering Dashboard, {username}</h2>
      }
      { (plants.length === 0) ? (<h3>Click below to add your first plant!</h3>) :
        <h3>Your Plants</h3>
      } 
      <div>
        {plants.map(plant => (
          <div
            onClick={ev => handleClick(ev, plant)}
            className="plant-card"
            key={plant.plant_id}
          >
            <img
              className="plant-list-image"
              src={plant.image}
              alt={plant.nickname}
            />
            <p>{plant.nickname}</p>
            <p>{plant.species}</p>
          </div>
        ))}
      </div>
    </div>
);

}

const mapStateToProps = (state) => {
  return {
    plants: state.plants.plants,
    isCallingAPI: state.plants.isCallingAPI,
    error: state.plants.error,
    user_id: state.user.user_id,
    username: state.user.username
  }
}

export default connect(mapStateToProps, { getPlants })(UserDashboard);