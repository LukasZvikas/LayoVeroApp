import React from "react";
import { shallow, mount } from "enzyme";
import IndexDash from "../components/screens/dashScreens/search/IndexDash";
import SearchBar from "../components/screens/dashScreens/search/searchBarItems/SearchBar";
import Root from "../../root";

it("shows SearchBar", () => {
  const wrapper = mount(
    <Root>
      <IndexDash />
    </Root>
  );

  expect(wrapper.find(SearchBar).length).toEqual(1);
});
