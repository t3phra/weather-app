import React, { memo } from 'react';

import Button from '../../UI/Button/Button';
import { SEARCH_CITY_ERROR_MESSAGE } from '../../constants/constants';
import { BtnContainer } from './AddNewCity.style';

interface AddNewCityProps {
  city: string
  onAddCity: () => void
  onCloseModal: () => void
}

const AddNewCity:React.FC<AddNewCityProps> = ({ city, onAddCity, onCloseModal }) => (
  <>
    { city
      ? `Add ${city} to your cities?`
      : SEARCH_CITY_ERROR_MESSAGE }
    <BtnContainer>
      { city
        ? (
          <>
            <Button btnType="submit" clicked={onAddCity}>Add</Button>
            <Button btnType="decline" clicked={onCloseModal}>Cancel</Button>
          </>
        ) : (
          <Button btnType="submit" clicked={onCloseModal}>Ok</Button>
        ) }
    </BtnContainer>
  </>
);

export default memo(AddNewCity);
