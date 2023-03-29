import React, {useEffect} from "react";
import api from '../State/api'

import { useDispatch } from 'react-redux';
import { fetchFirstData, fetchSecondData } from "../State/index"

// Button Click fetch from api and Store In a DataBase

function Header() {
  
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchFirstData());
  dispatch(fetchSecondData());
}, [dispatch]);
 

 const handleSubmit = (data) => {
 api.useGetsaveExchangeDataQuery(data);
};
  return (
    <>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">To Crypto exchanges</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Compare all top crypto exchanges. the list is ranked by trading volume
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3" onClick={handleSubmit()}>
               Save In Database
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
