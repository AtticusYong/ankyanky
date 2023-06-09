import React, { useState } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Form, Button, FormControl } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    // added className='d-flex' in place of inline
    <Form onSubmit={submitHandler} className="d-flex">
      <FormControl
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></FormControl>
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default withRouter(SearchBox);
