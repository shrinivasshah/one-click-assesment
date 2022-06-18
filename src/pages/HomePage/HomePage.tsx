import "./homepage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import {
  fetchInstruments,
  memoisedState,
} from "../../store/features/instruments/instrumentSlice";
import { InstrumentSlice } from "../../types";
import Table from "../../components/Table/Table";
import Animation from "../../components/Animation/Animation";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

type Props = {};

const HomePage = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const instruments = useSelector(
    (state: { instrumentSlice: InstrumentSlice }) => state.instrumentSlice
  );
  const records = useSelector(memoisedState);
  const fetchStatus = instruments.status;
  // const records = instruments.instruments[3]?.records;
  useEffect(() => {
    if (fetchStatus === "idle") dispatch(fetchInstruments());
  }, [fetchStatus, dispatch]);

  return (
    <div className="homepage">
      <Breadcrumb />
      {records?.length ? <Table records={records} /> : <Animation />}
    </div>
  );
};

export default HomePage;
