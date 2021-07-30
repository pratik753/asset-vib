const Debt = () => {
  return (
    <>
      <br />
      <h1>Debt</h1>
      <div className="cont">
        <label>Debt :</label>
        <input type="text" /> (in Rs)
      </div>

      <div className="cont">
        <label>Auto :</label>
        <input
          className="mylabel"
          type="text"
          //    ref={housing}
          //   placeholder={housingname}
          //  onBlur={housingfun}
        />
        <label>(in Rs)</label>
      </div>

      <div className="cont">
        <label>IT :</label>
        <input
          className="mylabel"
          type="text"
          //    ref={housing}
          //      placeholder={housingname}
          //     onBlur={housingfun}
        />
        <label>(in Rs)</label>
      </div>
      <div className="cont">
        <table className=" table table-striped table-hover ">
          <tr className="table-dark">
            <th className="table-dark userdark ">Name</th>
            <th className="table-dark userdark">Amount</th>
            <th className="table-dark userdark ">Risk %</th>
            <th className="table-dark userdark">P1</th>
            <th className="table-dark userdark">P2</th>
            <th className="table-dark userdark">P3</th>
          </tr>
          <tr>
            <td>
              {" "}
              <input
                type=" text "
                // style=" width: 70% ; "
                className=" form-control"
                style={{ background: "white" }}
                name=" "
                value=" "
              />
            </td>
            <td>
              {" "}
              <input
                type=" number "
                // style=" width: 70% ; "
                className=" form-control  "
                style={{ background: "white" }}
                name=" "
                value=" "
              />
            </td>
            <td>
              {" "}
              <input
                type=" text "
                ///style=" width: 70% ; "
                className=" form-control "
                style={{ background: "white" }}
                name=" "
                value=" "
              />
            </td>
            <td>
              {" "}
              <input
                type=" text "
                // style=" width: 70% ; "
                className=" form-control"
                name=" "
                style={{ background: "white" }}
                value=" "
              />
            </td>
            <td>
              {" "}
              <input
                type=" text "
                // style=" width: 70% ; "
                className=" form-control  "
                style={{ background: "white" }}
                name=" "
                value=" "
              />
            </td>
            <td>
              {" "}
              <input
                type=" text "
                // style=" width: 70% ; "
                className=" form-control"
                style={{ background: "white" }}
                name=" "
                value=" "
              />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
export default Debt;
