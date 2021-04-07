import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'datum', headerName: 'datum', width: 140 },
  { field: 'Modul', headerName: 'Modul', width: 170 },
  { field: 'Zahlstrecke', headerName: 'Zahlstrecke', width: 230 },
  { field: 'Mitabeiter', headerName: 'Mitabeiter', width: 170 },

 
];

const rows = [
  { id: 1, datum: '12.03.2018', Modul: 'St.Peter Ording', Zahlstrecke: "Sudlicher Weststrand", Mitabeiter:"Sabine Schulter" },
  { id: 2, datum: '24.01.2020', Modul: 'Head Beach Front', Zahlstrecke: "Sudlicher Weststrand", Mitabeiter:"John SMith" },
  { id: 3, datum: '12.07.2021', Modul: 'Hochwartz strand', Zahlstrecke: "Sudlicher Weststrand", Mitabeiter:"Sarah kopf" },
  { id: 4, datum: '12.03.2020', Modul: 'Research monitor1', Zahlstrecke: "Sudlicher Weststrand", Mitabeiter:"Lewis Martin" },
  { id: 5, datum: '07.09.2010', Modul: 'St.Peter Ording', Zahlstrecke: "Sudlicher Weststrand", Mitabeiter:"Lewis Martin" },
  { id: 6, datum: '10.11.2021', Modul: 'Research station 2', Zahlstrecke: "Sudlicher Weststrand", Mitabeiter:"Benjamin Croker" },
  { id: 7, datum: '06.09.2019', Modul: 'Hochwartz strand', Zahlstrecke: "Sudlicher Weststrand", Mitabeiter:"Benjamin Croker" },
  { id: 8, datum: '08.03.2021', Modul: 'Research station 2', Zahlstrecke: "Sudlicher Weststrand", Mitabeiter:"Sabine Schulter" },
  { id: 9, datum: '12.03.2021', Modul: 'St.Peter Ording', Zahlstrecke: "Sudlicher Weststrand", Mitabeiter:"Sarah Kopf" },
  { id: 10, datum: '05.13.2019', Modul: 'Research station 1', Zahlstrecke: "Sudlicher Weststrand", Mitabeiter:"Laura Banks" },
];

export default function TableSpumoMull() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={7} checkboxSelection />
    </div>
  );
}
