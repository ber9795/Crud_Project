import React,{useState, useEffect} from "react";
import { link } from "react-router-dom";
import "./Home.css";
import axios from "axios";

const Home = () => {
const [data, setData] = useState([]);

useEffect(()=> {
  getUsers()
},[])

const getUsers= async()=> {
  const response = await axios.get("http://localhost:5001/users");
  if (response.status ===200) {
    setData(response.data)
  }
};

  return (
    <div style={{ marginTop: "150px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => {

            return (
              <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>(item.name)</td>
              <td>(item.email)</td>
              <td>(item.contact)</td>
              <td>
        <Link to={`/update/$>{item.id}`}>
        <buttom className="btn btn-edit">Edit</buttom>
      </Link>
      <buttom className="btn btn-delete">delete</buttom><Link to={`/view/${item.id}`}>
        <buttom className="btn btn-edit">view</buttom>
      </Link>
</td>
</tr>
  );
  })}
  </tbody>
  </table>

</div>


  );
};

export default Home;